import dotenv from 'dotenv';
dotenv.config();

// Token
export const SECRET_KEY = process.env.SECRET_KEY;

// Database
export const DB_NAME = process.env.DB_NAME;
export const DB_USER = process.env.DB_USER;
export const DB_PASSWORD = process.env.DB_PASSWORD;
export const DB_HOST = process.env.DB_HOST;
export const DB_PORT = process.env.DB_PORT;
