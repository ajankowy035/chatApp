import { CreateUserUseCase } from './domain/usecase/createUser.usecase';
import { GetUserUseCase } from './domain/usecase/getUser.usecase';
import { PostgresUserRepository } from './adapters/repositories/user.repository';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './adapters/entities/user.entity';
import { UsersController } from './adapters/api/users.controller';
import { UserRepository } from './domain/ports/userRepository.port';
import { GetUser } from './domain/ports/getUser.port';
import { CreateUser } from './domain/ports/createUser.port';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UsersController],
  providers: [
    { provide: UserRepository, useClass: PostgresUserRepository },
    { provide: GetUser, useClass: GetUserUseCase },
    { provide: CreateUser, useClass: CreateUserUseCase },
  ],
})
export class UsersModule {}
