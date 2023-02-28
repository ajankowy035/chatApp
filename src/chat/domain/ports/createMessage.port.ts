import { ChatModel } from './../models/chat.model';
import { CreateChatModel } from './../models/createChat.model';

export abstract class CreateMessage {
  abstract create({
    content,
    fromUserId,
    toUserId,
  }: CreateChatModel): Promise<ChatModel>;
}
