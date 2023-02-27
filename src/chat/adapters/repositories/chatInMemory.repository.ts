import { Chat } from './../entities/chat.entity';
import { ChatModel } from '../../domain/models/chat.model';
import { CreateChatModel } from '../../domain/models/createChat.model';
import { ChatRepository } from '../../domain/ports/chatRepository.port';

export class InMemoryChatRepository implements ChatRepository {
  data: Chat[] = [];

  create({ email, content }: CreateChatModel): Promise<ChatModel> {
    const newChat: Chat = {
      email,
      content,
      createdAt: new Date(),
      id: Math.random() * 123242673,
    };
    this.data.push(newChat);
    return Promise.resolve(newChat);
  }

  getMessages(): Promise<ChatModel[]> {
    return Promise.resolve(this.data);
  }
}
