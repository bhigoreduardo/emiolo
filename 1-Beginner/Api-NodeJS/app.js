const express = require("express");
const app = express();

app.get("/", (req, res) => {
  const { name, lastName } = req.query;

  return res.send({ message: `Nome: ${name} - Sobrenome: ${lastName}` });
});

app.listen(3000);
module.exports = app;

