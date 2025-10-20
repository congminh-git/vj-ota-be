import { HttpStatus, Injectable, Req } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import restClient from '../../utils/rest.client';
import ResponseData from '../../utils/response';

@Injectable()
export class PaymentMethodService {
  constructor(private readonly httpService: HttpService) {}

  async getListPaymentMethod(bookingKey: string, token: string, apikey: string) {
    const url = `/paymentMethods?bookingKey=${bookingKey}`;
    try {
      return await restClient.get(url, token, apikey);
    } catch (error) {
      return new ResponseData(error.status, error.message, error.data);
    }
  }

  async getListAllPaymentMethod(token: string, apikey: string) {
    const url = `/paymentMethods`;
    try {
      const response = await restClient.get(url, token, apikey);
      let resData;
      if (response.status === 200) {
        resData = {
          identifier: response.data.map((item) => {
            return item.identifier;
          }),
          description: response.data.map((item) => {
            return item.description;
          }),
          key: response.data.map((item) => {
            return item.key;
          }),
        };
        return new ResponseData(
          HttpStatus.OK,
          'Request seccessfully.',
          resData,
        );
      } else {
        return response;
      }
    } catch (error) {
      return new ResponseData(error.status, error.message, error.data);
    }
  }
}
