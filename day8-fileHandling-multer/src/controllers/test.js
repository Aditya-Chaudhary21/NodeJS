const postData = (req, res) => {
  try {
    const body = req.body;
    const file = req.file;
    console.log("Received data:", body);
    console.log("Received file:", file);
    return res.status(200).json({
      message: "Data received successfully",
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
};
module.exports = {
  postData,
};
