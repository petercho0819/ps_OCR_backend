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
} from '@nestjs/common';
import { UploadImageService } from './upload-image.service';

// @UseGuards(JwtAuthGuard)
@Controller('upload-image')
export class UploadImageController {
  private readonly logger = new Logger(UploadImageController.name);
  constructor(private readonly uploadImageService: UploadImageService) {}

  @Post('file')
  async uploadImage(
    @Body() uploadOCRDto,
    @UploadedFile() { originalname, buffer, mimetype }: Express.Multer.File,
  ) {
    const { image } = uploadOCRDto;
    return await this.uploadImageService.uploadImage(uploadOCRDto, {
      OCRName: Buffer.from(originalname || '', 'latin1').toString('utf8') || '',
      OCRBuffer: buffer || Buffer.from(''),
      OCRMimetype: mimetype || '',
    });
  }
}
