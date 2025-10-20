import {
  Body,
  Controller,
  HttpStatus,
  Put,
  Query,
  Req,
  Res,
  Headers,
} from '@nestjs/common';
import { InsurancePolicyOptionsService } from './insurancePolicy.service';
import { ApiOperation, ApiQuery, ApiTags } from '@nestjs/swagger';

@ApiTags('InsurancePolicyOptions')
@Controller('insurancePolicyOptions')
export class InsurancePolicyOptionsController {
  constructor(
    private readonly insurancePolicyOptionsService: InsurancePolicyOptionsService,
  ) {}

  @Put()
  async putInsurancePolicyOptionsReservation(
    @Req() req,
    @Res() res,
    @Body() body,
    @Query('requestUri') requestUri,
    @Headers('token') token,
    @Headers('apikey') apikey,
  ) {
    if (requestUri == 'reservations') {
      try {
        const result =
          await this.insurancePolicyOptionsService.putInsurancePolicyOptions(
            body,
            token,
            apikey,
          );
        res.status(result.status).json(result);
      } catch (error) {
        return res.status(HttpStatus.BAD_REQUEST).json(error.data.message);
      }
    } else if (requestUri.split('/')[2] == 'insurancePolicies') {
      try {
        const result =
          await this.insurancePolicyOptionsService.putInsurancePolicyOptionsReservation(
            body,
            requestUri.split('/')[1],
            token,
            apikey,
          );
        return res.status(result.status).json(result);
      } catch (error) {
        return res.status(HttpStatus.BAD_REQUEST).json(error.data.message);
      }
    }
  }
}
