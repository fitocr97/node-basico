const express = require('express') //framework express
const mongoose = require('mongoose')
const user = require('./user.controller')
//const user = require('./user.controller')
const app = express()
const port = 3000

require('dotenv').config();

// Accede a las variables de entorno
const dbPassword = process.env.DB_PASSWORD;
const dbUser = process.env.DB_USER;


app.use(express.json()) //midleware

//conexion
mongoose.connect(`mongodb+srv://${dbUser}:${dbPassword}@cluster0.rihd75b.mongodb.net/?retryWrites=true&w=majority`)

app.get('/', user.list)

app.post('/', user.create)

app.get('/:id', user.get)

app.put('/:id', user.update)

app.patch('/:id', user.update)

app.delete('/:id', user.destroy)

app.get('*', (req, res) => {
    res.status(404).send('la pagina no existe')
})


app.listen(port, () => {
    console.log('Arrancando la app')
})

