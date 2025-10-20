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
import { QuotationsService } from './quotations.service';
import { ResponseData } from 'src/global/globalClass';
import { HttpMessage } from 'src/global/globalEnum';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('quotations')
@Controller('quotations')
export class QuotationsController {
  constructor(private readonly quotationService: QuotationsService) {}

  @Put()
  async putQuotationReservation(
    @Req() req,
    @Res() res,
    @Body() body,
    @Query('requestUri') requestUri,
    @Headers('token') token,
    @Headers('apikey') apikey,
  ) {
    const reservationKey = requestUri.split('/')[1];
    if (requestUri == 'reservations') {
      try {
        const result = await this.quotationService.putQuotationReservation(
          body,
          token,
          apikey,
        );
        return res.status(result.status).json(result);
      } catch (error) {
        return res.status(HttpStatus.BAD_REQUEST).json(error);
      }
    } else if (requestUri.split('/')[2] == 'paymentTransactions') {
      try {
        const result =
          await this.quotationService.putQuotationPaymentExitingReservation(
            body,
            reservationKey,
            token,  
            apikey,
          );
        return res.status(result.status).json(result);
      } catch (error) {
        return res.status(HttpStatus.BAD_REQUEST).json(error);
      }
    } else if (requestUri.split('/')[2] == 'passengers') {
      if (requestUri.split('/')[3]) {
        try {
          const passengerKey = requestUri.split('/')[3];
          const result =
            await this.quotationService.putQuotationEditReservationPassenger(
              body,
              reservationKey,
              passengerKey,
              token,
              apikey,
            );
          return res.status(result.status).json(result);
        } catch (error) {
          return res.status(HttpStatus.BAD_REQUEST).json(error);
        }
      } else {
        try {
          const result =
            await this.quotationService.putQuotationAddReservationPassenger(
              body,
              reservationKey,
              token,
              apikey,
            );
          return res.status(result.status).json(result);
        } catch (error) {
          return res.status(HttpStatus.BAD_REQUEST).json(error);
        }
      }
    } else if (requestUri.split('/')[2] == 'journeys') {
      if (requestUri.split('/')[3]) {
        try {
          const journeyKey = requestUri.split('/')[3];
          const result =
            await this.quotationService.putQuotationEditReservationJourney(
              body,
              reservationKey,
              journeyKey,
              token,
              apikey,
            );
          return res.status(result.status).json(result);
        } catch (error) {
          return res.status(HttpStatus.BAD_REQUEST).json(error);
        }
      } else {
        try {
          const result =
            await this.quotationService.putQuotationAddReservationJourney(
              body,
              reservationKey,
              token,
              apikey,
            );
          return res.status(result.status).json(result);
        } catch (error) {
          return res.status(HttpStatus.BAD_REQUEST).json(error);
        }
      }
    } else if (requestUri.split('/')[2] == 'seatSelections') {
      try {
        const result =
          await this.quotationService.putQuotationEditReservationSeatSelections(
            body,
            reservationKey,
            token,
            apikey,
          );
        return res.status(result.status).json(result);
      } catch (error) {
        return new ResponseData<any>(null, false, HttpMessage.ERROR);
      }
    } else if (requestUri.split('/')[2] == 'ancillaryPurchases') {
      try {
        const result =
          await this.quotationService.putQuotationEditReservationAncillaryPurchases(
            body,
            reservationKey,
            token,
            apikey,
          );
        return res.status(result.status).json(result);
      } catch (error) {
        return res.status(HttpStatus.BAD_REQUEST).json(error);
      }
    } else if (requestUri.split('/')[2] == 'bookingInformation') {
      const bookingInformationKey = requestUri.split('/')[3];
      try {
        const result =
          await this.quotationService.putQuotationUpdateBookingInformation(
            body,
            reservationKey,
            bookingInformationKey,
            token,
            apikey,
          );
        return res.status(result.status).json(result);
      } catch (error) {
        return res.status(HttpStatus.BAD_REQUEST).json(error);
      }
    }
  }
}
