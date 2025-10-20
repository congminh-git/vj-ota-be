import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import restClient from '../../utils/rest.client';
import ResponseData from '../../utils/response';

@Injectable()
export class CityPairsService {
  constructor(private readonly httpService: HttpService) {}

  async getListCityPairs(token: string, apikey: string) {
    const url = '/cityPairs';
    try {
      return await restClient.get(url, token, apikey);
    } catch (error) {
      return new ResponseData(error.status, error.data.message, error.data);
    }
  }
}
