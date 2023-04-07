const koaRouter = require('koa-router')
const controllers = require('../controllers')
const router = new koaRouter()

router.get('/test', controllers.test_test.testApi)//测试接口

module.exports = router
