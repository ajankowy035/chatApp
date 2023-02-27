import { UserModel } from './../models/user.model';

export abstract class GetUser {
  abstract getOne(id: number): Promise<Omit<UserModel, 'password'>>;
}
