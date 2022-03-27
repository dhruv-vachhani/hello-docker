const express = require("express");
const app = express();

app.get("/", (req, res) => {
  //send static file html file in response
  res.send("Hello World, excited to learn Docker ;) ");
});

app.listen(5000, () => {
  console.log("Server started on port 5000");
});
