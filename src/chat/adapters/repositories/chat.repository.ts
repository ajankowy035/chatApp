import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Chat } from './../entities/chat.entity';
import { ChatRepository } from '../../domain/ports/chatRepository.port';
import { ChatModel } from '../../domain/models/chat.model';
import { CreateChatModel } from '../../domain/models/createChat.model';

export class PostgresChatRepository implements ChatRepository {
  constructor(
    @InjectRepository(Chat)
    private readonly repo: Repository<Chat>,
  ) {}

  create({ email, content }: CreateChatModel): Promise<ChatModel> {
    const chat = {
      email,
      content,
      createdAt: new Date(),
    };
    const newChat = this.repo.create(chat);
    return this.repo.save(newChat);
  }

  getMessages(): Promise<ChatModel[]> {
    return this.repo.find();
  }
}
