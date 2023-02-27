import { CreateUserModel } from './../models/createUser.model';

export abstract class CreateUser {
  abstract create({
    email,
    password,
    username,
  }: CreateUserModel): Promise<void>;
}
