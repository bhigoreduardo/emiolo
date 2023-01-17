require("dotenv").config({ path: ".env.local" });
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

// MONGOOSE
const url = process.env.DB_URL;
mongoose.connect(url);

const app = express();

// BODY PARSER
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// ROUTES
const indexRoute = require("./routes/index");
const usersRoute = require("./routes/users");

app.use("/", indexRoute);
app.use("/users", usersRoute);

app.listen(3000);
module.exports = app;
