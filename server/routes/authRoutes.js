const express = require("express");

const router = express.Router();

const {
  register,
  login,
  getAllUsers,
  deleteUser,
} = require("../controllers/authController");

router.post("/register", register);

router.post("/login", login);

// ================= ADMIN =================

// Get All Users
router.get("/users", getAllUsers);

// Delete User
router.delete("/users/:id", deleteUser);

module.exports = router;