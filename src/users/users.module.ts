import { Module } from '@nestjs/common';
import { UsersController } from './adapters/api/users.controller';

@Module({
  controllers: [UsersController],
})
export class UsersModule {}
