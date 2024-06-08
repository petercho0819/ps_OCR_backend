import { Injectable, Logger } from '@nestjs/common';
import { Model } from 'mongoose';
import {
  UploadImage,
  UploadImageDocument,
} from '../schema/upload-image.schema';
import { InjectModel } from '@nestjs/mongoose';
import { UploadOCRSVCDTO } from 'src/modules/uploadImage/dto/UploadOCRDTO.dto';

@Injectable()
export default class UploadImageRepository {
  private readonly logger = new Logger(UploadImageRepository.name);

  constructor(
    @InjectModel(UploadImage.name)
    private readonly model: Model<UploadImageDocument>,
  ) {}

  async createUploadImage(dto: UploadOCRSVCDTO) {
    this.logger.log(`createUploadImage: ${JSON.stringify(dto)} `);
    return await this.model.create({
      ...dto,
    });
  }

  async uploadImage() {
    return await this.model.find();
  }
}
