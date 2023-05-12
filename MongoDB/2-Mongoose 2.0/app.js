const express = require('express')
const checkListRoutes = require('./src/routes/checklist')

require('./config/database')

const app = express();
app.use(express.json())

// Primeira Rota
app.get('/', (req, res) => {
    res.send('<h1>Minha Lista de Tarefas</h1>');
});

app.use('/checklist', checkListRoutes)

// Responsável por iniciar o server
app.listen(3000, () => {
    console.log('Servidor Iniciado');
});