import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class BookingInformation {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text' })
  bookingKey: string;

  @Column({ type: 'varchar', length: 255 })
  locator: string;

  @Column({ type: 'longtext' })
  thongTin: string;
}
