import { Module } from '@nestjs/common';
import { UploadImageService } from './upload-image.service';
import { DataAccessModule } from '../database/repository.module';
import { UploadImageController } from './upload-imagecontroller';
import UploadImageRepository from '../database/repository/upload-image.repository';

@Module({
  imports: [DataAccessModule],
  controllers: [UploadImageController],
  providers: [UploadImageService, UploadImageRepository],
})
export class UploadImageModule {}
