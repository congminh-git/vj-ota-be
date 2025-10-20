import { HttpStatus, Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import restClient from '../../utils/rest.client';
import ResponseData from '../../utils/response';

@Injectable()
export class CabinClassesService {
  constructor(private readonly httpService: HttpService) {}

  async getListCabinClasses(token: string, apikey: string) {
    const url = '/cabinClasses';
    try {
      return await restClient.get(url, token, apikey);
    } catch (error) {
      throw new ResponseData(HttpStatus.BAD_REQUEST, error.data.message);
    }
  }
}
