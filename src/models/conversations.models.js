const db = require('../utils/database')
const { DataTypes } = require('sequelize')
const Users = require('./users.models')

const Conversations = db.define('conversations', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true
    },
    profileImg: {
        type: DataTypes.STRING
      },
    name: {
        type: DataTypes.STRING
    },
    is_group: {
        type: DataTypes.BOOLEAN
    },
})

module.exports = Conversations
