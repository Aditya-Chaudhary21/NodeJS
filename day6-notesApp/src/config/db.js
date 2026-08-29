const mongoose = require("mongoose");

const connectDB = async () => {
    try{
        await mongoose.connect(process.env.database_uri)
        console.log("Connected to db successfully");
    }catch(error){
        console.log(" error occured while connecting to the database",error);
    }
}

module.exports = connectDB;