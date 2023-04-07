const koaRouter = require('koa-router')
const controllers = require('../controllers')
const { jwtMiddlewareDeal } = require('../middlewares/jwt')
const router = new koaRouter()

router.use(jwtMiddlewareDeal)

router.post('/test', controllers.test_test.testPostApi) //测试接口

module.exports = router
