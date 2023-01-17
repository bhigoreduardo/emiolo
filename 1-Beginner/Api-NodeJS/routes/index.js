const expres = require("express");

const router = expres.Router();

router.get("/", (req, res) => {
  return res.send({ message: "GET index.js" });
});

router.post("/", (req, res) => {
  return res.send({ message: "POST index.js" });
});

module.exports = router;
