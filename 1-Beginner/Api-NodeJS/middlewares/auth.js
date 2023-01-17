require("dotenv").config({ path: ".env.local" });
const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  const token = req.headers.auth;
  if (!token) return res.send({ error: "Token not found" });

  const SECRET = process.env.SECRET;
  jwt.verify(token, SECRET, (err, decoded) => {
    if (err) return res.send({ error: "Invalid token" });

    res.locals.userAuth = decoded;
    return next();
  });
};

module.exports = auth;
