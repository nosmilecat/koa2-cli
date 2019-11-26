import service from '../services/api/hobby'
class hobbyController {
  static async list (ctx) {
    let data = await service.list(ctx.query)
    if (!data.code) {
      ctx.success(data)
    } else {
      ctx.fail(data.msg, data.code)
    }
  }
}
module.exports = hobbyController
