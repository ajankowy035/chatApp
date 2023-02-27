import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostgresChatRepository } from './adapters/repositories/chat.repository';
import { Chat } from './adapters/entities/chat.entity';
import { GetMessagesUseCase } from './domain/usecase/getMessages.usecase';
import { GetMessages } from './domain/ports/getMessage.port';
import { CreateMessageUseCase } from './domain/usecase/createChat.usecase';
import { CreateMessage } from './domain/ports/createMessage.port';
import { ChatRepository } from './domain/ports/chatRepository.port';
import { ChatController } from './adapters/api/chat.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Chat])],

  controllers: [ChatController],
  providers: [
    { provide: ChatRepository, useClass: PostgresChatRepository },
    { provide: CreateMessage, useClass: CreateMessageUseCase },
    { provide: GetMessages, useClass: GetMessagesUseCase },
  ],
  exports: [
    { provide: CreateMessage, useClass: CreateMessageUseCase },
    { provide: GetMessages, useClass: GetMessagesUseCase },
  ],
})
export class ChatModule {}
