import { Injectable, Logger } from '@nestjs/common';
import UploadImageRepository from '../database/repository/upload-image.repository';
import { UploadOCRDTO } from './dto/UploadOCRDTO.dto';
import { HttpService } from '@nestjs/axios';
import { NaverOcrDTO } from './interface';
import { AmazonService } from 'src/amazon/amazon.service';
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
    let imgPath;
    if (OCRName) {
      await this.amazonService.uploadFile(
        OCRName,
        OCRBuffer,
        OCRMimetype,
        'ocrImage',
      );
      imgPath = `${process.env.AMAZON_BASE}/${process.env.AMAZON_BUCKET}/ocrImage/${OCRName}`;
    }

    //   const naverOcrDto: NaverOcrDTO = {
    //     images: [
    //       {
    //         format: 'jpeg',
    //         name: 'demo',
    //         date: null,
    //         url: '',
    //       },
    //     ],
    //     requestId: 'string',
    //     resultType: 'string',
    //     version: 'V1',
    //     timestamp: 1584062336793,
    //   };
    //   // naver api로 분석하기
    //   await this.httpService.axiosRef.post(
    //     process.env.NAVER_OCR_URL,
    //     naverOcrDto,
    //     {
    //       headers: {
    //         'X-OCR-SECRET': process.env.X_OCR_SECRET,
    //         ' Content-Type': 'application/json',
    //       },
    //     },
    //   );
  }
}
