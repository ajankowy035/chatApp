import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export const config = new DocumentBuilder()
  .setTitle('ChatApp')
  .setDescription('Chat App documentation')
  .build();
