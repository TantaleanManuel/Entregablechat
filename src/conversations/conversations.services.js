const conversationControllers = require('./conversations.controllers')


const getAllConversations = (req, res) => {
    conversationControllers.findAllConversations()
        .then((data) => {
            res.status(200).json({message: `El usuario ${req.conversation.name} hizo esta peticion`, data})
        })
        .catch((err) => {
            res.status(400).json({message: 'Bad request', err})
        })
}

const getConversationById = (req, res) => {
    const id = req.params.id
    conversationControllers.findConversationById(id)
        .then(data => {
            if(!data){
                return res.status(404).json({message: `Conversation with id: ${id}, not found`})
            }
            res.status(200).json(data)
        })
        .catch(err => {
            res.status(400).json({message: 'Bad request', err})
        })
}

const postNewConversation = (req, res) => {
    const conversationObj = req.body
    conversationControllers.createConversation(conversationObj)
        .then(data => {
            res.status(201).json(data)
        })
        .catch(err => {
            res.status(400).json({message: 'Bad request', err})
        })
}

const patchConversation = (req, res) => {

    const id = req.params.id
    const conversationObj = req.body 

    conversationControllers.updateConversation(id, conversationObj)
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

const deleteConversation = (req, res) => {
    const id = req.params.id 
    conversationControllers.deletecConversation(id)
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

const getMyConversation = (req, res) => {
    const conversation = req.conversation
    res.status(200).json(conversation)
}



module.exports = {
    getAllConversations,
    getConversationById,
    getMyConversation,
    postNewConversation,
    patchConversation,
    deleteConversation
}