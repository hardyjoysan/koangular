const Router = require("@koa/router");
const router = new Router({ prefix: '/posts'});

router.get('/', async (ctx, next) => {
    ctx.body = ctx
})

module.exports = router;