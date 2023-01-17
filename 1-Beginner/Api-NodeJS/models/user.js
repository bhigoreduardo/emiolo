const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  email: { type: String, required: true, unique: true, lowercase: true },
  password: { type: String, required: true, select: false },
  created: { type: Date, default: Date.now },
});

UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }

  const salt = 10;
  bcrypt.hash(this.password, salt, (err, encrypted) => {
    this.password = encrypted;
    return next();
  });
});

module.exports = mongoose.model("User", UserSchema);
