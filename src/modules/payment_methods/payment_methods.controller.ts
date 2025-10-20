import { Controller, Get, Req, Res, HttpStatus, Headers } from '@nestjs/common';
import { PaymentMethodService } from './payment_methods.service';
import { ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('PaymentMethods')
@Controller('PaymentMethods')
export class PaymentMethodController {
  constructor(private readonly paymentMethodService: PaymentMethodService) {}

  @Get()
  async getListPaymentMethod(@Req() req, @Res() res, @Headers('token') token, @Headers('apikey') apikey) {
    try {
      const bookingKey = req.query.bookingKey;
      const result = await this.paymentMethodService.getListPaymentMethod(
        bookingKey,
        token,
        apikey,
      );
      return res.status(result.status).json(result);
    } catch (error) {
      return res.status(HttpStatus.BAD_REQUEST).json(error);
    }
  }
}

@ApiTags('PaymentMethods')
@Controller('paymentMethods')
export class AllPaymentMethodController {
  constructor(private readonly paymentMethodService: PaymentMethodService) {}

  @Get()
  async getListAllPaymentMethod(
    @Req() req,
    @Res() res,
    @Headers('token') token,
    @Headers('apikey') apikey,
  ) {
    try {
      const result =
        await this.paymentMethodService.getListAllPaymentMethod(token, apikey);
      return res.status(result.status).json(result);
    } catch (error) {
      return res.status(HttpStatus.BAD_REQUEST).json(error);
    }
  }
}
