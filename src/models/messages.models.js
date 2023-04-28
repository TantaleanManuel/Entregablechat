const db = require('../utils/database')
const { DataTypes } = require('sequelize')
const Participants = require('./participants.models')

const Messages = db.define('messages', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    status: {
        type: DataTypes.ENUM('active', 'deleted')
    },
    participantsId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: Participants,
            key: 'id'
        }
    }
})

module.exports = Messages
