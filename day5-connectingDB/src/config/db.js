const mongoose = require("mongoose");

const connectDb = async ()=>{
    try{
        await mongoose.connect("mongodb://adityachwdry1_db_user:cohort12345@ac-bsph1za-shard-00-00.ntaeg9g.mongodb.net:27017,ac-bsph1za-shard-00-01.ntaeg9g.mongodb.net:27017,ac-bsph1za-shard-00-02.ntaeg9g.mongodb.net:27017/?ssl=true&replicaSet=atlas-jmu56t-shard-0&authSource=admin&appName=CohortCluster")
    console.log("Connected to db successfully");
    }catch(error){
        console.log("Error while connecting to db",error);
    }
}

module.exports = connectDb;