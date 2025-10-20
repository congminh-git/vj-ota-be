import { HttpStatus } from '@nestjs/common';

class ResponseData {
  status: HttpStatus;
  message: string;
  data: any;
  constructor(status: HttpStatus, message: string, data?: any) {
    this.status = status;
    this.message = message;
    this.data = data;
  }
}

export default ResponseData;
