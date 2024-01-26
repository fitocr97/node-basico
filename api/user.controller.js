const Users = requiere('./User')

const User = {
    list: async (req, res) => {
        const users = Users.find()
        res.status(200).send(users)
    },
    get: async (req,res) =>{
        res.status(200).send('este es un usuario')
    },
    create: async (req, res) =>{
        res.status(201).send('creando usuario')
    },
    update:async  (req, res) => {
        res.status(204).send('actualizando usuario')
    },
    destroy: async  (req, res) => {
        res.status(204).send('eliminado usuario')
    }
}

module.exports = User