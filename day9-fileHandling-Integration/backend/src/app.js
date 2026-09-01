const express = require("express");
const router = require("./routes/user.route.js");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors({
    origin:"http://localhost:5173"
}))
app.use("/api", router);

module.exports = app;
