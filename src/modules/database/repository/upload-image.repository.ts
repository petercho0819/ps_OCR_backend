import { Injectable, Logger } from '@nestjs/common';
import { Model } from 'mongoose';
import {
  UploadImage,
  UploadImageDocument,
} from '../schema/upload-image.schema';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export default class UploadImageRepository {
  private readonly logger = new Logger(UploadImageRepository.name);

  constructor(
    @InjectModel(UploadImage.name)
    private readonly model: Model<UploadImageDocument>,
  ) {}

  async uploadImage() {
    return await this.model.find();
  }
}
