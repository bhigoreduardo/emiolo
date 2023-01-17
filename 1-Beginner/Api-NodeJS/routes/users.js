require("dotenv").config({ path: ".env.local" });
const express = require("express");
const bcrypt = require("bcrypt");
const User = require("../models/user");
const jwt = require("jsonwebtoken");
const config = require("../config/config");

const router = express.Router();

function createUserToken(userId) {
  // const SECRET = process.env.SECRET;
  const SECRET = config.SECRET;
  const TOKEN_EXPIRE = config.TOKEN_EXPIRE;
  return jwt.sign({ id: userId }, SECRET, { expiresIn: TOKEN_EXPIRE });
}

router.get("/", async (req, res) => {
  try {
    const users = await User.find({});
    return res.send(users);
  } catch (err) {
    return res.status(500).send({ error: "Server error" });
  }
});

router.post("/", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).send({ error: "Email and password must be required" });
  }

  try {
    if (await User.findOne({ email: email })) {
      return res.status(400).send({ error: "User email address has already registered" });
    }

    const user = await User.create(req.body);
    user.password = undefined;
    return res.send({ user, token: createUserToken(user._id) });
  } catch (err) {
    return res.status(500).send({ error: "Server error" });
  }
});

router.post("/auth", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).send({ error: "Email and password must be required" });
  }

  try {
    const user = await User.findOne({ email: email }).select("+password");
    if (!user) res.status(400).send({ error: "User does not exists" });

    const isMatched = await bcrypt.compare(password, user.password);
    if (!isMatched) {
      return res.status(401).send({ error: "Invalid password" });
    }

    user.password = undefined;
    return res.send({ user, token: createUserToken(user._id) });
  } catch (err) {
    return res.status(500).send({ error: "Server error" });
  }
});

module.exports = router;
