import { Sequelize } from 'sequelize';
import {
	DB_HOST,
	DB_NAME,
	DB_PASSWORD,
	DB_PORT,
	DB_USER,
} from '../utils/constants/index.js';

export const Connection = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
	host: DB_HOST,
	port: DB_PORT,
	dialect: 'mysql',
});
