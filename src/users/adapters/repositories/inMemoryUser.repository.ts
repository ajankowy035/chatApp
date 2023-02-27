import { CreateUserModel } from '../../domain/models/createUser.model';
import { UserModel } from '../../domain/models/user.model';
import { UserRepository } from '../../domain/ports/userRepository.port';
import { User } from '../entities/user.entity';

export class InMemoryUserRepository implements UserRepository {
  public data: User[] = [];

  create({ email, password, username }: CreateUserModel): Promise<void> {
    const newUser = {
      email,
      password,
      username,
      createdAt: new Date(),
      updatedAt: new Date(),
      id: Math.random() * 2133280,
    };

    this.data.push(newUser);
    return;
  }

  findOne(id: number): Promise<UserModel> {
    const foundUser = this.data.find((user) => user.id === id);
    return Promise.resolve(foundUser);
  }
}
