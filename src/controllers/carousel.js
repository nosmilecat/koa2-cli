import service from '../services/api/carousel'
class hobbyController {
  static async list (ctx) {
    let data = await service.list(ctx.query)
    if (!data.code) {
      ctx.success(data)
    } else {
      ctx.fail(data.msg, data.code)
    }
  }
  static async add (ctx) {
    const body = ctx.request.body;
    if(!body.pic_url) {
      ctx.fail('pic_url is required', 10110);
      return;
    }
    let data = await service.add(body)
    if (!data.code) {
      ctx.success(data)
    } else {
      ctx.fail(data.msg, data.code)
    }
  }
  static async editor (ctx) {
    const id = ctx.params.id;
    const body = ctx.request.body;
    if(!id) {
      ctx.fail('id is required', 10110);
      return;
    }
    if(!body.pic_url) {
      ctx.fail('pic_url is required', 10110);
      return;
    }
    let data = await service.editor(id, body)
    if (!data.code) {
      ctx.success(data)
    } else {
      ctx.fail(data.msg, data.code)
    }
  }
  static async delete (ctx) {
    const id = ctx.params.id;
    console.log(id)
    if(!id) {
      ctx.fail('pic_url is required', 10110);
      return;
    }
    let data = await service.delete(id)
    if (!data.code) {
      ctx.success(data)
    } else {
      ctx.fail(data.msg, data.code)
    }
  }
}
module.exports = hobbyController
