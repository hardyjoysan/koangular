class Controller{

    findOne = async (ctx) => {
        ctx.body = ["user"];
    }

    findAll = async (ctx) => {
        ctx.body = ["users"];
    }
    
}

const controller = new Controller();

module.exports = controller;