import User from '../../../modules/user/infra/typeorm/entities/User';
import { DataSource } from 'typeorm';

export const dataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'docker',
  database: 'nodejs-comeia',
  entities: [User],
  migrations: [],
});
