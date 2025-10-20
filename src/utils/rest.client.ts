import axios, { AxiosRequestConfig, AxiosInstance } from 'axios';
import axiosRetry from 'axios-retry';
import ResponseData from './response';
import { HttpStatus } from '@nestjs/common';
import { AuthService } from '../modules/auth/auth.service';

class RestClient {
  private axiosInstance: AxiosInstance;

  constructor() {}

  private accessToken: string;
  private refreshToken: string;

  async get(url: string, token: string, apikey: string) {
    try {
      // await this.createAxiosInstance();
      // await this.setupAxiosRetry();

      const responseData = await axios
        .create({
          baseURL: process.env.END_POINT,
          headers: {
            'Content-Type': 'application/json',
            apikey: apikey,
            Authorization: `Bearer ${token}`,
          },
        })
        .get(process.env.END_POINT + url);

      if (responseData.status === 200) {
        return new ResponseData(
          HttpStatus.OK,
          'Request successfully.',
          responseData.data,
        );
      } else {
        return new ResponseData(400, '', responseData.data);
      }
    } catch (error: any) {
      console.log(error);
      AuthService.storeToken('');
      return new ResponseData(error.response.status, error.response.data, {});
    }
  }

  // get data with params
  async getWithParams(url: string, pas: AxiosRequestConfig, token: string, apikey: string) {
    try {
      // await this.createAxiosInstance();
      // await this.setupAxiosRetry();
      const responseData = await axios
        .create({
          baseURL: process.env.END_POINT,
          headers: {
            'Content-Type': 'application/json',
            apikey: apikey,
            Authorization: `Bearer ${token}`,
          },
        })
        .get(process.env.END_POINT + url, pas);

      if (responseData.status === 200) {
        return new ResponseData(
          HttpStatus.OK,
          'Request successfully.',
          responseData.data,
        );
      } else {
        return new ResponseData(400, '', responseData.data);
      }
    } catch (error: any) {
      AuthService.storeToken('');
      return new ResponseData(error.response.status, error.response.data, {});
    }
  }

  // post update with data from body
  async post(url: string, data: object, token: string, apikey: string) {
    try {
      // await this.createAxiosInstance();
      // await this.setupAxiosRetry();

      const response = await axios
        .create({
          baseURL: process.env.END_POINT,
          headers: {
            'Content-Type': 'application/json',
            apikey: apikey,
            Authorization: `Bearer ${token}`,
          },
        })
        .post(process.env.END_POINT + url, data);

      if (response.status === 200) {
        return new ResponseData(200, 'Request successfully.', response.data);
      } else if (response.status === 201) {
        return new ResponseData(201, 'Created successfully.', response.data);
      } else {
        return new ResponseData(400, '', response.data);
      }
    } catch (error: any) {
      AuthService.storeToken('');
      return new ResponseData(error.response.status, error.response.data, {});
    }
  }

  async postAuth(url: string, data: any, apikey: string) {
    try {
      const response = await axios
        .create({
          baseURL: process.env.END_POINT,
          headers: {
            'Content-Type': 'application/json',
            apikey: apikey,
          },
        })
        .post(process.env.END_POINT + url, null, { auth: data });
      if (response.status === 200) {
        return new ResponseData(200, 'Request successfully.', response.data);
      } else if (response.status === 401) {
        return new ResponseData(401, 'Token is invalid or expired.', {});
      } else {
        return new ResponseData(400, '', response.data);
      }
    } catch (error: any) {
      return new ResponseData(error.response.status, error.response.data, {});
    }
  }

  async putAuth(url: string, data: any, apikey: string) {
    console.log(data);
    try {
      const response = await axios
        .create({
          baseURL: process.env.END_POINT,
          headers: {
            'Content-Type': 'application/json',
            apikey: apikey,
          },
        })
        .put(
          process.env.END_POINT + url,
          { refreshToken: data.refreshToken },
          {
            auth: data.auth,
          },
        );
      if (response.status === 200) {
        return new ResponseData(200, 'Request successfully.', response.data);
      } else if (response.status === 401) {
        return new ResponseData(401, 'Token is invalid or expired.', {});
      } else {
        return new ResponseData(400, '', response.data);
      }
    } catch (error: any) {
      return new ResponseData(error.response.status, error.response.data, {});
    }
  }

  async put(url: string, data: any, token: string, apikey: string) {
    try {
      // await this.createAxiosInstance();
      // await this.setupAxiosRetry();

      const response = await axios
        .create({
          baseURL: process.env.END_POINT,
          headers: {
            'Content-Type': 'application/json',
            apikey: apikey,
            Authorization: `Bearer ${token}`,
          },
        })
        .put(process.env.END_POINT + url, data);

      if (response.status === 200) {
        return new ResponseData(
          HttpStatus.OK,
          'Request successfully.',
          response.data,
        );
      } else {
        return new ResponseData(
          HttpStatus.BAD_REQUEST,
          'Request failed.',
          response.data,
        );
      }
    } catch (error: any) {
      AuthService.storeToken('');
      return new ResponseData(error.response.status, error.response.data, {});
    }
  }

  async delete(url: string, token: string, apikey: string) {
    try {
      // await this.createAxiosInstance();
      // await this.setupAxiosRetry();

      const response = await axios
        .create({
          baseURL: process.env.END_POINT,
          headers: {
            'Content-Type': 'application/json',
            apikey: apikey,
            Authorization: `Bearer ${token}`,
          },
        })
        .delete(process.env.END_POINT + url);

      return response.data;
    } catch (error: any) {
      AuthService.storeToken('');
      return new ResponseData(error.response.status, error.response.data, {});
    }
  }
}
export default new RestClient();
