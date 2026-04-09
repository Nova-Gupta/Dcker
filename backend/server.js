const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let users = [];

app.post("/add", (req, res) => {
  users.push(req.body);
  res.json({ message: "User added", users });
});

app.get("/users", (req, res) => {
  res.json(users);
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});