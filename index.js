const express = require("express");

const app = express();

app.get("/home", (req, res) => {
  res.json({ message: "OK! SIR" });
});

app.listen(3005, () => {
  console.log("Server is up and running on PORT: ", 3005);
});
