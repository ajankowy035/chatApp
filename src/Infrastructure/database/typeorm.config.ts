import { DataSource, DataSourceOptions } from 'typeorm';
import { Chat } from '@Chat/adapters/entities/chat.entity';
import { User } from '@Users/adapters/entities/user.entity';
import { CreateChatTable1677501108379 } from '@Migrations/1677501108379-CreateChatTable';
import { CreateUserTable1677509211495 } from '@Migrations/1677509211495-CreateUserTable';
import { CreateUserColumnsChatTable1677576652220 } from '@Migrations/1677576652220-CreateUserColumnsChatTable';

export const ormConfig: DataSourceOptions = {
  type: 'postgres',
  host: process.env.POSTGRES_HOST,
  port: Number(process.env.POSTGRES_PORT),
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_EXTERNAL_PORT,
  entities: [Chat, User],
  migrations: [
    CreateChatTable1677501108379,
    CreateUserTable1677509211495,
    CreateUserColumnsChatTable1677576652220,
  ],
  migrationsRun: true,
  synchronize: false,
  logging: true,
};

const dataSource = new DataSource(ormConfig);

export default dataSource;
