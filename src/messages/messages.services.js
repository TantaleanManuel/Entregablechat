const messageControllers = require('./messages.controllers')


const getAllMessages = (req, res) => {
    messageControllers.findAllMessages()
        .then((data) => {
            res.status(200).json({message: `El usuario ${req.user.firstName} hizo esta peticion`, data})
        })
        .catch((err) => {
            res.status(400).json({message: 'Bad request', err})
        })
}

const getMessageById = (req, res) => {
    const id = req.params.id
    messageControllers.findMessageById(id)
        .then(data => {
          
            if(!data){
                return res.status(404).json({message: `User with id: ${id}, not found`})
            }
            res.status(200).json(data)
        })
        .catch(err => {
            res.status(400).json({message: 'Bad request', err})
        })
}

const postNewMessage = (req, res) => {
    const userObj = req.body
    messageControllers.createUser(messageObj)
        .then(data => {
            res.status(201).json(data)
        })
        .catch(err => {
            res.status(400).json({message: 'Bad request', err})
        })
}

const patchMessage = (req, res) => {

    const id = req.params.id
    const messageObj = req.body 

    messageControllers.updateMessage(id, messageObj)
        .then(data => {
            if(!data) {
                return res.status(404).json({message: 'Invalid ID'})
            }
            res.status(200).json(data)
        })
        .catch(err => {
            res.status(400).json({message: 'Bad request', err})
        })
}

const deleteMessage = (req, res) => {
    const id = req.params.id 
    messageControllers.deleteMessage(id)
        .then(data => {
            if(!data) {
                return res.status(404).json({message: 'Invalid ID'})
            }
            res.status(204).json()
        })
        .catch(err => {
            res.status(400).json({message: 'Bad request', err})
        })
}

const getMyMessage = (req, res) => {
    const message = req.user
    res.status(200).json(user)
}



module.exports = {
    getAllMessages,
    getMessageById,
    getMyMessage,
    postNewMessage,
    patchMessage,
    deleteMessage
}