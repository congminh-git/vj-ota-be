/* eslint-disable prettier/prettier */
import { Controller, Get } from '@nestjs/common';
import { ApiExcludeController } from '@nestjs/swagger';
import {
  HealthCheckService,
  HttpHealthIndicator,
  HealthCheck,
} from '@nestjs/terminus';
import { HttpMessage } from 'src/global/globalEnum';

@ApiExcludeController()
@Controller('health-check')
export class HealthController {
  constructor(
    private health: HealthCheckService,
    private http: HttpHealthIndicator,
  ) {}

  @Get()
  @HealthCheck()
  check() {
    return { data: 'ok', statusCode: 200, message: HttpMessage.SUCCESS };
  }
}
