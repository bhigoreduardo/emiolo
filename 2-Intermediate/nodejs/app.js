const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.get("/", function (req, res) {
  res.render("home/index.ejs");
});

app.get("/cadastro-noticia", function (req, res) {
  res.render("admin/cadastro-noticia.ejs");
});

app.get("/noticias", function (req, res) {
  res.render("noticias/noticias.ejs");
});

app.listen(3000, function () {
  console.log("Server running on port 3000");
});
