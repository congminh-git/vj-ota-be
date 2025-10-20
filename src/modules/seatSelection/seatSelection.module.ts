/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { SeatSelectionController } from './seatSelection.controller';
import { SeatSelectionService } from './seatSelection.service';

@Module({
  imports: [HttpModule],
  controllers: [SeatSelectionController],
  providers: [SeatSelectionService],
})
export class SeatSelectionModule {}
