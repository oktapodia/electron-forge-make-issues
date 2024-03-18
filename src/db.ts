import { DataSource } from "typeorm";
import sqlite3 from 'sqlite3';
import User from "./User";

const dataSource = new DataSource({
  type: 'sqlite',
  database: `./database.db`,
  driver: sqlite3,
  synchronize: false,
  logging: true,
  migrationsRun: true,
  migrationsTransactionMode: 'each',
  logger: 'simple-console',
  entities: [User],
  migrations: [],
  subscribers: [],
});

export default dataSource;