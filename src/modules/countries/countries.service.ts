import { Injectable } from '@nestjs/common';
import restClient from '../../utils/rest.client';
import ResponseData from '../../utils/response';

@Injectable()
export class CountriesService {
  async getListCountries(token: string, apikey: string) {
    const url = '/countries';
    try {
      return await restClient.get(url, token, apikey);
    } catch (error) {
      return new ResponseData(error.status, error.data.message, error.data);
    }
  }

  async getListCountriesProvinces(code: string, token: string, apikey: string) {
    const url = `/countries/${code}/provinces`;
    try {
      return await restClient.get(url, token, apikey);
    } catch (error) {
      return new ResponseData(error.status, error.data.message, error.data);
    }
  }
}
