const uuid = require('uuid')
const Posts = require('../models/participants.models')

const findAllParticipants = async () => {
    const participants = await Posts.findAll()
    return participants
}

const findParticipantById = async (id) => {
    const participant = await Participants.findOne({
        where: {
            id: id
        }
    })
    return participant
}

const createParticipant = async(participantObject) => {
    const newParticipant = {
      id: uuid.v4(),
      user_id: uuid,
      conversation_id: uuid,
      admin: participantObject.admin   
    }
    const data = await Participants.create(newParticipant)
    return data
  }

const updateParticipant = async (participantId, participantObj) => {
    const selectedParticipant = await Participants.findOne({
        where: {
            id: participantId
        }
    })

    if(!selectedParticipant) return null

    const updatedParticipant = await selectedParticipant.update(postObj)

    return updatedParticipant
}

const deleteParticipant = async (ParticipantId) => {
    const selectedParticipant = await Participants.findOne({
        where: {
            id: participantId
        }
    })

    if(!selectedParticipant) return null

    const updatedParticipant = await selectedParticipant.update({
        status: 'deleted'
    })

    return updatedParticipant
}

module.exports = {
    findAllParticipants,
    findParticipantById,
    createParticipant,
    updateParticipant,
    deleteParticipant
}
