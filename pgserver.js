import express from 'express';
import pg, { Client } from 'pg';

const app = express();

const {client} = pg;

app.listen(3001, () => {
    console.log('Server running on http://localhost:3001');
});

const client =  new Client({
    user: 'postgres'
    password: 'SuolaGurgu@5521'
    database: 'postgres'
    host: 'localhost'
    port: '5432'
    database: 'postgres'
})