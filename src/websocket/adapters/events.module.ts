import { ChatModule } from '@Chat/chat.module';
import { Module } from '@nestjs/common';
import { EventsGateway } from './events.gateway';

@Module({
  imports: [ChatModule],
  providers: [EventsGateway],
  exports: [],
})
export class EventsModule {}
