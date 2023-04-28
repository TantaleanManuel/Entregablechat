const Messages = require('../models/messages.models')
const uuid = require('uuid')
const { hashPassword } = require('../utils/crypto')

const findAllMessages = async () => {
  const messages = await Messages.findAll()
  return messages
}

const findMessageById = async (id) => {
  const data = await Messages.findOne({
      where: {
          id: id,
      }
  })
  return data
}

const findMessageByEmail = async (email) => {
  const data = await Messages.findOne({
      where: {
          email : email
      }
  })
  return data
}

const createMessage = async(messageObject) => {
  const newMessage = {
    id: uuid.v4(),
    content: messageObject.content,
    participant_id: uuid,
    status: messageObject.status
  }
  const data = await Messages.create(newMessage)
  return data
}

const updateMessage = async(id, messageObj) => {

  const selectedMessage = await Messages.findOne({
      where: {
          id: id
      }
  })
  
  if(!selectedMessage) return null

  const modifiedMessage = await selectedMessage.update(messageObj)
  return modifiedMessage
}

const deleteMessage = async(id) => {
  const message = await Messages.destroy({
      where: {
          id: id
      }
  })
  return message // 1 || 0
}

module.exports = {
  findAllMessages,
  findMessageById,
  createMessage,
  updateMessage,
  deleteMessage,
  findMessageByEmail
}