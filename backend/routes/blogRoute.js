const express = require("express");
const { getAll } = require("../controllers/blogController");
const route = express.Router();

route.get("/getAllBlog", getAll);

module.exports = route;
