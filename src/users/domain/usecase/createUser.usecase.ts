import { Inject } from '@nestjs/common';
import { CreateUserModel } from '../models/createUser.model';
import { CreateUser } from '../ports/createUser.port';
import { UserRepository } from '../ports/userRepository.port';

export class CreateUserUseCase implements CreateUser {
  constructor(
    @Inject(UserRepository)
    private readonly userRepo: UserRepository,
  ) {}

  create({ email, password, username }: CreateUserModel): Promise<void> {
    return this.userRepo.create({ email, password, username });
  }
}
