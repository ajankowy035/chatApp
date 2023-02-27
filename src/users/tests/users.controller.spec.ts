import { TestingModule, Test } from '@nestjs/testing';
import { CreateUserUseCase } from './../domain/usecase/createUser.usecase';
import { GetUserUseCase } from './../domain/usecase/getUser.usecase';
import { InMemoryUserRepository } from './../adapters/repositories/inMemoryUser.repository';
import { UsersController } from './../adapters/api/users.controller';
import { UserRepository } from '../domain/ports/userRepository.port';
import { GetUser } from '../domain/ports/getUser.port';
import { CreateUser } from '../domain/ports/createUser.port';

describe('User Controller Test', () => {
  let usersController: UsersController;
  let usersRepo: InMemoryUserRepository;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [
        { provide: UserRepository, useClass: InMemoryUserRepository },
        { provide: GetUser, useClass: GetUserUseCase },
        { provide: CreateUser, useClass: CreateUserUseCase },
      ],
    }).compile();

    usersController = app.get<UsersController>(UsersController);
    usersRepo = app.get<InMemoryUserRepository>(InMemoryUserRepository);
  });

  describe('User', () => {
    it('Should create new user', async () => {
      const email = 'email@email.com';
      const password = 'xxx';
      const username = 'testUserName';

      await usersController.cerateNewUser({ email, password, username });
      const user = usersRepo[0];

      expect(user.email).toBe(email);
      expect(user.username).toBe(username);
      expect(user.password).toBe(password);
      expect(user.createdAt).toBeDefined();
      expect(user.updatedAt).toBeDefined();
      expect(user.id).toBeDefined();
    });

    it('Should retrieve user', async () => {
      const email = 'email@email.com';
      const password = 'xxx';
      const username = 'testUserName';

      await usersController.cerateNewUser({ email, password, username });

      const result = await usersController.getSingleUser(usersRepo.data[0].id);

      expect(result.email).toBe(email);
      expect(result.username).toBe(username);
      expect(result.id).toBeDefined();
      expect(result.updatedAt).toBeDefined();
      expect(result.createdAt).toBeDefined();
    });
  });
});
