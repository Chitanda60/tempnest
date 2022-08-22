import {
  Entity,
  Column,
  ObjectIdColumn,
  PrimaryGeneratedColumn,
  ObjectID,
} from 'typeorm';

@Entity('goods')
export class GoodsEntity {
  @PrimaryGeneratedColumn()
  @ObjectIdColumn()
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
