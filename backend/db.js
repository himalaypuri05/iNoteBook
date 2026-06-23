const mongoose = require('mongoose');
require("dotenv").config({ path: __dirname + "/.env" });

// const mongoURI = "mongodb://127.0.0.1:27017/inotebook";
const mongoURI = process.env.MONGO_URI;

const connectToMongo = async () => {
    mongoose.connect(mongoURI)
        .then(() => {
            console.log("Connected to Mongo Successfully");
        })
}


module.exports = connectToMongo;
