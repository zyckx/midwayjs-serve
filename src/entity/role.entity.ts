import { Column, Entity } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity('role')
export class Role extends BaseEntity {
  @Column({ comment: '角色名称' })
  name: string;

  /* 用户类别使用数字表示 */
  @Column({ comment: '角色类别', nullable: true })
  type: number;

  @Column({ comment: '角色备注' })
  remark: string;
}
