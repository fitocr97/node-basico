const Users = require('./User')

const User = {
    list: async (req, res) => {
        const users = await Users.find()
        res.status(200).send(users)
    },
    get: async (req,res) =>{
        const {id} = req.params//object distrectury
        const user = await Users.findOne({_id: id})
        res.status(200).send(user)
    },
    create: async (req, res) =>{
        const user = new Users(req.body)
        console.log(req.body)
        const savedUser = await user.save()
        res.status(201).send(savedUser._id)
    },
    update: async (req, res) => {
        const {id} = req.params
        const user = await Users.findOne({_id: id})
        Object.assign(user, req.body) //remplazar los datos 
        await user.save()
        res.status(204).send('Se acutalizo')
    },
    destroy: async  (req, res) => {
        const {id} = req.params
        const user = await Users.findOne({_id: id})
        if(user){
            await user.deleteOne()
        }
        res.status(204).send('eliminado usuario')
        console.log('se elimino')
    }
}

module.exports = User