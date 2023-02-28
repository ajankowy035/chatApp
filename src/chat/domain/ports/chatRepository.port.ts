import { CreateChatModel } from './../models/createChat.model';
import { ChatModel } from './../models/chat.model';

export abstract class ChatRepository {
  abstract create({
    fromUserId,
    toUserId,
    content,
  }: CreateChatModel): Promise<ChatModel>;

  abstract getMessages(): Promise<ChatModel[]>;
}
