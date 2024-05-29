export interface NaverOcrDTO {
  images: Images[];
  requestId: string;
  resultType: string;
  version: string;
  timestamp: number;
}
interface Images {
  format: string;
  name: string;
  date: string;
  url: string;
}
