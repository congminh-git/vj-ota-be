import { Controller, Get, HttpStatus, Req, Res, Headers } from '@nestjs/common';
import { MasterDataService } from './masterData.service';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('MasterData')
@Controller('masterData')
export class MasterDataController {
  constructor(private readonly masterDataService: MasterDataService) {}

  @Get()
  async getListMasterData(@Req() req, @Res() res, @Headers('token') token, @Headers('apikey') apikey) {
    try {
      const result = await this.masterDataService.getListMasterData(token, apikey);
      return res.status(result.status).json(result);
    } catch (error) {
      return res.status(HttpStatus.BAD_REQUEST).json(error);
    }
  }
}
