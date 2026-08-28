const express = require("express");
const connectDb = require("./src/config/db");
const NoteModel = require("./src/model/note.model");
const notesRoute = require("./src/routes/notes.route");

const app = express();
app.use(express.json());

connectDb();

app.use("/notes",notesRoute);

app.get("/",(req,res)=>{
    res.send("Hello from express");
})


module.exports = app;