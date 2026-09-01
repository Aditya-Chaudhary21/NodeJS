const userModel = require("../models/user.model");
const uploadFile = require("../services/storage.service");

const testApi = async(req, res) => {
  try {
    
    const file = req.file;
    console.log("file===================",file);
    if (!file) {
      return res.status(400).json({
        message: "No file uploaded",
      });
    }

    const imageUrl =  await uploadFile(file.buffer, file.originalname);
    const post = await userModel.create({
      image: imageUrl.url,
    
    });


    return res.status(201).json({
      message: "file tranfered successfully",
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal Server Error",
       error: error.message,
    });
  }
};

module.exports = { testApi };
