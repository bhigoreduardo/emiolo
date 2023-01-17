const expres = require("express");
const auth = require("../middlewares/auth");

const router = expres.Router();

router.get("/", auth, (req, res) => {
  console.log(res.locals.userAuth);
  return res.send({ message: "Protected GET index.js" });
});

router.post("/", (req, res) => {
  return res.send({ message: "POST index.js" });
});

module.exports = router;
