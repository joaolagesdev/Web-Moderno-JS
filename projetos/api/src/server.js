const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const db = require('./db')

// Para qualquer requisição, passar pelo middleware abaixo
app.use(bodyParser.urlencoded({extended: true}))

app.get('/produtos', (req, res, next) => {
    res.send(db.getProdutos()) // Converte para JSON
})

app.get('/produtos/:id', (req, res, next) => { // Pode apagar o next, pois não está usando
    res.send(db.getProduto(req.params.id))
})

app.post('/produtos', (req, res, next) => {
    const produto = db.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) // JSON
})

app.delete('/produtos/:id', (req, res, next) => {
    const produto = db.excluirProduto(req.params.id)
    res.send(produto) // JSON
}) 

app.listen(3003, () => {
    console.log('Server is running!')
})