import Router from 'koa-router'
import controller from '../controllers'

const router = Router()



router.post('/login', controller.login.index)
router.get('/hobby', controller.hobby.list)
router.get('/carousel', controller.carousel.list)
router.post('/carousel', controller.carousel.add)
router.put('/carousel/:id', controller.carousel.editor)
router.delete('/carousel/:id', controller.carousel.delete)



router.get('/users/find', controller.users.find)

router.post('/users/insert', controller.users.insert)

router.delete('/users/delete', controller.users.delete)

router.put('/users/update', controller.users.update)

export default router.routes()
