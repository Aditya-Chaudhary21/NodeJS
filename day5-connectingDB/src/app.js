const express = require('express');
const connectDb = require("./config/db")
const noteModel = require("./model/note.model")

const app = express();
app.use(express.json());
connectDb();

app.post('/create',async(req,res)=>{
    const {title, description} =req.body;

    const note = await  noteModel.create({
        title,
        description
    });
    res.send({
        status:"success",
        message:"Note created successfully",
        data:note
    })
})

app.get('/',(req,res)=>{
    res.send('Hello world from express');
})

module.exports = app;
