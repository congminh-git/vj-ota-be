import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { LowFareOptionsController } from './lowFareOptions.controller';
import { LowFareOptionsService } from './lowFareOptions.service';

@Module({
  imports: [HttpModule],
  controllers: [LowFareOptionsController],
  providers: [LowFareOptionsService],
})
export class LowFareOptionsModule {}
