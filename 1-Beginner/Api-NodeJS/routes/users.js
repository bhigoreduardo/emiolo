const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  return res.send({ message: "GET users.js" });
});

router.post("/", (req, res) => {
  return res.send({ message: "POST users.js" });
});

module.exports = router;
