const MongoClient = require('mongodb').MongoClient;
const uri = 'mongodb+srv://mongoOne:hardii@570@clusterone-hehf8.mongodb.net/test?retryWrites=true&w=majority';
const db = 'uxboxdb';
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

class DBConnect {

    static async connect (collection) {
        try {
            const client = await MongoClient.connect(uri, options);
            return client.db(db).collection(collection);
        }
        catch (err) {
            console.log(err);
        }
    }

    static async find(collection, query) {
        const collect = await DBConnect.connect(collection);
        return collect.find(query).toArray();
    }
}
module.exports = DBConnect;