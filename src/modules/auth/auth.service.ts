import { Injectable } from '@nestjs/common';
import restClient from '../../utils/rest.client';
import ResponseData from '../../utils/response';

@Injectable()
export class AuthService {
  private static accessTokens: Record<number, string> = {};
  private static refreshTokens: Record<number, string> = {};

  async authen(data: any, apikey: string) {
    const url = '/userSessions';
    try {
      const response = await restClient.postAuth(url, data, apikey);
      AuthService.accessTokens[1] = data.accessToken;
      AuthService.refreshTokens[1] = data.refreshToken;
      if (response.status === 200) {
        return new ResponseData(
          response.status,
          'Login successfully.',
          response.data,
        );
      } else {
        return new ResponseData(401, 'Invalid username or password', {});
      }
    } catch (error) {
      return new ResponseData(error.status, error.data.message, error.data);
    }
  }

  async refreshToken(data: any, apikey: string) {
    const url = '/userSessions';
    try {
      const response = await restClient.putAuth(url, data, apikey);
      AuthService.accessTokens[1] = data.accessToken;
      AuthService.refreshTokens[1] = data.refreshToken;
      if (response.status === 200) {
        return new ResponseData(
          response.status,
          'Refresh Token successfully.',
          response.data,
        );
      } else {
        return new ResponseData(401, 'Invalid Token', {});
      }
    } catch (error) {
      return new ResponseData(error.status, error.data.message, error.data);
    }
  }

  static storeToken(token: string) {
    AuthService.accessTokens[1] = token;
  }

  static retrieveToken(): string | null {
    return AuthService.accessTokens[1] || null;
  }

  static deleteToken(): void {
    delete AuthService.accessTokens[1];
  }

  static storeRefreshToken(token: string) {
    AuthService.refreshTokens[1] = token;
  }

  static retrieveRefreshToken(): string | null {
    return AuthService.refreshTokens[1] || null;
  }

  static deleteRefreshToken(): void {
    delete AuthService.refreshTokens[1];
  }
}
