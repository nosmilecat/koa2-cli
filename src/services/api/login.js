import loginModel from '../../models/login'
import jwt from 'jsonwebtoken';
class loginService {
  static async index (data) {
    let res = await loginModel.findOne({where: { name: data.name } , raw: true});
    console.log(res)
    if (!res) {
      return {
        code: 10110,
        msg: '用户名不存在或密码错误！!'
      }
    }
    if (res.password == data.password) {
      const jwtSecret = 'jwtSecret';
      const payload = {user_name: res.name, id: res.id};  
      const token = jwt.sign(payload, jwtSecret, { expiresIn: 60 * 30 });
      return {
        token,
        name: res.name
      }
    } else {
      return {
        code: 10110,
        msg: '用户名不存在或密码错误！'
      }
    }
  }
}

module.exports = loginService
