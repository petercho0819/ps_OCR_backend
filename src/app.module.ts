import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DataAccessModule } from './modules/database/repository.module';
import { UploadImageModule } from './modules/uploadImage/upload-image.module';
import { MONGOOSE_FOR_FEATURE } from './modules/database/constant';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/OCR', {
      // autoCreate: true,
      // authSource: 'admin',
      // authMechanism: 'SCRAM-SHA-256',
    }),
    MongooseModule.forFeature(MONGOOSE_FOR_FEATURE),

    DataAccessModule,
    UploadImageModule,
    HttpModule,
  ],
  providers: [],
})
export class AppModule {}
