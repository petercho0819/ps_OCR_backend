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
import { FileInterceptor } from '@nestjs/platform-express';
import { UPLOAD_IMAGE } from 'src/common/constant';

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
    this.logger.verbose(`${UploadImageController.name} - uploadImage`);
    this.logger.log(`uploadOCRDto - ${JSON.stringify(uploadOCRDto)}`);
    return await this.uploadImageService.uploadImage(uploadOCRDto, {
      OCRName: Buffer.from(originalname || '', 'latin1').toString('utf8') || '',
      OCRBuffer: buffer || Buffer.from(''),
      OCRMimetype: mimetype || '',
    });
  }
}
