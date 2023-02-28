import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Chat {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  content: string;

  @Column()
  createdAt: Date;

  @Column()
  fromUserId: number;

  @Column()
  toUserId: number;
}
