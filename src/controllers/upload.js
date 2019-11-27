import fs from 'fs'
import path from 'path'
class uploadController {
  static async index(ctx) {
    
    ctx.success({
      filename: ctx.req.file.filename//返回文件名
    })
    
  }
}
module.exports = uploadController

