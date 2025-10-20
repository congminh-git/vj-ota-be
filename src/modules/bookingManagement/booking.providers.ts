import { DataSource } from 'typeorm';
import { BookingInformation } from './booking.entity';

export const bookingInformation = [
  {
    provide: 'BOOKING_INFO_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(BookingInformation),
    inject: ['DATA_SOURCE'],
  },
];
