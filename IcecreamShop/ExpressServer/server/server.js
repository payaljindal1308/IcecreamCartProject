const express = require('express');
const app = express();
const config = require('./config');
const { join } = require('path');
const cors = require('cors');
const dbObject = require(join(__dirname,'db/conn'));
const record = require(join(__dirname,'routes/record.js'));
console.log(record);
app.use(cors());
app.use(express.json());
app.use(require(join(__dirname,'routes/record.js')));
app.use(( req, res, next )=> {
    res.status(500).send({code: 500, response: "Something went wrong"});
    next();
});

dbObject.connectToServer( err => {
    if(err){
        console.log("Error : "+err);
    }
    app.listen(config.app.port, () => {
        console.log(`Server is listening at port: ${config.app.port}`);
    });
});
