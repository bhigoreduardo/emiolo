const express = require("express");
const bcrypt = require("bcrypt");
const User = require("../models/user");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const users = await User.find({});
    return res.send(users);
  } catch (err) {
    return res.send({ error: "Server error" });
  }
});

router.post("/", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.send({ error: "Email and password must be required" });
  }

  try {
    if (await User.findOne({ email: email })) {
      return res.send({ error: "User email address has already registered" });
    }

    const user = await User.create(req.body);
    user.password = undefined;
    return res.send(user);
  } catch (err) {
    return res.send({ error: "Server error" });
  }
});

router.post("/auth", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.send({ error: "Email and password must be required" });
  }

  try {
    const user = await User.findOne({ email: email }).select("+password");
    if (!user) res.send({ error: "User does not exists" });

    const isMatched = await bcrypt.compare(password, user.password);
    if (!isMatched) {
      return res.send({ error: "Invalid password" });
    }

    user.password = undefined;
    return res.send(user);
  } catch (err) {
    return res.send({ error: "Server error" });
  }
});

module.exports = router;
