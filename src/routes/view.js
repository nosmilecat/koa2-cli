import Router from 'koa-router'
import controller from '../controllers'

const router = Router()



router.get('/', async (ctx) =>{
  await ctx.render('index')
})


export default router.routes()
