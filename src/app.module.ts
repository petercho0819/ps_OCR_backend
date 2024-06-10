import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DataAccessModule } from './modules/database/repository.module';
import { UploadImageModule } from './modules/uploadImage/upload-image.module';
import { MONGOOSE_FOR_FEATURE } from './modules/database/constant';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';
import { AmazonModule } from './amazon/amazon.module';
import { MulterModule } from '@nestjs/platform-express';

@Module({
  imports: [
    MulterModule.register({
      dest: '../../../uploads', // 파일 업로드 디렉토리 설정
    }),
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `.env.${
        process.env.NODE_ENV !== undefined
          ? process.env.NODE_ENV
          : 'development'
      }`,
    }),
    MongooseModule.forRoot(process.env.MONGO_DATABASE, {
      // autoCreate: true,
      // authSource: 'admin',
      // authMechanism: 'SCRAM-SHA-256',
    }),
    MongooseModule.forFeature(MONGOOSE_FOR_FEATURE),
    AmazonModule,
    DataAccessModule,
    UploadImageModule,
    HttpModule,
  ],
  providers: [],
})
export class AppModule {}
