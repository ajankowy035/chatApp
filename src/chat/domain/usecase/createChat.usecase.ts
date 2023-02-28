import { Inject, Injectable } from '@nestjs/common';
import { ChatModel } from '../models/chat.model';
import { CreateChatModel } from '../models/createChat.model';
import { CreateMessage } from '../ports/createMessage.port';
import { ChatRepository } from '../ports/chatRepository.port';

@Injectable()
export class CreateMessageUseCase implements CreateMessage {
  constructor(
    @Inject(ChatRepository)
    private readonly chatRepo: ChatRepository,
  ) {}
  create({
    content,
    fromUserId,
    toUserId,
  }: CreateChatModel): Promise<ChatModel> {
    return this.chatRepo.create({ content, fromUserId, toUserId });
  }
}
