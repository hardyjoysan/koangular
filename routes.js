const Router = require("@koa/router");
const router = new Router({ prefix: '/api'});

const userController = require('./controllers/UserController');
const postController = require('./controllers/PostController');


// User routes
router
    .get('/users', userController.findAll)
    .get('/user', userController.findOne)

// Posts routes
router
    .get('/posts', postController.findAll)
    .get('/post', postController.findOne)

module.exports = router;