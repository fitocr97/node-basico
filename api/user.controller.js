const User = {
    list: (req, res) => {
        res.status(200).send('hola usuario')
    },
    get: (req,res) =>{
        res.status(200).send('este es un usuario')
    },
    create: (req, res) =>{
        res.status(201).send('creando usuario')
    },
    update: (req, res) => {
        res.status(204).send('actualizando usuario')
    },
    destroy: (req, res) => {
        res.status(204).send('eliminado usuario')
    }
}

module.exports = User