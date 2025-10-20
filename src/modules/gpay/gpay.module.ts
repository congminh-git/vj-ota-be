import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { GpayController } from './gpay.controller';
import { GpayService } from './gpay.service';

@Module({
  imports: [HttpModule],
  controllers: [GpayController],
  providers: [GpayService],
})
export class GpayModule {}
