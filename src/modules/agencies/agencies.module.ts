import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { AgenciesController } from './agencies.controller';
import { AgenciesService } from './agencies.service';

@Module({
  imports: [HttpModule],
  controllers: [AgenciesController],
  providers: [AgenciesService],
})
export class AgenciesModule {}
