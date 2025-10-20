import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { CityPairsController } from './cityPairs.controller';
import { CityPairsService } from './cityPairs.service';

@Module({
  imports: [HttpModule],
  controllers: [CityPairsController],
  providers: [CityPairsService],
})
export class CityPairsModule {}
