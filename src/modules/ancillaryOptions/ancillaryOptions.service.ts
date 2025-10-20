import { HttpStatus, Injectable } from '@nestjs/common';
import restClient from '../../utils/rest.client';
import ResponseData from '../../utils/response';

@Injectable()
export class AncillaryOptionsService {
  constructor() {}
  async getListAncillaryOptions(bookingKey: string, token: string, apikey: string) {
    const url = `/ancillaryOptions`;
    try {
      const params = {
        bookingKey: bookingKey,
      };
      return await restClient.getWithParams(url, { params }, token, apikey);
    } catch (error) {
      return new ResponseData(HttpStatus.BAD_REQUEST, error.data.message);
    }
  }
}
