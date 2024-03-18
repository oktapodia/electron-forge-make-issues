import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: 'varchar' })
  public firstName!: string;

  @Column({ type: 'varchar' })
  public lastName!: string;

}

export default User;
