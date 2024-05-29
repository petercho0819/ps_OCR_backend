import {
  IsOptional,
  IsString,
  IsNumber,
  IsNotEmpty,
  Min,
  IsIn,
} from 'class-validator';
import { INVALID_RECEIPT_TYPE, receiptType } from 'src/modules/common/constant';
import { ReceiptType } from 'src/modules/common/interface';

export class UploadOCRDTO {
  @IsNotEmpty()
  @IsString()
  receiptDate: string;

  @IsOptional()
  @IsNumber()
  @Min(1)
  numberOfPeople: number;

  @IsNotEmpty()
  @IsIn(receiptType, { message: INVALID_RECEIPT_TYPE })
  receiptType: ReceiptType;

  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  price: number;

  @IsString()
  @IsOptional()
  memo: string;
}
