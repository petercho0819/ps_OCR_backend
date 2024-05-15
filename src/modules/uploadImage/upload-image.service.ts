import { Injectable, Logger } from '@nestjs/common';
import UploadImageRepository from '../database/repository/upload-image.repository';

@Injectable()
export class UploadImageService {
  private readonly logger = new Logger(UploadImageService.name);

  constructor(private readonly uploadImageRepository: UploadImageRepository) {}

  async uploadImage(uploadOCRDto, { OCRName, OCRBuffer, OCRMimetype }) {
    throw new Error('Method not implemented.');
  }
}
