import Router from 'koa-router'
import controller from '../controllers'

const router = Router()

router.prefix('/api')

router.get('/', async (ctx, next) => {
  ctx.body = 'api'
})



router.post('/login', controller.login.index)
router.get('/hobby', controller.hobby.list)



router.get('/users/find', controller.users.find)

router.post('/users/insert', controller.users.insert)

router.delete('/users/delete', controller.users.delete)

router.put('/users/update', controller.users.update)

export default router
