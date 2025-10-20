import {
  Controller,
  Get,
  HttpStatus,
  Query,
  Req,
  Res,
  Headers,
} from '@nestjs/common';
import { AncillaryOptionsService } from './ancillaryOptions.service';
import { ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('AncillaryOptions')
@Controller('ancillaryOptions')
export class AncillaryOptionsController {
  constructor(
    private readonly ancillaryOptionsService: AncillaryOptionsService,
  ) {}

  @Get()
  async getListAncillaryOptions(
    @Req() req,
    @Res() res,
    @Query('bookingKey') bookingKey: string,
    @Headers('token') token,
    @Headers('apikey') apikey,
  ) {
    try {
      const result = await this.ancillaryOptionsService.getListAncillaryOptions(
        bookingKey,
        token,
        apikey,
      );
      return res.status(result.status).json(result);
    } catch (error) {
      return res.status(HttpStatus.BAD_REQUEST).json(error.data.message);
    }
  }
}
