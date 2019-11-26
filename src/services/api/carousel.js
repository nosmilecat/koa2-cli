import carouselModel from '../../models/carousel'
class carouselService {
  static async list () {
    let res = await carouselModel.findAll({raw: true});
    return res;
  }
  static async add (data) {
    console.log(data)
    let res = await carouselModel.create(data);
    return res;
  }
  static async editor (id, data) {
    console.log(data)
    let res = await carouselModel.update(data, {where:{id}});
    return {
      status: res[0]
    };
  }
  static async delete (id) {
    console.log(id)
    let res = await carouselModel.destroy({ where: {id} });
    return {
      status: res
    };
  }
}

module.exports = carouselService
