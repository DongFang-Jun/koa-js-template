const Koa = require('koa')
const { privateRouter, publicRouter } = require('./routes')
const { loggerMiddleware } = require('./logs/log')
const { errorHandler, responseHandler } = require('./middlewares/response')
const app = new Koa()

app.use(loggerMiddleware)

// Error Handler
app.use(errorHandler)

// Routes
app.use(publicRouter.routes()).use(publicRouter.allowedMethods()) // 公共路由
app.use(privateRouter.routes()).use(privateRouter.allowedMethods()) // 私有路由

// Response
app.use(responseHandler)

module.exports = app
