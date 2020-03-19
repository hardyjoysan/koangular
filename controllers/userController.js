const DBconnect = require('../database/DBconnect');

class Controller{

    findOne = async (ctx) => {
        return DBconnect.connect("uxcollection")
            .then(collection => {
                collection.find({}).toArray(function(err, docs) {
                    console.log("successs", docs);
                });
            });
    }

    findAll = async (ctx) => {
        ctx.body = ["users"];
    }

}

const controller = new Controller();

module.exports = controller;