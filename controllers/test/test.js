const { listService } = require('../../services/test')
module.exports = {
  testApi: async (ctx, next) => {
    ctx.body = 'testApi'

    let result = await listService(1)

    ctx.body = { ...result, env: process.env.NODE_ENV }

    return next()
  },
  testPostApi: async (ctx, next) => {
    ctx.body = 'testPostApi'
    return next()
  }
}
