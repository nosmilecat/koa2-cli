const service = require('../services/api/login')
class loginController {
  static async index (ctx) {
    let data = await service.index(ctx.request.body)
    if (!data.code) {
      ctx.success(data)
    } else {
      ctx.fail(data.msg, data.code)
    }
  }
}
module.exports = loginController
