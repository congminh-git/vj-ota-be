import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { AirportController } from './airports.controller';
import { AirportService } from './airports.service';

@Module({
  imports: [HttpModule],
  controllers: [AirportController],
  providers: [AirportService],
})
export class AirportModule {}
