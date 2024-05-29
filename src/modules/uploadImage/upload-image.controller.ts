import {
  Body,
  Controller,
  Get,
  Logger,
  Param,
  Post,
  Put,
  Request,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { UploadImageService } from './upload-image.service';
import { UploadOCRDTO } from './dto/UploadOCRDTO.dto';
import { UPLOAD_IMAGE } from '../common/end-point/upload-image';
import { FileInterceptor } from '@nestjs/platform-express';

// @UseGuards(JwtAuthGuard)
@Controller(UPLOAD_IMAGE)
export class UploadImageController {
  private readonly logger = new Logger(UploadImageController.name);
  constructor(private readonly uploadImageService: UploadImageService) {}

  @Post('ocrImage')
  @UseInterceptors(FileInterceptor('file'))
  async uploadImage(
    @Body() uploadOCRDto: UploadOCRDTO,
    @UploadedFile() { originalname, buffer, mimetype }: Express.Multer.File,
  ) {
    const { receiptDate, numberOfPeople, receiptType, price, memo } =
      uploadOCRDto;
    return await this.uploadImageService.uploadImage(uploadOCRDto, {
      OCRName: Buffer.from(originalname || '', 'latin1').toString('utf8') || '',
      OCRBuffer: buffer || Buffer.from(''),
      OCRMimetype: mimetype || '',
    });
  }
}
