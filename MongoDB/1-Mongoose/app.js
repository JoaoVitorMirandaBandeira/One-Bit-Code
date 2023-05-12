const express = require("express");
const checkList = require('./src/routes/ckecklist');
const checkListModel = require('./src/models/checkList'); // Importando o modelo 'checkList'
const taskModel = require('./src/models/task'); // Importando o modelo 'task'
require('./config/database');

const app = express();

// Primeira Rota
app.get('/', (req,res) => {
    res.send('<h1>Minha Lista de Tarefas</h1>');
});

// Primeira rota Json
app.get('/json', (req, res) => {
    res.json({
        name: 'Tarefa X',
        description: "Primeira tarefa",
        done: true
    });
});

// Responsável por iniciar o server
app.listen(3000, () => {
    console.log('Servidor Iniciado');
});