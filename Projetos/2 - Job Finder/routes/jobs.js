const express = require('express')
const router = express.Router()
const Job = require('../models/Job')
const { where } = require('sequelize')

router.get('/test', (req, res) => {
    res.send('deu certo')
})

//detalhe da vaga
router.get('/view/:id', (req, res) => Job.findOne ({
    where: {id: req.params.id}
}).then(job => {
    res.render('view', {
        job
    })
}).catch(err => console.log(err))
)

//form da rota de envio
router.get('/add', (req, res) => {
    res.render('add')
})

//add job via post
router.post('/add', (req, res) => {

    console.log('Corpo da requisição: ', req.body)
    
    let {title, salary, company, description, email, new_job} = req.body

    //inserindo dados
    Job.create({
        title,
        description,
        salary,
        company,
        email,
        new_job
    })
    .then(() => res.redirect('/'))
    .catch(err => console.log(err))
})

module.exports = router
