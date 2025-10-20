import {
  Controller,
  Get,
  HttpStatus,
  Param,
  Query,
  Req,
  Res,
  Headers,
} from '@nestjs/common';
import { CountriesService } from './countries.service';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';

@ApiTags('Countries')
@Controller('countries')
export class CountriesController {
  constructor(private readonly countriesService: CountriesService) {}

  @Get()
  async getListCountries(@Req() req, @Res() res, @Headers('token') token, @Headers('apikey') apikey) {
    try {
      const result = await this.countriesService.getListCountries(token, apikey);
      return res.status(result.status).json(result);
    } catch (error) {
      return res.status(HttpStatus.BAD_REQUEST).json(error);
    }
  }

  @Get(':code/provinces')
  async getListCountriesProvinces(
    @Req() req,
    @Res() res,
    @Param('code') code: string,
    @Headers('token') token,
    @Headers('apikey') apikey,
  ) {
    try {
      const result = await this.countriesService.getListCountriesProvinces(
        code,
        token,
        apikey,
      );
      return res.status(result.status).json(result);
    } catch (error) {
      return res.status(HttpStatus.BAD_REQUEST).json(error);
    }
  }
}
