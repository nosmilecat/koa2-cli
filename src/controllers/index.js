const service = require('../services/api/users')
const users = require('./users')
const login = require('./login')
const hobby = require('./hobby')
const carousel = require('./carousel')
const controller = {
  users,
  login,
  hobby,
  carousel
}
module.exports = controller
