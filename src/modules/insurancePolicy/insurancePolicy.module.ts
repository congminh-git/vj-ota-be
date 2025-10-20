/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { InsurancePolicyOptionsController } from './insurancePolicy.controller';
import { InsurancePolicyOptionsService } from './insurancePolicy.service';

@Module({
  imports: [HttpModule],
  controllers: [InsurancePolicyOptionsController],
  providers: [InsurancePolicyOptionsService],
})
export class InsurancePolicyOptionsModule {}
