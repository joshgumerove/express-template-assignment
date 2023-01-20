const express = require("express");
const router = express.Router();

const applicationUsers = [];

router.post("/add-user", (req, res, next) => {
  applicationUsers.push({
    email: req.body.email,
  });
  res.redirect("/users");
});
router.get("/users", (req, res, next) => {
  res.render("users", {
    pageTitle: "Users Page",
    hasUsers: applicationUsers.length > 0,
    applicationUsers,
  });
});

module.exports = router;
