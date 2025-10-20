import { Injectable, Req } from '@nestjs/common';
import restClient from '../../utils/rest.client';
import ResponseData from '../../utils/response';

@Injectable()
export class AgenciesService {
  async getListAgencies(token: string, apikey: string) {
    const url = '/agencies';
    try {
      return await restClient.get(url, token, apikey);
    } catch (error) {
      return new ResponseData(error.status, error.data.message, error.data);
    }
  }
}
