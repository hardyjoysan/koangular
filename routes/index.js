const combineRouters = require('koa-combine-routers');
const postRouter = require('./posts');
const userRouter = require('./users');

const router = combineRouters(
    postRouter,
    userRouter
)

module.exports = router;