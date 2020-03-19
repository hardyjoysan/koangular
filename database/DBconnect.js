const MongoClient = require('mongodb').MongoClient
const uri = 'mongodb+srv://mongoOne:hardii@570@clusterone-hehf8.mongodb.net/test?retryWrites=true&w=majority';
const db = 'uxboxdb';
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

class DBConnect {

    static connect (collection) {
        return MongoClient.connect(uri, options)
            .then( client => {
                return client.db(db).collection(collection);
            })
            .catch( err => { console.log(err)});
    }
}
module.exports = DBConnect;