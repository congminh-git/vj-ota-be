/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { MasterDataController } from './masterData.controller';
import { MasterDataService } from './masterData.service';

@Module({
  imports: [HttpModule],
  controllers: [MasterDataController],
  providers: [MasterDataService],
})
export class MasterDataModule {}
