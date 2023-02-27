import { ApiProperty } from '@nestjs/swagger';

export class ChatDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  content: string;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  email: string;
}
