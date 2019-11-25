import hobbyModel from '../../models/hobby'
class hobbyService {
  static async list (data) {
    let res = await hobbyModel.findAll({where: { user_id: global.user_id } , raw: true});
    console.log(res)
    return res;
  }
}

module.exports = hobbyService
