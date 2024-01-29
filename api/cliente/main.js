console.log('hola')

const loadInitialTemplate = () =>{
    const template = `
        <h1>Usuarios</h1>
        <form id="user-form">
            <div>
                <label>Nombre</label>
                <input name="name">
            </div>
            <div>
                <label>Apellido</label>
                <input name="lastname">
            </div>
            <button type="submit">Enviar</button>
        </form>
        <ul id="user-list"></ul>
    `
    const body = document.getElementsByTagName('body')[0]
    body.innerHTML = template
}

const getUsers = async () =>{
    const response = await fetch('/users') //llamar api
    const users = await response.json() //tranformar response a json
    console.log(users)
    const template = user => `
        <li>
            ${user.name} ${user.lastname} <button data-id="${user._id}">Eliminar</button>
        </li>
    `

    const userList = document.getElementById('user-list') //buscar user list
    userList.innerHTML = users.map(user => template(user)).join('') //reemplazar el innerhtml

    //delete
    users.forEach(user => {
        const userNode = document.querySelector(`[data-id="${user._id}"]`)
        userNode.onclick = async e => {
            await fetch(`/users/${user._id}`, {
                method: 'DELETE'
            })
            userNode.parentNode.remove() //subir un nodo desde el boton al li  y eliminar el li
        }
    })

}

const addFormListenert = () =>{
    const userForm = document.getElementById('user-form')
    userForm.onsubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData(userForm) //devolver objeto que trae los datos del form
        const data = Object.fromEntries(formData.entries()) //tranformar en objeto json  entries() devuelve un iterador
        //console.log(data) ver los datos del form
        await fetch('/users', {
            method: 'POST',
            body: JSON.stringify(data),
            headers:{
                'Content-Type': 'application/json'
            }   
        })
        userForm.reset()
        getUsers()
        
    }
}

window.onload = () => {
    loadInitialTemplate()
    addFormListenert()
    getUsers()
}