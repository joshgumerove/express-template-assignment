const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: false }));
const userRoutes = require("./routes/users");

app.use(userRoutes);
app.get("/", (req, res, next) => {
  res.render("home");
});

app.listen(3200, () => {
  console.log("listening on port 3200");
});
