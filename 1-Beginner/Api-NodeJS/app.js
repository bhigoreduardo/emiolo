require("dotenv").config({ path: ".env.local" });
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const config = require("./config/config");

// MONGOOSE
// const url = process.env.DB_URL;
const url = config.DB_URL;
mongoose.connect(url);

mongoose.connection.on("error", (err) => {
  console.log(`There was an error connecting to the database: ${err}`);
});
mongoose.connection.on("disconnect", () => {
  console.log("Database connection dropped");
});
mongoose.connection.on("connected", () => {
  console.log("Successful database connection");
});

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
