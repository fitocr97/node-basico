const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://fitocr:Mfigaromora97@cluster0.rihd75b.mongodb.net/?retryWrites=true&w=majority')

const User = mongoose.model('User', {
    username: String,
    edad: Number,
})

// crear un usuario en la bd
const crear = async () => {
    const user = new User({ username:'Alejandro', edad: 50 })
    const savedUser = await user.save()
    console.log(savedUser)
}

//crear()

// get all
const buscarTodo = async () => {
    const users = await User.find()
    console.log(users)
}

buscarTodo()

//get one
const buscar = async () => {
    const user = await User.find({username: "Alejandro"}) //find devuelve una lista
    console.log(user)
}

//buscar()

const buscarUno = async () => {
    const user = await User.findOne({username: "prueba"}) //findOne devuelve un objeto
    console.log(user)
}

//buscarUno()

// update
const actualizar = async () => {
    const user = await User.findOne({username: 'Alejandro'})
    user.edad = 30
    console.log(user)
}

//actualizar()

//delete
const eliminar = async () => {
    const user = await User.findOne({username: 'prueba'})
    if(user){
        await user.deleteOne()
    }else{
        console.log('no se econtro el usuario')
    }
}

eliminar()