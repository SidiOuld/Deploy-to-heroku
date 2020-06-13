const express = require("express");

const server = express();

server.use(express.json());

const messageArr = [];

server.get("/", (req, res) => {
  res.status(200).json({ Meesage: "Deploying to heroku" });
});
server.get("/messages", (req, res) => {
  res.status(200).json(messageArr);
});
server.post("/messages", (req, res) => {
  messageArr.push(req.body);
  res.status(201).json(messageArr);
});
const port = process.env.Port || 8000;

server.listen(port, () => {
  console.log(`Server is listning on port ${port}`);
});
