const { DataTypes} = require('sequelize')
const db = require('../utils/database')

const Users = db.define('users', {
  id: {
    type: DataTypes.UUID,
    primaryKey: true
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: [3, 255]
    }
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: [3, 255]
    }
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
    validate: {
      len: [8, 255],
      isEmail: true
    }
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  profileImg: {
    type: DataTypes.STRING
  },


  status: {
    type: DataTypes.ENUM('active', 'banned', 'inactive', 'deleted')
  }
})

module.exports = Users