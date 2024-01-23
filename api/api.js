const express = require('express') //framework express
const app = express()
const port = 3000

app.get('/', (req,res) => { //request response
    res.status(200).send('hola mundo desde api')
})

app.listen(port, () => {
    console.log('Arrancando la app')
})