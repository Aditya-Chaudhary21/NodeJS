const mongoose = require("mongoose");

const connectDb = async()=>{
    try{
       await  mongoose.connect(process.env.mongoose_uri);
        console.log("Connected to db successfully");
    }catch(error){
        console.log("Error while connecting to db",error);
    }
}

module.exports=connectDb;