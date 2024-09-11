const app = require("./app");
const { connectDb } = require("./config/db");

app.listen(5000, async () => {
  console.log("App is listening on port 5000");
  await connectDb();
});
