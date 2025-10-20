/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { QuotationsController } from './quotations.controller';
import { QuotationsService } from './quotations.service';

@Module({
  imports: [HttpModule],
  controllers: [QuotationsController],
  providers: [QuotationsService],
})
export class QuotationsModule {}
