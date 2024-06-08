import { Injectable, Logger } from '@nestjs/common';
import UploadImageRepository from '../database/repository/upload-image.repository';
import { UploadOCRDTO } from './dto/UploadOCRDTO.dto';
import { HttpService } from '@nestjs/axios';
import { NaverOcrDTO } from './interface';
import { AmazonService } from 'src/amazon/amazon.service';
import * as moment from 'moment';

@Injectable()
export class UploadImageService {
  private readonly logger = new Logger(UploadImageService.name);

  constructor(
    private readonly uploadImageRepository: UploadImageRepository,
    private readonly httpService: HttpService,
    private readonly amazonService: AmazonService,
  ) {}

  async uploadImage(
    uploadOCRDto: UploadOCRDTO,
    { OCRName, OCRBuffer, OCRMimetype },
  ) {
    this.logger.verbose(`${UploadImageService.name} - uploadImage`);

    // file 절대경로로 업데이트
    // 1. aws에 업로드
    let imgPath;
    if (OCRName) {
      await this.amazonService.uploadFile(
        OCRName,
        OCRBuffer,
        OCRMimetype,
        'ocrImage',
      );
      const encodedFileName = encodeURIComponent(OCRName);
      imgPath = `${process.env.AMAZON_BUCKET_BASE}/ocrImage/${encodedFileName}`;
    }
    // 2. db에 저장
    const result = await this.uploadImageRepository.createUploadImage({
      ...uploadOCRDto,
      numberOfPeople: Number(uploadOCRDto.numberOfPeople),
      price: Number(uploadOCRDto.price),
      userCode: 'userCode1',
      imgPath,
    });
    const naverOcrDto: NaverOcrDTO = {
      images: [
        {
          format: OCRMimetype.split('/')[1],
          name: OCRName,
          date: null,
          url: result.imgPath,
        },
      ],
      requestId: 'string',
      resultType: 'string',
      version: 'V1',
      timestamp: moment().unix(),
    };
    // naver api로 분석하기
    try {
      const result2 = await this.httpService.axiosRef.post(
        process.env.NAVER_OCR_URL,
        naverOcrDto,
        {
          headers: {
            'X-OCR-SECRET': process.env.X_OCR_SECRET,
            'Content-Type': 'application/json',
          },
        },
      );
      console.log('🚀 ~ UploadImageService ~ result2:', result2.data);
      return result2.data;
    } catch (e) {
      console.log('🚀 ~ UploadImageService ~ e:', e);
    }
  }
}
