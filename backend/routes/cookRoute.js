const express = require("express");
const {
  getAll,
  getFoodByName,
  getIngredients,
} = require("../controllers/cookController.js");
const route = express.Router();

route.get("/getAllFood", getAll);
route.get("/getFood/:name", getFoodByName);
route.get("/getIngredients/:name", getIngredients);

module.exports = route;
