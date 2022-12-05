const userModel = require("../models/user");
const bcrypt = require("bcrypt");

exports.getUsers = async (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.json({ data: await userModel.find(req) });
};

exports.getUser = async (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.json({ data: await userModel.findById(req.query._id) });
};

exports.createUser = (req, res, next) => {
  const encryptedPassword = bcrypt.hash(req.body.password, 10).toString();
  const user = new userModel({
    email: req.body.email,
    password: encryptedPassword,
  });
  user
    .save()
    .then((resp) => {
      res.json({ data: resp, error: false });
    })
    .catch((err) => {
      res.json({ data: err, error: true });
    });
};

exports.updateUser = async (req, res, next) => {
  const user = new userModel({
    ...req.body,
  });
  res.json({ data: await userModel.findByIdAndUpdate(req.body._id, user) });
};

exports.deleteUser = async (req, res, next) => {
  await userModel.findByIdAndDelete(req.query._id);
  res.json({ message: `Deleted user ${req.query._id}` });
};
