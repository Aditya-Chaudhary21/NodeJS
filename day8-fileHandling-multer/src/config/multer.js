const multer = require("multer");

//disk storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

//Memory storage
const memoryStorage = multer.memoryStorage();

//middleware
const upload = multer({ storage: storage });

module.exports = upload;
