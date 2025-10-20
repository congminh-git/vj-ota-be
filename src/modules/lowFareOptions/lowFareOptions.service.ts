import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import restClient from '../../utils/rest.client';
import ResponseData from '../../utils/response';

@Injectable()
export class LowFareOptionsService {
  constructor(private readonly httpService: HttpService) {}

  async getListLowFareOptions(pars: any, token: string, apikey: string) {
    const url = '/lowFareOptions';
    try {
      return await restClient.getWithParams(url, pars, token, apikey);
    } catch (error) {
      return new ResponseData(error.status, error.data.message);
    }
  }
}
