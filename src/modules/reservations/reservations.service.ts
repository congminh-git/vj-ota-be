import { Injectable } from '@nestjs/common';
import restClient from '../../utils/rest.client';
import ResponseData from '../../utils/response';

@Injectable()
export class ReservationsService {
  async postReservations(data: any, token: string, apikey: string) {
    const url = `/reservations`;
    try {
      return await restClient.post(url, data, token, apikey);
    } catch (error) {
      return new ResponseData(error.status, error.data.message);
    }
  }

  async postReservationsPaymentTransactions(reqBody: any, token: string, apikey: string) {
    const url = `/reservations/${encodeURI(reqBody.reservationKey)}/paymentTransactions`;
    try {
      const body = reqBody.data;
      return await restClient.post(url, body, token, apikey);
    } catch (error) {
      return new ResponseData(error.status, error.message, error.data);
    }
  }

  async getReservationByLocator(locator: string, token: string, apikey: string) {
    const url = `/reservations?reservationLocator=${locator}`;
    try {
      return await restClient.get(url, token, apikey);
    } catch (error) {
      return new ResponseData(error.status, error.data.message);
    }
  }

  async getReservationByKey(reservationKey: string, token: string, apikey: string) {
    const url = `/reservations/${reservationKey}`;
    try {
      return await restClient.get(url, token, apikey);
    } catch (error) {
      return new ResponseData(error.status, error.data.message);
    }
  }

  async getReservationPassengers(reservationKey: string, token: string, apikey: string) {
    const url = `/reservations/${reservationKey}/passengers`;
    try {
      return await restClient.get(url, token, apikey);
    } catch (error) {
      return new ResponseData(error.status, error.data.message);
    }
  }

  async getReservationPassengerKey(
    reservationKey: string,
    passengerKey: string,
    token: string,
    apikey: string,
  ) {
    const url = `/reservations/${reservationKey}/passengers/${passengerKey}`;
    try {
      return await restClient.get(url, token, apikey);
    } catch (error) {
      return new ResponseData(error.status, error.data.message);
    }
  }

  async putReservationPassengerKey(
    reservationKey: string,
    passengerKey: string,
    body: any,
    token: string,
    apikey: string,
  ) {
    const url = `/reservations/${reservationKey}/passengers/${passengerKey}`;
    try {
      return restClient.put(url, body, token, apikey);
    } catch (error) {
      return new ResponseData(error.status, error.data.message);
    }
  }

  async putReservationJourneyKey(
    reservationKey: string,
    journeyKey: string,
    body: any,
    token: string,
    apikey: string,
  ) {
    const url = `/reservations/${reservationKey}/journeys/${journeyKey}`;
    try {
      return await restClient.put(url, body, token, apikey    );
    } catch (error) {
      return new ResponseData(error.status, error.data.message);
    }
  }

  async postReservationAddJourney(
    reservationKey: string,
    body: any,
    token: string,
    apikey: string,
  ) {
    const url = `/reservations/${reservationKey}/journeys`;
    try {
      return await restClient.post(url, body, token, apikey);
    } catch (error) {
      return new ResponseData(error.status, error.data.message);
    }
  }

  async postReservationAddPassenger(
    reservationKey: string,
    body: any,
    token: string,
    apikey: string,
  ) {
    const url = `/reservations/${reservationKey}/passengers`;
    try {
      return await restClient.post(url, body, token, apikey);
    } catch (error) {
      throw new Error('Failed to fetch airports');
    }
  }

  async postEmailingItineraries(
    reservationKey: string,
    languageCode: string,
    includeAllPassengers: string,
    itineraryTypeCode: string,
    emailAddresses: string,
    senderAddress: string,
    passengerKey: string,
    includeLogo: string,
    includeTermsAndConditions: string,
    token: string,
    apikey: string,
  ) {
    const url = `/reservations/${reservationKey}/emailItinerary?languageCode=${languageCode}&includeAllPassengers=${includeAllPassengers}&itineraryTypeCode=${itineraryTypeCode}&emailAddresses=${emailAddresses}&senderAddress=${senderAddress}&passengerKey=${passengerKey}&includeLogo=${includeLogo}&includeTermsAndConditions=${includeTermsAndConditions}`;
    try {
      return restClient.post(url, {}, token, apikey);
    } catch (error) {
      return new ResponseData(error.status, error.data.message);
    }
  }

  async postReservationAncillary(reservationKey: string, body: any, token: string, apikey: string) {
    const url = `/reservations/${reservationKey}/ancillaryPurchases/bulk`;
    try {
      return await restClient.post(url, body, token, apikey);
    } catch (error) {
      return new ResponseData(error.status, error.data.message);
    }
  }

  async postReservationSeat(reservationKey: string, body: any, token: string, apikey: string) {
    const url = `/reservations/${reservationKey}/seatSelections/bulk`;
    try {
      return await restClient.post(url, body, token, apikey);
    } catch (error) {
      return new ResponseData(error.status, error.data.message);
    }
  }

  async getReservationBookingInformation(
    reservationKey: string,
    bookingInformationKey: string,
    token: string,
    apikey: string,
  ) {
    const url = `/reservations/${reservationKey}/bookingInformation/${bookingInformationKey}`;
    try {
      return await restClient.get(url, token, apikey);
    } catch (error) {
      return new ResponseData(error.status, error.data.message);
    }
  }

  async putReservationBookingInformation(
    reservationKey: string,
    bookingInformationKey: string,
    body: any,
    token: string,
    apikey: string,
  ): Promise<any> {
    const url = `/reservations/${reservationKey}/bookingInformation/${bookingInformationKey}`;
    try {
      return await restClient.put(url, body, token, apikey);
    } catch (error) {
      return new ResponseData(error.status, error.data.message);
    }
  }
}
