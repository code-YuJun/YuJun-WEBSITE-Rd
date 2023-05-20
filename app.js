const Koa = require('koa')
const app = new Koa()

const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const json = require('koa-json')
// cors 跨域
const cors = require("koa-cors");
app.use(cors());

const home = require('./routes/home')
// const users = require('./routes/users')


// middlewares
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// routes
app.use(home.routes(), home.allowedMethods())
// app.use(users.routes(), users.allowedMethods())

app.on('success',() => {
  console.log("服务器启动成功")
})

// error-handling
app.on('error', (err, ctx) => {
  console.error('服务器错误', err, ctx)
});

module.exports = app
