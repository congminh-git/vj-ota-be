/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { CurrenciesController } from './currencies.controller';
import { CurrenciesService } from './currencies.service';

@Module({
  imports: [HttpModule],
  controllers: [CurrenciesController],
  providers: [CurrenciesService],
})
export class CurrenciesModule {}
