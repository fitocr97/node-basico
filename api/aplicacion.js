const express = require('express') //framework express
const mongoose = require('mongoose')
const user = require('./user.controller')
const app = express()
const port = 3000

require('dotenv').config();

// Accede a las variables de entorno
const dbPassword = process.env.DB_PASSWORD;
const dbUser = process.env.DB_USER;

app.use(express.json()) //midleware

//conexion

try {
    mongoose.connect(`mongodb+srv://${dbUser}:${dbPassword}@cluster0.rihd75b.mongodb.net/?retryWrites=true&w=majority`)
    console.log('Conexión a la base de datos exitosa');
} catch (error) {
    console.error('Error al conectar a la base de datos:', error)
}

app.get('/users', user.list)
app.post('/users', user.create)
app.get('/users/:id', user.get)
app.put('/users/:id', user.update)
app.patch('/users/:id', user.update)
app.delete('/users/:id', user.destroy)

app.use(express.static('cliente')) //midleware

app.get('/', (req,res) => {
    res.sendFile(`${__dirname}/index.html`) //ruta del html devuelve el html
    
})

app.get('*', (req, res) => {
    res.status(404).send('la pagina no existe')
})

app.listen(port, () => {
    console.log('Arrancando la app')
})
