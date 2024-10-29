/**
 * @name userRoutes
 *
 * @description API routes for look up all the users
 */

const express = require("express");
const router = express.Router();

//import controller methods
const { getUsers } = require("../../controllers/userController");

//define the end User routes
router.route("/").get(getUsers);

module.exports = router;
