import { CreateUserModel } from "../models/createUser.model";
import { CreateUser } from "../ports/createUser.port";

export class CreateUserUseCase implements CreateUser{
    create({ email, password, username, }: CreateUserModel): Promise<void> {
        throw new Error("Method not implemented.");
    }
}