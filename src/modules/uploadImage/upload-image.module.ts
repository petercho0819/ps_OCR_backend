import { Module } from '@nestjs/common';
import { UploadImageService } from './upload-image.service';
import { DataAccessModule } from '../database/repository.module';
import { UploadImageController } from './upload-image.controller';
import UploadImageRepository from '../database/repository/upload-image.repository';
import { HttpModule } from '@nestjs/axios';
import { AmazonModule } from 'src/amazon/amazon.module';

@Module({
  imports: [
    DataAccessModule,
    HttpModule,
    AmazonModule.init({
      region: process.env.AMAZON_REGION,
      bucket: process.env.AMAZON_BUCKET,
      credentials: {
        accessKeyId: process.env.AMAZON_BUCKET_ACCESSKEY_ID,
        secretAccessKey: process.env.AMAZON_BUCKET_SECRETKEY,
      },
    }),
  ],
  controllers: [UploadImageController],
  providers: [UploadImageService, UploadImageRepository],
})
export class UploadImageModule {}
