import { Controller, Get, HttpStatus, Req, Res, Headers } from '@nestjs/common';
import { CityPairsService } from './cityPairs.service';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('CityPairs')
@Controller('cityPairs')
export class CityPairsController {
  constructor(private readonly cityPairsService: CityPairsService) {}

  @Get()
  async getListCityPairs(@Req() req, @Res() res, @Headers('token') token, @Headers('apikey') apikey) {
    try {
      const result = await this.cityPairsService.getListCityPairs(token, apikey);
      return res.status(result.status).json(result);
    } catch (error) {
      return res.status(HttpStatus.BAD_REQUEST).json(error);
    }
  }
}
