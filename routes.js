const Router = require("@koa/router");
const router = new Router({ prefix: '/api'});

const postController = require('./controllers/postController');
const userController = require('./controllers/userController');

// User routes
router
    .get('/user', userController.findOne)
    .get('/users', userController.findAll)

// Posts routes
router
    .get('/post', postController.findOne)
    .get('/posts', postController.findAll)

module.exports = router;