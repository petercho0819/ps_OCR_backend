import {
  Body,
  Controller,
  Get,
  Logger,
  Param,
  Put,
  Request,
  UseGuards,
} from '@nestjs/common';
import { UploadImageService } from './upload-image.service';

// @UseGuards(JwtAuthGuard)
@Controller('upload-image')
export class UploadImageController {
  private readonly logger = new Logger(UploadImageController.name);
  constructor(private readonly uploadImageService: UploadImageService) {}

  @Get()
  async uploadImage(@Body() body) {
    const { image } = body;
    return await this.uploadImageService.uploadImage(image);
  }
}
