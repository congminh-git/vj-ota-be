import { Controller, Get, HttpStatus, Req, Res, Headers } from '@nestjs/common';
import { SeatSelectionService } from './seatSelection.service';
import { ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('SeatSelectionOptions')
@Controller('seatSelectionOptions')
export class SeatSelectionController {
  constructor(private readonly seatSelectionService: SeatSelectionService) {}

  @Get()
  async getListSeatSelection(@Req() req, @Res() res, @Headers('token') token, @Headers('apikey') apikey) {
    try {
      const bookingKey = req.query.bookingKey;
      if (
        bookingKey === null ||
        bookingKey === undefined ||
        bookingKey === ''
      ) {
        return res.status(400).send('Booking not found');
      }
      const result = await this.seatSelectionService.getListSeatSelection(
        bookingKey,
        token,
        apikey,
      );
      return res.status(result.status).json(result);
    } catch (error) {
      return res.status(HttpStatus.BAD_REQUEST).json(error);
    }
  }
}
