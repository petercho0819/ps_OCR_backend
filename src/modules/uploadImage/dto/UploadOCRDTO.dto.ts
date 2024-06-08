import { ReceiptType } from 'aws-sdk/clients/ssmcontacts';
import {
  IsOptional,
  IsString,
  IsNumber,
  IsNotEmpty,
  Min,
  IsIn,
} from 'class-validator';
import { receiptType, INVALID_RECEIPT_TYPE } from 'src/common/constant';

export class UploadOCRDTO {
  @IsNotEmpty()
  @IsString()
  receiptDate: string;

  @IsNotEmpty()
  @IsString()
  name: string;

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

export class UploadOCRSVCDTO extends UploadOCRDTO {
  @IsNotEmpty()
  @IsString()
  userCode: string;

  @IsNotEmpty()
  @IsString()
  imgPath: string;
}
