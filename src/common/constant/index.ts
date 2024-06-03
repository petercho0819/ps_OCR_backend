import { ReceiptType } from '../interface';

export const NODE_ENV = 'NODE_ENV';
export const DEV = 'development';
export const PROD = 'production';

export const AMAZON_AWS_CONFIG = 'AMAZON_AWS_CONFIG';

export const BASE_URL = 'apis';

export const UPLOAD_IMAGE = `${BASE_URL}/upload-image`;
export const DINNER_FEE = 'dinnerFee';
export const TAXI_FEE = 'taxiFee';
export const ETC = 'etc';
export const receiptType: ReceiptType[] = [DINNER_FEE, TAXI_FEE, ETC];

export const INVALID_RECEIPT_TYPE =
  'Invalid receipt type. Status: dinnerFee, taxiFee, etc';
