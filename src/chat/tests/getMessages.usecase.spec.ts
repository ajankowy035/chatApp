import { GetMessages } from '@Chat/domain/ports/getMessage.port';
import { TestingModule } from '@nestjs/testing';
import { CreateMessage } from '@Chat/domain/ports/createMessage.port';
import { createTestingModule } from './createTestingModule';

describe('Add new subjects to group', () => {
  let createMessage: CreateMessage;
  let getMessages: GetMessages;

  beforeAll(async () => {
    const app: TestingModule = await createTestingModule().compile();

    createMessage = app.get<CreateMessage>(CreateMessage);
    getMessages = app.get<GetMessages>(GetMessages);
  });

  test('User can get all of messages', async () => {
    const content = 'message text';
    const fromUserId = 1;
    const toUserId = 2;

    await createMessage.create({
      content,
      fromUserId,
      toUserId,
    });

    const result = await getMessages.get();

    expect(result).toHaveLength(1);
    expect(result[0].fromUserId).toBe(fromUserId);
    expect(result[0].toUserId).toBe(toUserId);
    expect(result[0].content).toBe(content);
  });
});
