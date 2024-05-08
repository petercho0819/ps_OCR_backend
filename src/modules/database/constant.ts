import { UploadImage, UploadImageSchema } from './schema/upload-image.schema';

export const MONGOOSE_FOR_FEATURE = [
  { name: UploadImage.name, schema: UploadImageSchema },
];
