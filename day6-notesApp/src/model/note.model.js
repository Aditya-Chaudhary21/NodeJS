const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema({
    title:{type:String,required:true},
    description:{type:String,required:true,minLength:[10,"Description should be minimum 10 characters long"]},
})

const NodeModel = mongoose.model("Note",noteSchema);
module.exports = NodeModel; 