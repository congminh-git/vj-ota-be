import {
  Body,
  Controller,
  Post,
  Put,
  Get,
  Param,
  Res,
  Req,
  HttpStatus,
  Headers,
} from '@nestjs/common';
import { ReservationsService } from './reservations.service';
import { ResponseData } from 'src/global/globalClass';
import { HttpMessage } from 'src/global/globalEnum';
import {
  ApiOperation,
  ApiParam,
  ApiQuery,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

@ApiTags('reservations')
@Controller('reservations')
export class ReservationsController {
  constructor(private readonly reservationsService: ReservationsService) {}

  @Post()
  async postReservations(
    @Req() req,
    @Res() res,
    @Body() body,
    @Headers('token') token,
    @Headers('apikey') apikey,
  ) {
    try {
      const result = await this.reservationsService.postReservations(
        body,
        token,
        apikey,
      );
      return res.status(result.status).json(result);
    } catch (error) {
      return res.status(HttpStatus.BAD_REQUEST).json(error);
    }
  }

  @Post('paymentTransactions')
  async postReservationsPaymentTransactions(
    @Req() req,
    @Res() res,
    @Body() body,
    @Headers('token') token,
    @Headers('apikey') apikey,
  ) {
    try {
      const result =
        await this.reservationsService.postReservationsPaymentTransactions(
          body,
          token,
          apikey,
        );
      return res.status(result.status).json(result);
    } catch (error) {
      return res.status(HttpStatus.BAD_REQUEST).json(error);
    }
  }

  @Get('')
  async getReservationByLocator(
    @Req() req,
    @Res() res,
    @Headers('token') token,
    @Headers('apikey') apikey,
  ) {
    try {
      const reservationLocator = req.query.reservationLocator;
      if (
        reservationLocator === null ||
        reservationLocator === undefined ||
        reservationLocator === ''
      ) {
        return res.status(400).send('Locator not found');
      }
      const result = await this.reservationsService.getReservationByLocator(
        reservationLocator,
        token,
        apikey,
      );
      return res.status(result.status).json(result);
    } catch (error) {
      return res.status(HttpStatus.BAD_REQUEST).json(error);
    }
  }

  @Get(':reservationKey')
  async getReservationByKey(
    @Req() req,
    @Res() res,
    @Param('reservationKey') reservationKey: string,
    @Headers('token') token,
    @Headers('apikey') apikey,
  ) {
    try {
      const result = await this.reservationsService.getReservationByKey(
        reservationKey,
        token,
        apikey,
      );
      return res.status(result.status).json(result);
    } catch (error) {
      return res.status(HttpStatus.BAD_REQUEST).json(error);
    }
  }

  @Get(':reservationKey/passengers')
  async getPassengersByKey(
    @Req() req,
    @Res() res,
    @Param('reservationKey') reservationKey: string,
    @Headers('token') token,
    @Headers('apikey') apikey,
  ) {
    try {
      if (
        reservationKey === null ||
        reservationKey === undefined ||
        reservationKey === ''
      ) {
        return res.status(400).send('Reservation not found');
      }
      const result = await this.reservationsService.getReservationPassengers(
        reservationKey,
        token,
        apikey,
      );
      return res.status(result.status).json(result);
    } catch (error) {
      return res.status(HttpStatus.BAD_REQUEST).json(error);
    }
  }

  @Get(':reservationKey/passengers/:passengerKey')
  async getReservationPassengerKey(
    @Req() req,
    @Res() res,
    @Param('reservationKey') reservationKey: string,
    @Param('passengerKey') passengerKey: string,
    @Headers('token') token,
    @Headers('apikey') apikey,
  ) {
    try {
      if (
        reservationKey === null ||
        reservationKey === undefined ||
        reservationKey === ''
      ) {
        return res.status(400).send('Reservation not found');
      }
      if (
        passengerKey === null ||
        passengerKey === undefined ||
        passengerKey === ''
      ) {
        return res.status(400).send('Passenger not found');
      }
      const result = await this.reservationsService.getReservationPassengerKey(
        reservationKey,
        passengerKey,
        token,
        apikey,
      );
      return res.status(result.status).json(result);
    } catch (error) {
      return res.status(HttpStatus.BAD_REQUEST).json(error);
    }
  }

  @Put(':reservationKey/passengers/:passengerKey')
  async putReservationPassengerKey(
    @Req() req,
    @Res() res,
    @Param('reservationKey') reservationKey: string,
    @Param('passengerKey') passengerKey: string,
    @Body() body,
    @Headers('token') token,
    @Headers('apikey') apikey,
  ) {
    try {
      if (
        reservationKey === null ||
        reservationKey === undefined ||
        reservationKey === ''
      ) {
        return res.status(400).send('Reservation not found');
      }
      if (
        passengerKey === null ||
        passengerKey === undefined ||
        passengerKey === ''
      ) {
        return res.status(400).send('Passenger not found');
      }
      const result = await this.reservationsService.putReservationPassengerKey(
        reservationKey,
        passengerKey,
        body,
        token,
        apikey,
      );
      return res.status(result.status).json(result);
    } catch (error) {
      return res.status(HttpStatus.BAD_REQUEST).json(error);
    }
  }

  @Put(':reservationKey/journeys/:journeyKey')
  async putReservationJourneyKey(
    @Req() req,
    @Res() res,
    @Param('reservationKey') reservationKey: string,
    @Param('journeyKey') journeyKey: string,
    @Body() body,
    @Headers('token') token,
    @Headers('apikey') apikey,
  ) {
    try {
      if (
        journeyKey === null ||
        journeyKey === undefined ||
        journeyKey === ''
      ) {
        return res.status(400).send('Journey not found');
      }
      if (
        reservationKey === null ||
        reservationKey === undefined ||
        reservationKey === ''
      ) {
        return res.status(400).send('PassengerKey not found');
      }

      const result = await this.reservationsService.putReservationJourneyKey(
        reservationKey,
        journeyKey,
        body,
        token,
        apikey,
      );
      return res.status(result.status).json(result);
    } catch (error) {
      return res.status(HttpStatus.BAD_REQUEST).json(error);
    }
  }

  @Post(':reservationKey/journeys')
  async postReservationAddJourney(
    @Req() req,
    @Res() res,
    @Param('reservationKey') reservationKey: string,
    @Body() body,
    @Headers('token') token,
    @Headers('apikey') apikey,
  ) {
    try {
      if (
        reservationKey === null ||
        reservationKey === undefined ||
        reservationKey === ''
      ) {
        return res.status(400).send('Reservation not found');
      }
      const result = await this.reservationsService.postReservationAddJourney(
        reservationKey,
        body,
        token,
        apikey,
      );
      return res.status(result.status).json(result);
    } catch (error) {
      return res.status(HttpStatus.BAD_REQUEST).json(error);
    }
  }

  @Post(':reservationKey/passengers')
  async postReservationAddPassenger(
    @Req() req,
    @Res() res,
    @Param('reservationKey') reservationKey: string,
    @Body() body,
    @Headers('token') token,
    @Headers('apikey') apikey,
  ) {
    try {
      if (
        reservationKey === null ||
        reservationKey === undefined ||
        reservationKey === ''
      ) {
        return res.status(400).send('Reservation not found');
      }
      const result = await this.reservationsService.postReservationAddPassenger(
        reservationKey,
        body,
        token,
        apikey,
      );
      return res.status(result.status).json(result);
    } catch (error) {
      return res.status(HttpStatus.BAD_REQUEST).json(error);
    }
  }

  @Post(':reservationKey/emailItinerary')
  async postEmailingItineraries(
    @Req() req,
    @Res() res,
    @Param('reservationKey') reservationKey: string,
    @Headers('token') token,
    @Headers('apikey') apikey,
  ) {
    try {
      const languageCode = req.query.languageCode;
      const includeAllPassengers = req.query.includeAllPassengers;
      const includeTermsAndConditions = req.query.includeTermsAndConditions;
      const includeLogo = req.query.includeLogo;
      const emailAddresses = req.query.emailAddresses;
      const itineraryTypeCode = req.query.itineraryTypeCode;
      const senderAddress = req.query.senderAddress;
      const passengerKey = req.query.passengerKey;
      const result = await this.reservationsService.postEmailingItineraries(
        reservationKey,
        languageCode,
        includeAllPassengers,
        itineraryTypeCode,
        emailAddresses,
        senderAddress,
        passengerKey,
        includeLogo,
        includeTermsAndConditions,
        token,
        apikey,
      );
      return res.status(result.status).json(result);
    } catch (error) {
      return res.status(HttpStatus.BAD_REQUEST).json(error);
    }
  }

  @Post(':reservationKey/ancillaryPurchases/bulk')
  async postReservationAncillary(
    @Req() req,
    @Res() res,
    @Param('reservationKey') reservationKey: string,
    @Body() body,
    @Headers('token') token,
    @Headers('apikey') apikey,
  ) {
    try {
      if (
        reservationKey === undefined ||
        reservationKey === null ||
        reservationKey === ''
      ) {
        return res.status(400).send('Reservation not found');
      }
      const result = await this.reservationsService.postReservationAncillary(
        reservationKey,
        body,
        token,
        apikey,
      );
      return res.status(result.status).json(result);
    } catch (error) {
      return res.status(HttpStatus.BAD_REQUEST).json(error);
    }
  }

  @Post(':reservationKey/seatSelections/bulk')
  async postReservationSeat(
    @Req() req,
    @Res() res,
    @Param('reservationKey') reservationKey: string,
    @Body() body,
    @Headers('token') token,
    @Headers('apikey') apikey,
  ) {
    try {
      if (
        reservationKey === undefined ||
        reservationKey === null ||
        reservationKey === ''
      ) {
        return res.status(400).send('Reservation not found');
      }
      const result = await this.reservationsService.postReservationSeat(
        reservationKey,
        body,
        token,
        apikey,
      );
      return res.status(result.status).json(result);
    } catch (error) {
      return new ResponseData<any>(null, false, HttpMessage.ERROR);
    }
  }

  @Get(':reservationKey/bookingInformation/:bookingInformationKey')
  async getReservationBookingInformation(
    @Req() req,
    @Res() res,
    @Param('reservationKey') reservationKey: string,
    @Param('bookingInformationKey') bookingInformationKey: string,
    @Headers('token') token,
    @Headers('apikey') apikey,
  ) {
    try {
      if (
        bookingInformationKey === undefined ||
        bookingInformationKey === null ||
        bookingInformationKey === ''
      ) {
        return res.status(400).send('Booking not found');
      }
      if (
        reservationKey === undefined ||
        reservationKey === null ||
        reservationKey === ''
      ) {
        return res.status(400).send('Reservation not found');
      }
      const result =
        await this.reservationsService.getReservationBookingInformation(
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

  @Put(':reservationKey/bookingInformation/:bookingInformationKey')
  async putReservationBookingInformation(
    @Req() req,
    @Res() res,
    @Param('reservationKey') reservationKey: string,
    @Param('bookingInformationKey') bookingInformationKey: string,
    @Body() body,
    @Headers('token') token,
    @Headers('apikey') apikey,
  ) {
    try {
      if (
        reservationKey === undefined ||
        reservationKey === null ||
        reservationKey === ''
      ) {
        return res.status(400).send('Reservation not found');
      }
      if (
        bookingInformationKey === undefined ||
        bookingInformationKey === null ||
        bookingInformationKey === ''
      ) {
        return res.status(400).send('Booking not found');
      }
      const result =
        await this.reservationsService.putReservationBookingInformation(
          reservationKey,
          bookingInformationKey,
          body,
          token,  
          apikey,
        );
      return res.status(result.status).json(result);
    } catch (error) {
      return res.status(HttpStatus.BAD_REQUEST).json(error);
    }
  }
}
