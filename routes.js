const Router = require("@koa/router");
const router = new Router({ prefix: '/api'});

const postController = require('./controllers/postController');
const userController = require('./controllers/userController');

// User routes
router
    .get('/users', userController.findAll)
    .get('/user', userController.findOne)

// Posts routes
router
    .get('/posts', postController.findAll)
    .get('/post', postController.findOne)

module.exports = router;