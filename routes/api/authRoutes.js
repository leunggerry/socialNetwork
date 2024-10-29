/**
 * @name authRoutes
 *
 * @description API reoutes for user login and account creation
 */

const express = require("express");

const router = express.Router();

//import controller methods
const { createUser } = require("../../controllers/authController");

// Login Route - /api/auth/lgoin
router.post("/login", (req, res) => {
    res.send("Login Route");
});

// Account creation route - /api/auth/signup
router.route("/").post(createUser);

module.exports = router;
