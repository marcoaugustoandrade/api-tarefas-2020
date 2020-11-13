const express = require('express')
const app = express()

app.get('/ola-mundo', (req, res) => {
    res.send('<h1>Olá mundo!</h1>')
})

app.get('/tarefas', (req, res) => {
    res.json([
        { id: 1, descricao: "Estudar para a prova" },
        { id: 2, descricao: "Fazer compras" },
        { id: 3, descricao: "Enviar trabalho" }
    ])
})

app.listen(3000, () => console.log('Servidor rodando na porta 3000'))
