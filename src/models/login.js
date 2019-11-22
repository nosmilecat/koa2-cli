var Sequelize = require('sequelize');
var sequelize = require('../config/db');


var User = sequelize.define('users',{
  id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
  name: Sequelize.STRING(30),
  password: Sequelize.STRING(30),
  message: Sequelize.STRING(30),
},{
  timestamps: false,
  freezeTableName: true
});

module.exports = User