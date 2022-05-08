const {MongoClient} = require('mongodb');
const uri = 'mongodb://localhost:27017'; 
const client = new MongoClient(uri);

async function listDatabases(client){
    databasesList = await client.db().admin().listDatabases();
 
    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};

const mongoConnect = async () => {
try{
await client.connect();
await listDatabases(client);
}
catch(err){
    console.log("Error:"+err);
}
}

mongoConnect();