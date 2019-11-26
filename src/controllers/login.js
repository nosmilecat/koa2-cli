import service from '../services/api/login'
class loginController {
  static async index (ctx) {
    // controllers 做参数校验，service做业务逻辑
    const body = ctx.request.body;
    if (!body.name || !body.password) {
      ctx.fail('用户名或密码不能为空！~', 10110);
      return 
    }
    let data = await service.index(body)
    if (!data.code) {
      ctx.success(data)
    } else {
      ctx.fail(data.msg, data.code)
    }
  }
}
module.exports = loginController
