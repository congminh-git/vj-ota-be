import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { AncillaryOptionsController } from './ancillaryOptions.controller';
import { AncillaryOptionsService } from './ancillaryOptions.service';

@Module({
  imports: [HttpModule],
  controllers: [AncillaryOptionsController],
  providers: [AncillaryOptionsService],
})
export class AncillaryOptionsModule {}
