const userModel = require("../models/user");

exports.getUsers = async (req, res, next) => {
  res.json({ data: await userModel.find() });
};

exports.getUser = async (req, res, next) => {
  res.json({ data: await userModel.findById(req.query._id) });
};

exports.createUser = async (req, res, next) => {
  const user = new userModel({
    email: req.body.email,
    password: req.body.password,
  });

  res.json({ data: await user.save() });
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
