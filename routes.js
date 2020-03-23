const Router = require("@koa/router");
const router = new Router({ prefix: '/api'});

const user = require('./controllers/UserController');
const post = require('./controllers/PostController');
const google = require('./controllers/GoogleController');

// Google OAuth
router
    .get('/google/authentication', google.authenticate)
    .get('/google/redirected', google.verifyAuth)

// User routes
router
    .get('/users', user.findAll)
    .get('/user', user.findOne)

// Posts routes
router
    .get('/posts', post.findAll)
    .get('/post', post.findOne)

module.exports = router;