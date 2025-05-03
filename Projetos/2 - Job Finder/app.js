const express = require('express')
const app = express()
const db = require('./db/connection')
const bodyParser = require('body-parser')

const PORTA = 3000

app.listen(PORTA, function() {
    console.log(`O express está rodando na porta ${PORTA}`)
})

//body parser

app.use(bodyParser.urlencoded({extended: false}))

//conexão do banco

db
    .authenticate()
    .then(() => {
        console.log('Conectou ao banco com sucesso!')
    })
    .catch(err => {
        console.log('Ocorreu um erro ao conectar', err)
    })

//rotas
app.get('/', (req, res) => {
    res.send('Funciona 4')
})

//rotas do job
app.use('/jobs', require('./routes/jobs'))