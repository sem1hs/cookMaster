const express = require("express");
const app = express();
const cors = require("cors");

const foodRoute = require("./routes/cookRoute.js");
const userRoute = require("./routes/userRoute.js");
const blogRoute = require("./routes/blogRoute.js");

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
    optionsSuccessStatus: 200,
  })
);

app.use("/api/foods", foodRoute);
app.use("/api/users", userRoute);
app.use("/api/blogs", blogRoute);

module.exports = app;
