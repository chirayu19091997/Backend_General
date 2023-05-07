const userModel = require("../models/user");
const bcrypt = require("bcrypt");
const saltRounds = 10;
exports.getUsers = async (req, res, next) => {
	const encryptedPassword = await bcrypt
		.hash(req.body.password, saltRounds)
		.toString();
	const userData = await userModel.findOne({
		email: req.body.email,
		password: encryptedPassword,
	});
	// const dataget = res.json({
	// 	data: await userModel.find(req),
	// });
	// if (encryptedPassword === userData.password) {
	console.log(encryptedPassword);
	res.json({
		status: "Authenticated",
		reqData: encryptedPassword,
		data: userData,
	});
	// }
};

exports.getUser = async (req, res, next) => {
	try {
		res.json({ data: await userModel.findById(req.params.id), error: false });
	} catch (err) {
		res.json({ data: err, error: true });
	}
	// res.header("Access-Control-Allow-Origin", "*");
};

exports.createUser = async (req, res, next) => {
	try {
		const encryptedPassword = bcrypt
			.hash(req.body.password, saltRounds)
			.toString()
			.then((res) => res);
		const user = new userModel({
			email: req.body.email,
			password: encryptedPassword,
		});
		const resp = await user.save();
		res.json({ data: resp, error: false });
	} catch (err) {
		res.json({ data: err, error: true });
	}
};

exports.updateUser = async (req, res, next) => {
	try {
		const user = new userModel({
			...req.body,
		});
		res.json({
			data: await userModel.findByIdAndUpdate(req.params.id, user),
			error: false,
		});
	} catch (err) {
		res.json({ data: err, error: true });
	}
};

exports.deleteUser = async (req, res, next) => {
	try {
		await userModel.findByIdAndDelete(req.params.id);
		res.json({ message: `Deleted user ${req.params.id}` });
	} catch (err) {
		res.json({ data: err, error: true });
	}
};
