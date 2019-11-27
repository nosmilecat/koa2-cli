import Router from 'koa-router'
import controller from '../controllers'
import multer from 'koa-multer'
import path from 'path'
const router = Router()



router.post('/login', controller.login.index)
router.get('/hobby', controller.hobby.list)
router.get('/carousel', controller.carousel.list)
router.post('/carousel', controller.carousel.add)
router.put('/carousel/:id', controller.carousel.editor)
router.delete('/carousel/:id', controller.carousel.delete)


var storage = multer.diskStorage({
	//定义文件保存路径
	destination:function(req,file,cb){
	    cb(null,path.join(__dirname, '../../public/upload/'));//路径根据具体而定。如果不存在的话会自动创建一个路径
	},                       //注意这里有个，
	//修改文件名
	filename:function(req,file,cb){
	    var fileFormat = (file.originalname).split(".");
    	    cb(null,Date.now() + "." + fileFormat[fileFormat.length - 1]);
	}
})
var upload = multer({ storage: storage });
router.post('/upload', upload.single('file'), controller.upload.index);

router.get('/users/find', controller.users.find)

router.post('/users/insert', controller.users.insert)

router.delete('/users/delete', controller.users.delete)

router.put('/users/update', controller.users.update)

export default router.routes()
