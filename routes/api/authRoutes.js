/**
 * @name authRoutes
 *
 * @description API reoutes for user login and account creation
 */

const express = require("express");

const router = express.Router();

// Login Route - /api/auth/lgoin
router.post("/login", (req, res) => {
    res.send("Login Route");
});

// Account creation route - /api/auth/signup
router.post("/signup", (req, res) => {
    res.send("Signup route");
});

module.exports = router;
