import { Test } from '@nestjs/testing';
import { UsersController } from './../adapters/api/users.controller';
import { InMemoryUserRepository } from './../adapters/repositories/inMemoryUser.repository';
import { CreateUserUseCase } from './../domain/usecase/createUser.usecase';
import { GetUserUseCase } from './../domain/usecase/getUser.usecase';
import { GetUser } from '../domain/ports/getUser.port';
import { CreateUser } from '../domain/ports/createUser.port';
import { UserRepository } from '../domain/ports/userRepository.port';

export function createTestingModule() {
  return Test.createTestingModule({
    controllers: [UsersController],
    providers: [
      {
        provide: GetUser,
        useClass: GetUserUseCase,
      },
      { provide: CreateUser, useClass: CreateUserUseCase },
      { provide: UserRepository, useClass: InMemoryUserRepository },
    ],
  });
}
