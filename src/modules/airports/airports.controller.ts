import { Controller, Get, HttpStatus, Req, Res, Headers } from '@nestjs/common';
import { AirportService } from './airports.service';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('Airports')
@Controller('airports')
export class AirportController {
  constructor(private readonly airportService: AirportService) {}

  @Get()
  async getListAirport(@Req() req, @Res() res, @Headers('token') token, @Headers('apikey') apikey) {
    try {
      const result = await this.airportService.getListAirport(token, apikey);
      return res.status(result.status).json(result);
    } catch (error) {
      res.status(HttpStatus.BAD_REQUEST).json(error);
    }
  }
}
