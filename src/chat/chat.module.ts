import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Chat } from './adapters/entities/chat.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Chat])],

  controllers: [],
  providers: [],
  exports: [],
})
export class ChatModule {}
