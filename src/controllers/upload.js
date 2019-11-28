
class uploadController {
  static async index(ctx) {
    
    ctx.success({
      filename: `/upload/${ctx.req.file.filename}` //返回文件路径
    })
    
  }
}
module.exports = uploadController

