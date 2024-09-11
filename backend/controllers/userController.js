const { pool } = require("../config/db.js");

exports.getAll = async (req, res) => {
  try {
    const { rows } = await pool.query({
      name: "fetch-user",
      text: "SELECT * FROM users",
    });
    return res.status(200).json({
      status: "success",
      data: rows,
    });
  } catch (error) {}
};
