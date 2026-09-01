const express = require("express");
const router = require("./routes/user.route.js");
const cors = require("cors");
const connectDb = require("./config/user.db.js");
const app = express();
connectDb();
app.use(express.json());
app.use(cors({
    origin:"http://localhost:5173"
}))

app.use("/api", router);

module.exports = app;
