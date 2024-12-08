import express from 'express';
import pg from 'pg';

const app = express();

const client = new pg.Client({
    user: 'postgres',
    password: 'SuolaGurgu@5521',
    database: 'postgres',
    host: 'localhost',
    port: 5432,
});

client.connect()
    .then(() => console.log('Connected to the database'))
    .catch((err) => console.error('Database connection error:', err));

export {client};