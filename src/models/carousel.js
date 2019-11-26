var Sequelize = require('sequelize');
var sequelize = require('../config/db');


var Carousel = sequelize.define('carousel',{
  // id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
  pic_url:  Sequelize.STRING(30),
  name: Sequelize.STRING(30),
  jump_url: Sequelize.STRING(30),
  remark: Sequelize.STRING(30),
},{
  timestamps: false,
  freezeTableName: true
});

module.exports = Carousel