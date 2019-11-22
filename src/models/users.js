var Sequelize = require('sequelize')
var sequelize = require('../config/db')

var User = sequelize.define('users', {
  id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
  name: Sequelize.STRING(30),
  message: Sequelize.STRING(30)
}, {
  timestamps: false,
  freezeTableName: true
})

exports.findOne = function (name) {
  if (name) {
    return User.findOne({where: { name: name }, raw: true})
  }
  return User.findAll({raw: true})
}
exports.insertData = function (name) {
  return User.findAll({raw: true})
}
exports.deleteData = function (name) {
  return User.findAll({raw: true})
}
exports.updateData = function (name) {
  return User.findAll({raw: true})
}
