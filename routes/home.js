const express = require("express");
const router = express.Router();
const dal = require("../services/pg.people.dal");

router.get("/", async (req, res) => {
  res.render("home");
});

module.exports = router;
