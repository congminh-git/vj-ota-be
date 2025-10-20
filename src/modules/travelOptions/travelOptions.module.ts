import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { FlightController } from './travelOptions.controller';
import { FlightService } from './travelOptions.service';

@Module({
  imports: [HttpModule],
  controllers: [FlightController],
  providers: [FlightService],
})
export class FlightModule {}
