import { Inject } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { CreateUserModel } from '../models/createUser.model';
import { CreateUser } from '../ports/createUser.port';
import { UserRepository } from '../ports/userRepository.port';

export class CreateUserUseCase implements CreateUser {
  constructor(
    @Inject(UserRepository)
    private readonly userRepo: UserRepository,
  ) {}

  async create({ email, password, username }: CreateUserModel): Promise<void> {
    const hashedPassword = await this.hashPassword(password);
    return this.userRepo.create({ email, password: hashedPassword, username });
  }

  private async hashPassword(password: string): Promise<string> {
    const salt = await bcrypt.genSalt();
    const hash = await bcrypt.hash(password, salt);
    return hash;
  }
}
