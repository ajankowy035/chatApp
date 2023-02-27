import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import {
  ApiBody,
  ApiNotFoundResponse,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { UserDto } from './../dtos/user.dto';
import { CreateUserDto } from './../dtos/createUser.dto';
import { CreateUser } from '../../domain/ports/createUser.port';
import { GetUser } from '../../domain/ports/getUser.port';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private createUser: CreateUser, private getUser: GetUser) {}

  @Post()
  @ApiBody({ type: CreateUserDto })
  cerateNewUser(
    @Body() { email, password, username }: CreateUserDto,
  ): Promise<void> {
    return this.createUser.create({ email, password, username });
  }

  @ApiResponse({ type: UserDto, status: 200, description: 'Signle User' })
  @ApiNotFoundResponse({
    description: 'User not found',
  })
  @Get('/:id')
  getSingleUser(@Param('id') id: number): Promise<UserDto> {
    return this.getUser.getOne(id);
  }
}
