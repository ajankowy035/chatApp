import { TestingModule } from '@nestjs/testing';
import { InMemoryUserRepository } from './../adapters/repositories/inMemoryUser.repository';
import { UsersController } from './../adapters/api/users.controller';
import { createTestingModule } from './createTestingModule';
import { UserRepository } from '../domain/ports/userRepository.port';

describe('User Controller Test', () => {
  let usersController: UsersController;
  let usersRepo: InMemoryUserRepository;

  beforeAll(async () => {
    const app: TestingModule = await createTestingModule().compile();

    usersController = app.get<UsersController>(UsersController);
    usersRepo = app.get<UserRepository>(
      UserRepository,
    ) as InMemoryUserRepository;
  });

  describe('User manipulations', () => {
    it('Should create new user', async () => {
      const email = 'email@email.com';
      const password = 'xxx';
      const username = 'testUserName';

      await usersController.cerateNewUser({ email, password, username });
      const user = usersRepo.data[0];

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

    it('Should throw a 404 error when try to get not existing user', async () => {
      await usersController
        .getSingleUser(342787243)
        .catch((err) => expect(err.response.statusCode).toBe(404));
    });
  });
});
