const express = require("express");
const connectDB = require("./src/config/db");
const router= require("./src/routes/note.route");
const cors = require("cors");
connectDB();

const app = express();
app.use(cors({
    origin: "http://localhost:5173",
}))

app.use(express.json());

app.use("/notes",router);

module.exports = app;