import http from 'http'
import Koa from 'koa'
import path from 'path'
import views from 'koa-views'
import convert from 'koa-convert'
import json from 'koa-json'
import Bodyparser from 'koa-bodyparser'
import logger from 'koa-logger'
import koaStatic from 'koa-static-plus'
import koaOnError from 'koa-onerror'
import config from './config'
import routerResponse from './middleware/routerResponse'
import koaJwt  from 'koa-jwt'
import jwt from 'jsonwebtoken'
const app = new Koa()
const bodyparser = Bodyparser()

// middlewares
app.use(convert(bodyparser))
app.use(convert(json()))
app.use(convert(logger()))
app.use(routerResponse())

import cors from 'koa2-cors'
// 允许跨域
app.use(cors())


// 路由权限控制
// 处理没有权限时的异常
const jwtSecret = 'jwtSecret'
app.use(async (ctx, next) => {
  if (ctx.header && ctx.header.authorization) {
    const parts = ctx.header.authorization.split(' ');
    if (parts.length === 2) {
      //取出token
      const scheme = parts[0];
      const token = parts[1];
      if (/^Bearer$/i.test(scheme)) {
        //jwt.verify方法验证token是否有效
        jwt.verify(token, jwtSecret, (err, authData) => {
          if(err) {
            // 无效或过期
            console.log(err)
          } else {
            // 每次都会返回新的token
            const payload = {user_name: authData.user_name, id: authData.id};      
            const newToken = jwt.sign(payload, jwtSecret, { expiresIn: 60 * 30 });
            //将新token放入Authorization中返回给前端
            ctx.res.setHeader('Authorization', newToken);

          }
        });
      }
    }
  }
  return next().catch((err) => {
      if (401 == err.status) {
          ctx.status = 401;
          ctx.fail('token无效', 401);
      } else {
          throw err;
      }
  });
});
// 前端携带token方式 headers  Authorization: `Bearer ${token}`
app.use(koaJwt({secret:jwtSecret}).unless({
  path:[/^\/api\/login/]
}))


// static
app.use(convert(koaStatic(path.join(__dirname, '../public'), {
  pathPrefix: ''
})))

// views
app.use(views(path.join(__dirname, '../views'), {
  map: {html: 'ejs'}
}))

// 500 error
koaOnError(app, {
  template: 'views/500.html'
})

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// response router
app.use(async (ctx, next) => {
  await require('./routes').routes()(ctx, next)
})

// 404
app.use(async (ctx) => {
  ctx.status = 404
  await ctx.render('404')
})

// error logger
app.on('error', async (err, ctx) => {
  console.log('error occured:', err)
})

const port = parseInt(config.port || '3000')
const server = http.createServer(app.callback())

server.listen(port)
server.on('error', (error) => {
  if (error.syscall !== 'listen') {
    throw error
  }
  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(port + ' requires elevated privileges')
      process.exit(1)
      break
    case 'EADDRINUSE':
      console.error(port + ' is already in use')
      process.exit(1)
      break
    default:
      throw error
  }
})
server.on('listening', () => {
  console.log('Listening on port: %d', port)
})

export default app
