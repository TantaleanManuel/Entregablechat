const Users = require('./users.models')
const Messages = require('./messages.models')
const Participants = require('./participants.models')
const Conversations = require('./conversations.models')


const initModels = () => {
    //? hasOne
    //? hasMany
    //? belongsTo
    //? belongsToMany
    Users.hasMany(Participants)
    Participants.belongsTo(Users)

    Participants.hasMany(Messages)
    Messages.belongsTo(Participants) 

    Conversations.hasMany(Participants)
    Participants.belongsTo(Conversations)
}

module.exports = initModels
