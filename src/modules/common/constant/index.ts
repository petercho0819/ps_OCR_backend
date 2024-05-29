import { ReceiptType } from '../interface';
export const DINNER_FEE = 'dinnerFee';
export const TAXI_FEE = 'taxiFee';
export const ETC = 'etc';
export const receiptType: ReceiptType[] = [DINNER_FEE, TAXI_FEE, ETC];

export const INVALID_RECEIPT_TYPE =
  'Invalid receipt type. Status: dinnerFee, taxiFee, etc';
