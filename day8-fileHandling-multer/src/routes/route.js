const express = require("express");
const { postData } = require("../controllers/test");
const upload = require("../config/multer");

const router = express.Router();

router.post("/test", upload.single("image"), postData);

module.exports = router;
