import { Inject, Injectable } from '@nestjs/common';
import { GetMessages } from '../ports/getMessage.port';
import { ChatModel } from '../models/chat.model';
import { ChatRepository } from '../ports/chatRepository.port';

@Injectable()
export class GetMessagesUseCase implements GetMessages {
  constructor(
    @Inject(ChatRepository)
    private readonly chatRepo: ChatRepository,
  ) {}

  get(): Promise<ChatModel[]> {
    return this.chatRepo.getMessages();
  }
}
