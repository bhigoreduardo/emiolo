const express = require("express");
const bcrypt = require("bcrypt");
const User = require("../models/user");

const router = express.Router();

router.get("/", (req, res) => {
  User.find({}, (err, data) => {
    if (err) return res.send({ error: "Fail to load users data" });

    return res.send(data);
  });
});

router.post("/", (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.send({ error: "Email and password must be required" });
  }

  User.findOne({ email: email }, (err, data) => {
    if (err) return res.send({ error: "Error fetching user" });
    if (data) return res.send({ error: "User email address has already registered" });
  });

  User.create(req.body, (err, data) => {
    if (err) return res.send({ error: "Registration failure" });

    data.password = undefined;
    return res.send(data);
  });
});

router.post("/auth", (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.send({ error: "Email and password must be required" });
  }

  User.findOne({ email: email }, (err, data) => {
    if (err) return res.send({ error: "Error fetching user" });
    if (!data) return res.send({ error: "User does not exists" });

    bcrypt.compare(password, data.password, (err, same) => {
      if (!same) return res.send({ error: "Invalid password" });

      data.password = undefined;
      return res.send(data);
    });
  }).select("+password");
});

module.exports = router;
