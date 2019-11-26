import Router from 'koa-router'
import controller from '../controllers'
import apiRouter from './api'
import viewRouter from './view'

const router = Router()
router.get('/', async (ctx) => {
  await ctx.redirect('/view')
})
router.use('/view', viewRouter)
router.use('/api', apiRouter)

export default router
