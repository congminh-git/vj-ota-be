import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import restClient from '../../utils/rest.client';
import ResponseData from '../../utils/response';

@Injectable()
export class QuotationsService {
  constructor(private readonly httpService: HttpService) {}

  async putQuotationReservation(body: any, token: string, apikey: string) {
    const url = `/quotations?httpMethod=POST&requestUri=reservations`;
    try {
      return await restClient.put(url, body, token, apikey);
    } catch (error) {
      return new ResponseData(error.status, error.message, error.data);
    }
  }

  async putQuotationPaymentExitingReservation(
    body: any,
    reservationKey: string,
    token: string,
    apikey: string,
  ) {
    const url = `/quotations?httpMethod=POST&requestUri=reservations/${reservationKey}/paymentTransactions`;
    try {
      return await restClient.put(url, body, token, apikey);
    } catch (error) {
      return new ResponseData(error.status, error.message, error.data);
    }
  }

  async putQuotationEditReservationPassenger(
    body: any,
    reservationKey: string,
    passengerKey: string,
    token: string,
    apikey: string,
  ) {
    const url = `/quotations?httpMethod=PUT&requestUri=reservations/${reservationKey}/passengers/${passengerKey}`;
    try {
      return await restClient.put(url, body, token, apikey);
    } catch (error) {
      return new ResponseData(error.status, error.message, error.data);
    }
  }

  async putQuotationEditReservationJourney(
    body: any,
    reservationKey: string,
    journeyKey: string,
    token: string,
    apikey: string,
  ) {
    const url = `/quotations?httpMethod=PUT&requestUri=reservations/${reservationKey}/journeys/${journeyKey}`;
    try {
      return restClient.put(url, body, token, apikey);
    } catch (error) {
      return new ResponseData(error.status, error.message, error.data);
    }
  }

  async putQuotationAddReservationJourney(
    body: any,
    reservationKey: string,
    token: string,
    apikey: string,
  ) {
    const url = `/quotations?httpMethod=POST&requestUri=reservations/${reservationKey}/journeys`;
    try {
      return await restClient.put(url, body, token, apikey);
    } catch (error) {
      return new ResponseData(error.status, error.message, error.data);
    }
  }

  async putQuotationAddReservationPassenger(
    body: any,
    reservationKey: string,
    token: string,
    apikey: string,
  ) {
    const url = `/quotations?httpMethod=POST&requestUri=reservations/${reservationKey}/passengers`;
    try {
      return await restClient.put(url, body, token, apikey);
    } catch (error) {
      return new ResponseData(error.status, error.message, error.data);
    }
  }

  async putQuotationEditReservationSeatSelections(
    body: any,
    reservationKey: string,
    token: string,
    apikey: string,
  ) {
    const url = `/quotations?httpMethod=POST&requestUri=reservations/${reservationKey}/seatSelections/bulk`;
    try {
      return await restClient.put(url, body, token, apikey);
    } catch (error) {
      return new ResponseData(error.status, error.message, error.data);
    }
  }

  async putQuotationEditReservationAncillaryPurchases(
    body: any,
    reservationKey: string,
    token: string,
    apikey: string,
  ) {
    const url = `/quotations?httpMethod=POST&requestUri=reservations/${reservationKey}/ancillaryPurchases/bulk`;
    try {
      return await restClient.put(url, body, token, apikey);
    } catch (error) {
      return new ResponseData(error.status, error.message, error.data);
    }
  }

  async putQuotationUpdateBookingInformation(
    body: any,
    reservationKey: string,
    bookingInformationKey: string,
    token: string,
    apikey: string,
  ): Promise<any> {
    const url = `/quotations?httpMethod=PUT&requestUri=reservations/${reservationKey}/bookingInformation/${bookingInformationKey}`;
    try {
      return await restClient.put(url, body, token, apikey);
    } catch (error) {
      return new ResponseData(error.status, error.message, error.data);
    }
  }
}
