import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { Controller, Get, Post } from '@nestjs/common';
import { CreateMessage } from '../../domain/ports/createMessage.port';
import { GetMessages } from '../../domain/ports/getMessage.port';
import { ChatDto } from '../dtos/chat.dto';

@ApiTags('Chat')
@Controller('chat')
export class ChatController {
  constructor(
    private getMessages: GetMessages,
    private createMessage: CreateMessage,
  ) {}

  @Get()
  @ApiResponse({
    status: 200,
    description: 'Lists groups with subjects for provided schoolYear',
    type: [ChatDto],
  })
  getAllMessages(): Promise<ChatDto[]> {
    return this.getMessages.get();
  }
}
