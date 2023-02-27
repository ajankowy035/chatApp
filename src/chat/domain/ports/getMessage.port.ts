import { ChatModel } from './../models/chat.model';

export abstract class GetMessages {
  abstract get(): Promise<ChatModel[]>;
}
