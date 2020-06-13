const express = require("express");

const server = express();

server.use(express.json());

server.get("/", (req, res) => {
  res.status(200).json({ Meesage: "Deploying to heroku" });
});
server.post("/", (req, res) => {
  res.send("Deploying to heroku");
});
const port = process.env.Port || 8000;

server.listen(port, () => {
  console.log(`Server is listning on port ${port}`);
});
