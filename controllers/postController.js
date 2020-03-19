class Controller{

    findOne = async (ctx) => {
        ctx.body = ["Post"];
    }

    findAll = async (ctx) => {
        ctx.body = ["Posts"];
    }
}

const controller = new Controller();

module.exports = controller;