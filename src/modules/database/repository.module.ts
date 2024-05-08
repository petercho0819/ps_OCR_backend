import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MONGOOSE_FOR_FEATURE } from './constant';
import UploadImageRepository from './repository/upload-image.repository';

@Module({
  imports: [MongooseModule.forFeature(MONGOOSE_FOR_FEATURE)],
  providers: [
    // Repository providers
    UploadImageRepository,
  ],
  exports: [
    UploadImageRepository,
    // Module exports
    MongooseModule,
  ],
})
export class DataAccessModule {}
