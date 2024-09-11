const { pool } = require("../config/db.js");

exports.getAll = async (req, res) => {
  try {
    const { rows } = await pool.query({
      name: "fetch-foods",
      text: "SELECT * FROM cook",
    });
    return res.status(200).json({
      status: "success",
      data: rows,
    });
  } catch (error) {}
};

exports.getFoodByName = async (req, res) => {
  try {
    const params = req.params;
    const query = params.name
      .split("")[0]
      .toUpperCase()
      .concat(params.name.slice(1, params.name.length));
    const { rows } = await pool.query({
      name: "fetch-foodsByName",
      text: "SELECT * FROM cook WHERE title = $1",
      values: [query],
    });
    return res.status(200).json({
      status: "success",
      data: rows,
    });
  } catch (error) {}
};

exports.getIngredients = async (req, res) => {
  try {
    const params = req.params;
    const query = params.name
      .split("")[0]
      .toUpperCase()
      .concat(params.name.slice(1, params.name.length));

    const { rows } = await pool.query({
      name: "fetch-ingredients",
      text: 'select * from "cookIngredient" inner join cook on cook.id = "cookIngredient".cook_id inner join ingredient on ingredient.id = "cookIngredient".ingredient_id where title = $1 ',
      values: [query],
    });
    return res.status(200).json({
      status: "success",
      data: rows,
    });
  } catch (error) {}
};
