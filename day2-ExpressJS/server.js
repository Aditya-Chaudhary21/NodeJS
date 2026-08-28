const express = require("express");
const app = express();
app.use(express.json());
console.log(app);

app.get("/", (req, res) => {
  res.send("here is response");
});
app.get("/about", (req, res) => {
  res.send("this is about page");
});

app.post("/login", (req, res) => {
  const data = req.body;
  res.send(data);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`server is listening on ${PORT}`);
});
