import { DataSource, DataSourceOptions } from 'typeorm';
import { Chat } from '@Chat/adapters/entities/chat.entity';
import { CreateChatTable1677501108379 } from '@Migrations/1677501108379-CreateChatTable';

export const ormConfig: DataSourceOptions = {
  type: 'postgres',
  host: process.env.POSTGRES_HOST,
  port: Number(process.env.POSTGRES_PORT),
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_EXTERNAL_PORT,
  entities: [Chat],
  migrations: [CreateChatTable1677501108379],
  migrationsRun: true,
  synchronize: false,
  logging: true,
};

const dataSource = new DataSource(ormConfig);

export default dataSource;
