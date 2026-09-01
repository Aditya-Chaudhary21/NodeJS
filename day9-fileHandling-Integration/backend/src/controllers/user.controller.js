const testApi = (req, res) => {
  try {
    const body = req.body;
    const filee = req.files;
    console.log("body------", body);
    console.log("file------", filee);
    return res.status(201).json({
      message: "file tranfered successfully",
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

module.exports = { testApi };
