const express = require("express");

const server = express();

server.use(express.json());

const messages = [];

server.get("/", (req, res) => {
  res.status(200).json({ Meesage: "Deploying to heroku" });
});
server.get("/messages", (req, res) => {
  res.status(200).json(messages);
});
server.post("/messages", (req, res) => {
  messages.push(req.body);
  res.status(201).json(messages);
});
const PORT = process.env.PORT || 8000;

server.listen(PORT, () => {
  console.log(`Server is listning on port ${PORT}`);
});
