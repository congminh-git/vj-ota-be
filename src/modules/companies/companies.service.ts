import { HttpStatus, Injectable, Req } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import restClient from '../../utils/rest.client';
import ResponseData from '../../utils/response';

@Injectable()
export class CompaniesService {
  constructor(private readonly httpService: HttpService) {}

  async getListCompanies(token: string, apikey: string) {
    const url = '/companies';
    try {
      return await restClient.get(url, token, apikey);
    } catch (error) {
      return new ResponseData(HttpStatus.BAD_REQUEST, error.data.message);
    }
  }
}
