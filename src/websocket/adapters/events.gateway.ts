import {
  SubscribeMessage,
  WebSocketGateway,
  OnGatewayInit,
  WebSocketServer,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from '@nestjs/websockets';
import { Socket, Server } from 'socket.io';
import { Logger } from '@nestjs/common';
import { CreateMessage } from '@Chat/domain/ports/createMessage.port';
import { CreateChatModel } from '@Chat/domain/models/createChat.model';

@WebSocketGateway()
export class EventsGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{
  logger = new Logger(EventsGateway.name);
  constructor(private createMessage: CreateMessage) {}

  @WebSocketServer() server: Server;

  @SubscribeMessage('newMessage')
  async handleSendMessage(
    client: Socket,
    payload: CreateChatModel,
  ): Promise<void> {
    await this.createMessage.create(payload);
  }

  afterInit(server: Server) {
    this.logger.log('Websocket server initialized');
  }

  handleDisconnect(client: Socket) {
    this.logger.log(`Websocket disconnected: ${client.id}`);
  }

  handleConnection(client: Socket, ...args: any[]) {
    this.logger.log(`Connected ${client.id}`);
  }
}
