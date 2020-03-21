const DBconnect = require('../database/DBconnect');

class UserController{

    findAll = async (ctx) => {
        await DBconnect.find('uxcollection',{}).then(result =>{
            ctx.body = result;
        })
    }

    findOne = async (ctx) => {
        ctx.body = ["user"];
    }

}

module.exports = new UserController;