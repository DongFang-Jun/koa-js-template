const log4js = require('log4js')

log4js.configure({
  appenders: {
    out: { type: 'stdout' },
    app: { type: 'file', filename: __dirname + '/log/log' }
  },
  categories: {
    default: { appenders: ['out', 'app'], level: 'debug' }
  }
})

const logger = log4js.getLogger()

const loggerMiddleware = async (ctx, next) => {
  // 请求开始时间
  const start = new Date()
  await next()
  // 结束时间
  const ms = new Date() - start
  // 打印出请求相关参数
  const remoteAddress =
    ctx.headers['x-forwarded-for'] ||
    ctx.ip ||
    ctx.ips ||
    (ctx.socket &&
      (ctx.socket.remoteAddress || (ctx.socket.socket && ctx.socket.socket.remoteAddress)))
  let logText = `${ctx.method} ${ctx.status} ${ctx.url} 请求参数： ${JSON.stringify(
    ctx.request.body
  )} 响应参数： ${JSON.stringify(ctx.body)} - ${remoteAddress} - ${ms}ms`
  logger.info(logText)
}

module.exports = {
  logger,
  loggerMiddleware
}
