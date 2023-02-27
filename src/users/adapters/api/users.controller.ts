import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserDto } from './../dtos/user.dto';
import { CreateUserDto } from './../dtos/createUser.dto';
import { CreateUser } from '../../domain/ports/createUser.port';
import { GetUser } from '../../domain/ports/getUser.port';

@Controller('users')
export class UsersController {
  constructor(private createUser: CreateUser, private getUser: GetUser) {}

  @Post()
  cerateNewUser(
    @Body() { email, password, username }: CreateUserDto,
  ): Promise<void> {
    return this.createUser.create({ email, password, username });
  }

  @Get('/:id')
  getSingleUser(@Param('id') id: number): Promise<UserDto> {
    return this.getUser.getOne(id);
  }
}
