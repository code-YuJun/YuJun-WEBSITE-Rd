const router = require('koa-router')()
const controller = require("../controllers/home.js");


router.get('/', controller.homeData)

module.exports = router
