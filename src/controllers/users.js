const service = require('../services/api/users')
class usersController {
  static async find(ctx) {
    let data = await service.findOne(ctx.query);
    if(data) {
      ctx.success(data)
    } else {
      ctx.fail(data)
    }
  }
  static async insert(ctx) {
    ctx.body = await service.insert(ctx.request.body)
  }
  static async delete(ctx) {
    ctx.body = await service.delete(ctx.request.body)
  }
  static async update(ctx) {
    ctx.body = await service.update(ctx.request.body)
  }
}
module.exports = usersController