import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 100,
    comment: '账号',
  })
  username: string;

  @Column()
  password: string;

  //默认值为0
  @Column({
    default: 0,
  })
  status: number;

  @CreateDateColumn({
    type: 'timestamp',
  })
  createdDate: Date;
}
