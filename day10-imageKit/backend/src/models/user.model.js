const mongosse = require("mongoose");

const userSchema = new mongosse.Schema({
    image:{type:String , required:true}
});

const userModel = mongosse.model("user",userSchema);
module.exports = userModel;