import { Controller, Get, Req, HttpStatus, Res, Headers } from '@nestjs/common';
import { LowFareOptionsService } from './lowFareOptions.service';
import { AxiosRequestConfig } from 'axios';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('LowFareOptions')
@Controller('lowFareOptions')
export class LowFareOptionsController {
  constructor(private readonly lowFareOptionsService: LowFareOptionsService) {}

  @Get()
  async getListLowFareOptions(@Req() req, @Res() res, @Headers('token') token, @Headers('apikey') apikey) {
    try {
      const cityPair = req.query.cityPair;
      if (cityPair === null || cityPair === undefined || cityPair === '') {
        return res.status(400).send('City pair is required');
      }
      const departure = req.query.departure;
      if (departure === null || departure === undefined || departure === '') {
        return res.status(400).send('Departure pair is required');
      }
      const returnFly =
        req.query.return !== null || req.query.return !== ''
          ? req.query.return
          : '';
      const cabinClass =
        req.query.cabinClass !== null ? req.query.cabinClass : '';
      const currency = req.query.currency !== null ? req.query.currency : 'VND';
      const adultCount =
        req.query.adultCount !== null ? req.query.adultCount : 1;
      const childCount =
        req.query.childCount !== null ? req.query.childCount : 0;
      const infantCount =
        req.query.infantCount !== null ? req.query.infantCount : 0;
      const company = req.query.company !== null ? req.query.company : '';
      const daysBeforeDeparture =
        req.query.daysBeforeDeparture !== null
          ? req.query.daysBeforeDeparture
          : 0;
      const daysAfterDeparture =
        req.query.daysAfterDeparture !== null
          ? req.query.daysAfterDeparture
          : 0;
      const daysBeforeReturn =
        req.query.daysBeforeReturn !== null ? req.query.daysBeforeReturn : 0;
      const daysAfterReturn =
        req.query.daysAfterReturn !== null ? req.query.daysAfterReturn : 0;
      const earliestDeparture =
        req.query.earliestDeparture !== null ? req.query.earliestDeparture : '';
      const latestDeparture =
        req.query.latestDeparture !== null ? req.query.latestDeparture : '';
      const earliestReturn =
        req.query.earliestReturn !== null ? req.query.earliestReturn : '';
      const latestReturn =
        req.query.latestReturn !== null ? req.query.latestReturn : '';
      const promoCode = req.query.promoCode !== null ? req.query.promoCode : '';
      const pars: AxiosRequestConfig = {
        params: {
          cityPair: cityPair,
          departure: departure,
          cabinClass: cabinClass,
          currency: currency,
          adultCount: adultCount,
          childCount: childCount,
          infantCount: infantCount,
          daysBeforeDeparture: daysBeforeDeparture,
          daysAfterDeparture: daysAfterDeparture,
          daysBeforeReturn: daysBeforeReturn,
          daysAfterReturn: daysAfterReturn,
          earliestDeparture: earliestDeparture,
          latestDeparture: latestDeparture,
          earliestReturn: earliestReturn,
          latestReturn: latestReturn,
          company: company,
          promoCode: promoCode,
          return: returnFly,
        },
      };
      if (returnFly === '') {
        pars.params.delete('return');
      }
      const result = await this.lowFareOptionsService.getListLowFareOptions(
        pars,
        token,
        apikey,
      );
      return res.status(result.status).json(result);
    } catch (error) {
      return res.status(HttpStatus.BAD_REQUEST).json(error);
    }
  }
}
