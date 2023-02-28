import { UserModel } from '@Users/domain/models/user.model';
import { ApiProperty } from '@nestjs/swagger';

export class ChatDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  content: string;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  fromUserId: number;

  @ApiProperty()
  toUserId: number;
}
