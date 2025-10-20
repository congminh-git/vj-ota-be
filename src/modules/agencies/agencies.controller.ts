import { Controller, Get, Req, HttpStatus, Res, Headers } from '@nestjs/common';
import { AgenciesService } from './agencies.service';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('Agencies')
@Controller('agencies')
export class AgenciesController {
  constructor(private readonly agenciesService: AgenciesService) {}

  @Get()
  @ApiOperation({ summary: 'Retrieve listing of agencies.' })
  @ApiResponse({
    status: 'default',
    description: '',
    schema: {
      example: [
        {
          href: 'string',
          key: 'string',
          agencyType: {
            href: 'string',
            key: 'string',
            name: 'string',
          },
          iataNumber: 'string',
          name: 'string',
          status: {
            active: true,
            inactive: true,
          },
          masterParentAgency: null,
          directParentAgency: null,
          specifiedTaxConfiguration: {
            overridden: true,
            taxConfiguration: null,
          },
          address: {
            address1: 'string',
            address2: 'string',
            city: 'string',
            location: {
              country: {
                href: 'string',
                code: 'string',
                name: 'string',
              },
              province: {
                href: 'string',
                code: 'string',
                name: 'string',
              },
            },
            postalCode: 'string',
          },
          contactInformation: {
            phoneNumber: 'string',
            faxNumber: 'string',
            email: 'string',
          },
          notes: 'string',
          markupCommission: null,
          specifiedHoldTime: {
            overridden: true,
            holdTime: null,
          },
          specifiedGroupBookingCount: {
            overridden: true,
            groupBookingCount: null,
          },
          agencyAccount: {
            key: 'string',
            agencyAccount: true,
            gdsAccount: true,
            company: {
              href: 'string',
              key: 'string',
              account: {
                accountNumber: 'string',
                creditLimit: 0,
                creditAvailable: 0,
                currency: {
                  href: 'string',
                  code: 'string',
                  description: 'string',
                },
              },
            },
          },
          gdsAccount: null,
          freeCancellationLimit: null,
          timestamp: 'string',
        },
      ],
    },
  })
  async getListAgencies(@Req() req, @Res() res, @Headers('token') token, @Headers('apikey') apikey) {
    try {
      const result = await this.agenciesService.getListAgencies(token, apikey);
      return res.status(result.status).json(result);
    } catch (error) {
      res.status(HttpStatus.BAD_REQUEST).json(error);
    }
  }
}
