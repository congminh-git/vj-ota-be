import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import restClient from '../../utils/rest.client';
import ResponseData from '../../utils/response';

@Injectable()
export class TransactionService {
  constructor(private readonly httpService: HttpService) {}

  async postReservationPaymentTransaction(transactionID, token, apikey) {
    const url = `/transactions/${transactionID}/paymentTransactions`;
    try {
      return await restClient.post(url, {}, token, apikey);
    } catch (error) {
      return new ResponseData(error.status, error.data.message);
    }
  }
}
