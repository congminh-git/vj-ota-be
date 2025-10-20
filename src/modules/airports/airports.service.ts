import { Injectable, Req, Res } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import restClient from '../../utils/rest.client';
import ResponseData from '../../utils/response';

@Injectable()
export class AirportService {
  constructor(private readonly httpService: HttpService) {}

  async getListAirport(token: string, apikey: string) {
    const url = '/airports';
    const params = {
      applicabilityDescriptor: 'All',
      includeInactive: 'false',
    };
    try {
      return await restClient.getWithParams(url, { params }, token, apikey);
    } catch (error) {
      return new ResponseData(error.status, error.data.message);
    }
  }
}
