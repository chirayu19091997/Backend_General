const express = require("express");
const router = express();
const {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
  updateUserMysql,
} = require("../controllers/user");

router.get("/getUser", getUser);
router.get("/getUsers", getUsers);
router.post("/createUser", createUser);
router.put("/updateUser", updateUserMysql);
router.delete("/deleteUser", deleteUser);

module.exports = router;
