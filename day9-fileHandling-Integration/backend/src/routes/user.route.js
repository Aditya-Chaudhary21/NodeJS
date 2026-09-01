const express = require("express");
const upload = require("../config/user.multer.js");
const {testApi} = require("../controllers/user.controller");

const router = express.Router();

router.post("/create",upload.array("images",3) , testApi);

module.exports = router;