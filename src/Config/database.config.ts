import { Sequelize } from 'sequelize';
import { config } from './app.config';

const sequelize = new Sequelize({
  host: config.database.host,
  port: config.database.port,
  database: config.database.name,
  username: config.database.username,
  password: config.database.password,
  dialect: 'postgres',
  logging: config.environment === 'development' ? console.log : false,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});

export const connectDatabase = async (): Promise<void> => {
  try {
    await sequelize.authenticate();
    console.log('Database connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
    throw error;
  }
};

export default sequelize;
