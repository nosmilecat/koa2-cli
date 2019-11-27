const service = require('../services/api/users')
const users = require('./users')
const login = require('./login')
const hobby = require('./hobby')
const carousel = require('./carousel')
const upload = require('./upload')
const controller = {
  users,
  login,
  hobby,
  carousel,
  upload
}
module.exports = controller
