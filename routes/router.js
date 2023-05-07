const express = require("express");
const router = express();
const {
	getUsers,
	getUser,
	createUser,
	updateUser,
	deleteUser,
} = require("../controllers/user");

router.get("/getUser/:id", getUser);
router.get("/getUsers", getUsers);
router.post("/createUser", createUser);
router.put("/updateUser/:id", updateUser);
router.delete("/deleteUser/:id", deleteUser);

module.exports = router;
