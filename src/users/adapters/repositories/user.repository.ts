import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './../entities/user.entity';
import { CreateUserModel } from '../../domain/models/createUser.model';
import { UserModel } from '../../domain/models/user.model';
import { UserRepository } from '../../domain/ports/userRepository.port';

export class PostgresUserRepository implements UserRepository {
  constructor(
    @InjectRepository(User)
    private readonly repo: Repository<User>,
  ) {}

  async create({ email, password, username }: CreateUserModel): Promise<void> {
    const user = {
      email,
      password,
      username,
      updatedAt: new Date(),
      createdAt: new Date(),
    };

    const newUser = this.repo.create(user);
    await this.repo.save(newUser);
    return;
  }

  findOne(id: number): Promise<UserModel> {
    return this.repo.findOne({ where: { id } });
  }
}
