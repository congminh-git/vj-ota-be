import { Controller, Get, HttpStatus, Req, Res, Headers } from '@nestjs/common';
import { CabinClassesService } from './cabinClasses.service';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('CabinClasses')
@Controller('cabinClasses')
export class CabinClassesController {
  constructor(private readonly cabinClassesService: CabinClassesService) {}

  @Get()
  async getListCabinClasses(@Req() req, @Res() res, @Headers('token') token, @Headers('apikey') apikey) {
    try {
      const result = await this.cabinClassesService.getListCabinClasses(token, apikey);
      return res.status(result.status).json(result);
    } catch (error) {
      return res.status(HttpStatus.BAD_REQUEST).json(error);
    }
  }
}
