const express = require("express");
const connectDB = require("./src/config/db");
const router= require("./src/routes/note.route");
connectDB();

const app = express();

app.use(express.json());

app.use("/notes",router);

module.exports = app;