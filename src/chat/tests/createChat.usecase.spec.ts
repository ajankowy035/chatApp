import { TestingModule } from '@nestjs/testing';
import { CreateMessage } from '@Chat/domain/ports/createMessage.port';
import { createTestingModule } from './createTestingModule';

describe('Add new subjects to group', () => {
  let createMessage: CreateMessage;
  beforeAll(async () => {
    const app: TestingModule = await createTestingModule().compile();

    createMessage = app.get<CreateMessage>(CreateMessage);
  });

  test('User can create a message', async () => {
    const content = 'message text';
    const fromUserId = 1;
    const toUserId = 2;

    const newMessage = await createMessage.create({
      content,
      toUserId,
      fromUserId,
    });

    expect(newMessage.fromUserId).toBe(fromUserId);
    expect(newMessage.toUserId).toBe(toUserId);
    expect(newMessage.content).toBe(content);
    expect(newMessage.id).toBeDefined();
    expect(newMessage.createdAt).toBeDefined();
  });
});
