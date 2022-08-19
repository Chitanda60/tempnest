import { Entity, Column, ObjectID, PrimaryGeneratedColumn } from 'typeorm';

@Entity('goods')
export class GoodsEntity {
  @PrimaryGeneratedColumn()
  readonly id: ObjectID;

  @Column({ unique: true })
  readonly name: string;

  @Column()
  readonly price: number;

  @Column()
  readonly count: number;

  @Column()
  readonly remark: string;
}
