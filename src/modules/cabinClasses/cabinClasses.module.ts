import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { CabinClassesController } from './cabinClasses.controller';
import { CabinClassesService } from './cabinClasses.service';

@Module({
  imports: [HttpModule],
  controllers: [CabinClassesController],
  providers: [CabinClassesService],
})
export class CabinClassesModule {}
