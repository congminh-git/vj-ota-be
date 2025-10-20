import { Body, Controller, Post, Put, Res } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import ResponseData from '../../utils/response';
import { AuthService } from './auth.service';

@ApiTags()
@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/userSessions')
  async authentication(@Body() body, @Res() res) {
    try {
      const data = {
        username: body.username,
        password: body.password,
      };
      const apikey = body.apikey;
      if (data.username === '' || data.username === undefined) {
        return res
          .status(401)
          .send(new ResponseData(401, 'Username is required.', {}));
      }
      if (data.password === '' || data.password === undefined) {
        return res
          .status(401)
          .send(new ResponseData(401, 'Password is required.', {}));
      }
      if (!apikey) {
        return res
          .status(401)
          .send(new ResponseData(401, 'API Key is required.', {}));
      }
      const response = await this.authService.authen(data, apikey);
      return res.status(response.status).send(response.data);
    } catch (error) {
      return res.status(401).send(new ResponseData(400, 'Request failed.', {}));
    }
  }

  @Put('/userSessions')
  async refreshToken(@Body() body, @Res() res) {
    try {
      const data = {
        refreshToken: body.refreshToken,
        auth: body.auth,
      };
      const apikey = body.apikey ?? body.auth?.apikey;
      if (data.refreshToken === '' || data.refreshToken === undefined) {
        return res
          .status(401)
          .send(new ResponseData(401, 'Refresh is required.', {}));
      }
      if (!apikey) {
        return res
          .status(401)
          .send(new ResponseData(401, 'API Key is required.', {}));
      }
      const response = await this.authService.refreshToken(data, apikey);
      return res.status(response.status).send(response.data);
    } catch (error) {
      return res.status(401).send(new ResponseData(400, 'Request failed.', {}));
    }
  }
}
