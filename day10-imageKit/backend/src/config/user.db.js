const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const connectDb = async()=>{
   try {
     await mongoose.connect(process.env.MONGO_URI);
     console.log("db connected successfully");
    
   } catch (error) {
        console.log("error in db connection",error);
    
   }
}

module.exports = connectDb;