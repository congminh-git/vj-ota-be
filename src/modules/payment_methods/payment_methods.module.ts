import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import {
  AllPaymentMethodController,
  PaymentMethodController,
} from './payment_methods.controller';
import { PaymentMethodService } from './payment_methods.service';

@Module({
  imports: [HttpModule],
  controllers: [PaymentMethodController, AllPaymentMethodController],
  providers: [PaymentMethodService],
})
export class PaymentMethodModule {}
