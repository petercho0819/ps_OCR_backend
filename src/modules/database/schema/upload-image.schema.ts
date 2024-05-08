import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ timestamps: true })
export class UploadImage {
  _id: string;

  @Prop()
  nscCode: string;

  @Prop()
  img: string;

  @Prop()
  isActive: boolean;

  @Prop()
  categoryCode: string;

  @Prop()
  modelCode: string;

  @Prop()
  name: string;

  @Prop()
  brochure: string;

  createdAt: Date;

  updatedAt: Date;
}

export type UploadImageDocument = UploadImage & Document;

export const UploadImageSchema = SchemaFactory.createForClass(UploadImage);
