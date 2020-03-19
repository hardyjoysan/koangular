const DBconnect = require('../database/DBconnect');

class Controller{

    findAll = async (ctx) => {
        await DBconnect.find('uxcollection',{}).then(result =>{
            ctx.body = result;
        })
    }

    findOne = async (ctx) => {
        ctx.body = ["user"];
    }

}

const controller = new Controller();

module.exports = controller;