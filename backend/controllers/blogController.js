const { pool } = require("../config/db.js");

exports.getAll = async (req, res) => {
  try {
    const { rows } = await pool.query({
      name: "fetch-blogs",
      text: 'select b.id,b1.date,u.name,u.image,b2.content,b2.title,b2.image as foodImage from blog b inner join "blogDetail" b1 on b1.id = b."blogDetail_id" inner join users u on u.id = b1."authorId" inner join "blogContent" b2 on b2.id = b."blogContent_id"',
    });
    return res.status(200).json({
      status: "success",
      data: rows,
    });
  } catch (error) {}
};
