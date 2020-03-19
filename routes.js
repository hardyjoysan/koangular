const Router = require("@koa/router");
const router = new Router({ prefix: '/api'});

// User routes
router.get('/users', async (ctx, next) => {
    ctx.body = ['Users']
})

// Posts routes
router.get('/posts', async (ctx, next) => {
    ctx.body = ['Posts']
})

module.exports = router;