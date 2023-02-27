import { UserModel } from '../models/user.model';
import { CreateUserModel } from '../models/createUser.model';
export abstract class UserRepository {
  abstract create({
    email,
    password,
    username,
  }: CreateUserModel): Promise<void>;

  abstract findOne(id: number): Promise<UserModel>;
}
