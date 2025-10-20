import { HttpStatus, Injectable, Req } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import axios from 'axios';
import CryptoJS from 'crypto-js';

@Injectable()
export class GpayService {
  constructor(private readonly httpService: HttpService) {}

  async postPay(bodyData: any) {  
    const url = process.env.GPAY_ENDPOINT + '/api/v1/transaction/pay';
    const signature = CryptoJS.SHA256(
      JSON.stringify(bodyData) + process.env.GPAY_SALT,
    ).toString(CryptoJS.enc.Hex);

    const headers = {
      accept: 'text/plain',
      apikey: process.env.GPAY_APIKEY,
      'content-type': 'application/json',
      signature: signature,
    };

    console.log(bodyData)

    try {
      const response = await axios.post(url, bodyData, {
        headers,
      });
      
      return response.data;
    } catch (error) {
      throw new Error(`Failed to post pay: ${error.message}`);
    }
  }
}
