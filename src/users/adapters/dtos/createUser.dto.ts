import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty()
  password: string;

  @ApiProperty()
  username: string;

  @ApiProperty()
  email: string;
}
