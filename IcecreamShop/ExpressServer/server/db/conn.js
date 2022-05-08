const {MongoClient} = require('mongodb');
const config = require('../config');
const { db : { host, port} } = config;
const connectionString = `mongodb://${host}:${port}`;

const client = new MongoClient(connectionString);
let dbConnection;
module.exports = {
    connectToServer: function( callback ) {
        client.connect( (err, db) => {
            if(err || !db){
                return "Error: "+err;
            }
            dbConnection = db.db('MyShop');
            console.log("successfully connected to Mongo Db");
            return callback();
        });
    },
    getDb: () => {
        return dbConnection;
    }
}
