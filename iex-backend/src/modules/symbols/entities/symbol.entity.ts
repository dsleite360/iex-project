import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Symbol {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;

  @Column('float')
  price: number;

  @Column()
  company: string;

  @Column('timestamp')
  latestUpdate: string;
}
