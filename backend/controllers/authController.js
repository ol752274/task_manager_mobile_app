const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.register = async (req, res) => {
  const hashed = await bcrypt.hash(req.body.password, 10);
  await User.create({ email: req.body.email, password: hashed });
  res.json({ message: "User created" });
};

exports.login = async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).json({ message: "User not found" });

  const match = await bcrypt.compare(req.body.password, user.password);
  if (!match) return res.status(400).json({ message: "Wrong password" });

  const token = jwt.sign({ id: user._id }, "SECRET_KEY");
  res.json({ token, email: user.email });
};
