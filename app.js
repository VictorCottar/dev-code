const express = require('express');
const app = express();
const db = require('./db/connection');
const Pergunta = require('./models/Pergunta');
const Sequelize = require('sequelize');


const PORT = process.env.PORT || 8080;

app.use(express.json());

app.listen(PORT, () => { 
    console.log(`Servidor rodando na porta: ${PORT}`);
});   

app.get('/', (req, res) => { 
    res.send('Hello World');
});

app.get('/perguntas', (req, res) => {
    Pergunta.findAll()
    .then(perguntas =>  res.json(perguntas))
    .catch(err => console.log('Não foi possível buscar pergunta', err)); 
});