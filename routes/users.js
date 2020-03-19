const Router = require("@koa/router");
const router = new Router({ prefix: '/api/users'});

router.get('/', async (ctx, next) => {
    ctx.body = ['Users']
})

module.exports = router;