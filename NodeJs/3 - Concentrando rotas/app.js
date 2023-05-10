const express = require("express")
const checkList = require('./routes/ckecklist')

const app = express()
// Primeira Rota
app.get('/', (req,res) => {
    res.send('<h1>Minha Lista de Tarefas</h1>')
})

//Primeira rota Json
app.get('/json', (req, res) => {
    res.json({
        name: 'Tarefa X',
        description: "Primeira tarefa",
        done: true
    })
})

app.use('/checkList',checkList)

//Responsavel por iniciar o server
app.listen(3000, () =>{
    console.log('Servidor Iniciado')
})
