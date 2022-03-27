const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World, excited to learn Docker ;) ");
});

app.listen(5000, () => {
  console.log("Server started on port 5000");
});
