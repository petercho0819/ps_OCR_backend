import { Module } from '@nestjs/common';
import { UploadImageService } from './upload-image.service';
import { DataAccessModule } from '../database/repository.module';
import { UploadImageController } from './upload-image.controller';
import UploadImageRepository from '../database/repository/upload-image.repository';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [DataAccessModule, HttpModule],
  controllers: [UploadImageController],
  providers: [UploadImageService, UploadImageRepository],
})
export class UploadImageModule {}
