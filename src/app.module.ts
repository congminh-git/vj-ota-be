import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AirportModule } from './modules/airports/airports.module';
import { FlightModule } from './modules/travelOptions/travelOptions.module';
import { CompaniesModule } from './modules/companies/companies.module';
import { PaymentMethodModule } from './modules/payment_methods/payment_methods.module';
import { ReservationsModule } from './modules/reservations/reservations.module';
import { HealthModule } from './modules/health/health.module';
import { QuotationsModule } from './modules/quotations/quotations.module';
import { AncillaryOptionsModule } from './modules/ancillaryOptions/ancillaryOptions.module';
import { SeatSelectionModule } from './modules/seatSelection/seatSelection.module';
import { InsurancePolicyOptionsModule } from './modules/insurancePolicy/insurancePolicy.module';
import { CityPairsModule } from './modules/cityPairs/cityPairs.module';
import { CurrenciesModule } from './modules/currencies/currencies.module';
import { CabinClassesModule } from './modules/cabinClasses/cabinClasses.module';
import { CountriesModule } from './modules/countries/countries.module';
import { AgenciesModule } from './modules/agencies/agencies.module';
import { LowFareOptionsModule } from './modules/lowFareOptions/lowFareOptions.module';
import { AuthModule } from './modules/auth/auth.module';
import { GpayModule } from './modules/gpay/gpay.module';
import { MasterDataModule } from './modules/masterData/masterData.module';
import { TransactionModule } from './modules/transactions/transaction.module';

@Module({
  imports: [
    LowFareOptionsModule,
    AuthModule,
    CityPairsModule,
    CurrenciesModule,
    CabinClassesModule,
    CountriesModule,
    AgenciesModule,
    InsurancePolicyOptionsModule,
    SeatSelectionModule,
    AncillaryOptionsModule,
    QuotationsModule,
    HealthModule,
    AirportModule,
    FlightModule,
    CompaniesModule,
    PaymentMethodModule,
    ReservationsModule,
    GpayModule,
    MasterDataModule,
    TransactionModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
