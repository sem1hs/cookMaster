const express = require("express");
const { getAll } = require("../controllers/userController.js");
const route = express.Router();

route.get("/getAllUsers", getAll);

module.exports = route;
