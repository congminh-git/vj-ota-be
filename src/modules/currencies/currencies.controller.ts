import { Controller, Get, HttpStatus, Req, Res, Headers } from '@nestjs/common';
import { CurrenciesService } from './currencies.service';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('Currencies')
@Controller('currencies')
export class CurrenciesController {
  constructor(private readonly currenciesService: CurrenciesService) {}

  @Get()
  async getListCurrencies(@Req() req, @Res() res, @Headers('token') token, @Headers('apikey') apikey) {
    try {
      const result = await this.currenciesService.getListCurrencies(token, apikey);
      return res.status(result.status).json(result);
    } catch (error) {
      return res.status(HttpStatus.BAD_REQUEST).json(error);
    }
  }
}
