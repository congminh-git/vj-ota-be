import {
  Controller,
  Get,
  Req,
  HttpStatus,
  Res,
  Headers,
  Param,
  Post,
} from '@nestjs/common';
import { TransactionService } from './transaction.service';
import { ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AxiosRequestConfig } from 'axios';

@Controller('transactions')
export class TransactionController {
  constructor(private readonly transactionService: TransactionService) {}

  @Post('/:transactionID/paymentTransactions')
  async postReservationPaymentTransaction(
    @Req() req,
    @Res() res,
    @Param('transactionID') transactionID,
    @Headers('token') token,
    @Headers('apikey') apikey,
  ) {
    try {
      const result =
        await this.transactionService.postReservationPaymentTransaction(
          transactionID,
          token,
          apikey,
        );
      return res.status(result.status).json(result);
    } catch (error) {
      return res.status(HttpStatus.BAD_REQUEST).json(error);
    }
  }
}
