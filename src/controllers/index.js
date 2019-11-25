const service = require('../services/api/users')
const users = require('./users')
const login = require('./login')
const hobby = require('./hobby')
const controller = {
  users,
  login,
  hobby
}
module.exports = controller
