const express = require('express')
let app = express()
const {engine} = require('express-handlebars')

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.engine('handlebars', engine({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')
app.set('views', './views')

const usuarios = [
    
]

app.get('/', (req, res) => {
    res.json(usuarios)
})

app.get('/usuarios', (req,res) => {
    res.render('usuarios')
    //console.log(req.body)
})

app.post('/usuarios', (req, res) => {
    res.send('Nome '+ req.body.nome+ '\nEmail: '+req.body.email)
    usuarios.push(req.body)
})

app.delete('/usuarios', (req,res) => {
    usuarios.pop(req.body)
    res.json({status: 'Usuarios deletado com sucesso!'})
})

app.listen(8080, () => {
    console.log('Rodando no endereço http://localhost:8080')
})