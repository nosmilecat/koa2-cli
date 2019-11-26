var Sequelize = require('sequelize');
var sequelize = require('../config/db');


var Hobby = sequelize.define('hobby',{
  // id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
  user_id:  Sequelize.STRING(30),
  eat: Sequelize.STRING(30),
  drink: Sequelize.STRING(30),
  color: Sequelize.STRING(30),
},{
  timestamps: false,
  freezeTableName: true
});

module.exports = Hobby