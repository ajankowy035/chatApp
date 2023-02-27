import { UserModel } from '../models/user.model';
import { GetUser } from '../ports/getUser.port';

export class GetUserUseCase implements GetUser {
  getOne(id: number): Promise<Omit<UserModel, 'password'>> {
    throw new Error('Method not implemented.');
  }
}
