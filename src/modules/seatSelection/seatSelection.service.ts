import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import restClient from '../../utils/rest.client';
import ResponseData from '../../utils/response';

@Injectable()
export class SeatSelectionService {
  constructor(private readonly httpService: HttpService) {}

  async getListSeatSelection(bookingKey: string, token: string, apikey: string) {
    const url = `/seatSelectionOptions?bookingKey=${bookingKey}`;
    try {
      return await restClient.get(url, token, apikey);
    } catch (error) {
      return new ResponseData(error.status, error.data.message);
    }
  }
}
