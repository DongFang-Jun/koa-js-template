const jwt = require('jsonwebtoken')
const { JWT } = require('../config/config')
const { CODE } = require('../config/code')

module.exports = {
  jwtMiddlewareDeal: async (ctx, next) => {
    const token = ctx.request.headers.token
    if (typeof token === 'string') {
      try {
        ctx.jwtInfo = jwt.verify(token, JWT.secret)
      } catch (error) {
        throw CODE.tokenFailed
      }
    } else {
      throw CODE.tokenFailed
    }
    return next()
  }
}
