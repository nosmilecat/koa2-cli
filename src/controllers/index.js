const service = require('../services/api/users')
const users = require('./users')
const login = require('./login')
const controller = {
  users,
  login
}
module.exports = controller
