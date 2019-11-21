const userModel = require('../../models/users')

class usersService {
  static async findOne(data) {
    return userModel.findOne(data.name);
  }
  static async insert(data) {
    let v = [data.name, data.pwd, data.sex, data.role, new Date()]
    return await userModel.insertData(v)
  }
  static async delete(data) {
    return await userModel.deleteData(data.name)
  }
  static async update(data) {
    let v = [data.age, data.name]
    return await userModel.updateData(v)
  }
}

module.exports = usersService