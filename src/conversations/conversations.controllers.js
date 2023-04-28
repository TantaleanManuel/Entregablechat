const uuid = require('uuid')
const Conversations = require('../models/conversations.models')

const findAllConversations = async () => {
    const conversations = await Conversations.findAll()
    return conversations
}

const findConversationById = async (id) => {
    const conversation = await Conversations.findOne({
        where: {
            id: id
        }
    })
    return conversation
}

const createConversation = async (conversationObj) => {
    const newConversation = await Conversations.create({
        id: uuid.v4(),
        profile_img: conversationObj.content,
        name: conversationObj.name,
        created_by:uuid,
        is_group:conversationObj.is_group
    })
    return newConversation
}

const updateConversation = async (conversationtId, conversationObj) => {
    const selectedConversation = await Conversations.findOne({
        where: {
            id: conversationId
        }
    })

    if(!selectedConversation) return null

    const updatedConversation = await selectedConversation.update(conversationObj)

    return updatedConversation
}

const deleteConversation = async (conversationId) => {
    const selectedConversation = await Conversations.findOne({
        where: {
            id: conversationId
        }
    })

    if(!selectedConversation) return null

    const updatedConversation = await selectedConversation.update({
        status: 'deleted'
    })

    return updatedConversation
}

module.exports = {
    findAllConversations,
    findConversationById,
    createConversation,
    updateConversation,
    deleteConversation
}
