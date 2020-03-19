const Koa = require('koa');
const router = require('./routes');

const app = new Koa();

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(3000);