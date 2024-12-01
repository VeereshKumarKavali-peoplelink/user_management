const express = require("express");
const { createUser, getUsers, updateUser, deleteUser, getHome , getUser} = require("../controllers/userController");
const { authenticate, authorize } = require("../middleware/authMiddleware");
const validateUser = require("../middleware/globalValidateUser.js");

const router = express.Router();

// Public APIs
router.get("/", authenticate, getUsers);
router.get("/home", authenticate, getHome);
router.get("/userData", authenticate, getUser);


// Restricted APIs for Admins only
router.post("/", authenticate, authorize(["admin"]),validateUser, createUser);
router.put("/:id", authenticate, authorize(["admin"]), updateUser);
router.delete("/:id", authenticate, authorize(["admin"]), deleteUser);

module.exports = router;
