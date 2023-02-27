import { Test } from '@nestjs/testing';
import { InMemoryChatRepository } from '../adapters/repositories/chatInMemory.repository';
import { ChatController } from '../adapters/api/chat.controller';
import { CreateMessageUseCase } from '../domain/usecase/createChat.usecase';
import { CreateMessage } from '../domain/ports/createMessage.port';
import { GetMessagesUseCase } from './../domain/usecase/getMessages.usecase';
import { GetMessages } from '../domain/ports/getMessage.port';
import { ChatRepository } from '../domain/ports/chatRepository.port';

export function createTestingModule() {
  return Test.createTestingModule({
    controllers: [ChatController],
    providers: [
      {
        provide: GetMessages,
        useClass: GetMessagesUseCase,
      },
      { provide: CreateMessage, useClass: CreateMessageUseCase },
      { provide: ChatRepository, useClass: InMemoryChatRepository },
    ],
  });
}
