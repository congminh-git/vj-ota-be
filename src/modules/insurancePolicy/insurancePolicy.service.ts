import { Injectable, Req } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import restClient from '../../utils/rest.client';
import ResponseData from '../../utils/response';

@Injectable()
export class InsurancePolicyOptionsService {
  constructor(private readonly httpService: HttpService) {}

  async putInsurancePolicyOptions(body: any, token: string, apikey: string) {
    const url = `/insurancePolicyOptions?httpMethod=POST&requestUri=reservations`;
    try {
      return await restClient.put(url, body, token, apikey);
    } catch (error) {
      return new ResponseData(error.status, error.data.message, error.data);
    }
  }

  async putInsurancePolicyOptionsReservation(
    body: any,
    reservationKey: string,
    token: string,
    apikey: string,
  ) {
    const url = `/insurancePolicyOptions?httpMethod=POST&requestUri=reservations/${reservationKey}/insurancePolicies&languageCode=EN`;
    try {
      return await restClient.put(url, body, token, apikey);
    } catch (error) {
      return new ResponseData(error.status, error.data.message, error.data);
    }
  }
}
