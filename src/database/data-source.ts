import 'reflect-metadata';
import { DataSource, DataSourceOptions } from 'typeorm';
import { configuration } from '../config/index';
import { User } from './entity';
import { createUser1654024451142 } from './migrations';

export const appDataSource = new DataSource({
  host: configuration.database.host,
  password: configuration.database.password,
  port: configuration.database.port,
  type: 'postgres',
  username: configuration.database.username,
  database: configuration.database.database,
  synchronize: false,
  logging: false,
  entities: [User],
  migrations: [createUser1654024451142],
  subscribers: []
});
