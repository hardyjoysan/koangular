class PostController{

    findOne = async (ctx) => {
        ctx.body = ["Post"];
    }

    findAll = async (ctx) => {
        ctx.body = ["Posts"];
    }
}

module.exports = new PostController;