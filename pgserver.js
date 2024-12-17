import express from 'express';
import pg from 'pg';
import dotenv from 'dotenv';

dotenv.config(); 

const app = express();

const client = new pg.Client({
       user: process.env.PG_USER,
    password: process.env.PG_PW,
    database: process.env.PG_DB,
    host: process.env.PG_HOST,
    port: process.env.PG_PORT 
});

client.connect()
    .then(() => console.log('Connected to the database'))
    .catch((err) => console.error('Database connection error:', err));

export {client};