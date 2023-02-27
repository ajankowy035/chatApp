import { Inject, NotFoundException } from '@nestjs/common';
import { UserModel } from '../models/user.model';
import { GetUser } from '../ports/getUser.port';
import { UserRepository } from '../ports/userRepository.port';

export class GetUserUseCase implements GetUser {
  constructor(
    @Inject(UserRepository)
    private readonly userRepo: UserRepository,
  ) {}

  async getOne(id: number): Promise<Omit<UserModel, 'password'>> {
    const user = await this.userRepo.findOne(id);

    if (!user) {
      throw new NotFoundException(`Cannot find user with id ${id}`);
    }
    return user;
  }
}
