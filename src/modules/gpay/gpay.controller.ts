import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Post,
  Req,
  Res,
} from '@nestjs/common';
import { GpayService } from './gpay.service';

@Controller('gpay')
export class GpayController {
  constructor(private readonly gpayService: GpayService) {}

  @Post('pay')
  async postPay(@Body() body) {
    try {
      const bodyData = body;
      const result = await this.gpayService.postPay(bodyData);
      return result;
    } catch (error) {
      return error;
    }
  }
}
