const express = require("express");
const router = express.Router();
const dal = require("../services/pg.people.dal");

router.get("/", async (req, res) => {
  try {
    let thePeople = await dal.getPeople();
    res.render("home", { thePeople });
  } catch (err) {
    console.log(err);
  }
});

router.get("/:ID/edit", async (req, res) => {
  res.render("homePatch.ejs", {
    FirstName: req.query.FirstName,
    LastName: req.query.LastName,
    Email: req.query.Email,
    theId: req.params.ID,
  });
});

router.get("/:ID/delete", async (req, res) => {
  res.render("homeDelete.ejs", {
    FirstName: req.query.FirstName,
    theId: req.params.ID,
  });
});

router.post("/", async (req, res) => {
  try {
    let result = await dal.addPeople(
      req.body.FirstName,
      req.body.LastName,
      req.body.Email
    );
    res.redirect("/home");
  } catch (err) {
    console.log(err);
  }
});

router.patch("/:ID", async (req, res) => {
  try {
    await dal.patchPeople(
      req.params.ID,
      req.body.FirstName,
      req.body.LastName,
      req.body.Email
    );
    res.redirect("/home");
  } catch (err) {
    console.log(err);
  }
});

router.delete("/:ID", async (req, res) => {
  try {
    await dal.deletePeople(req.params.ID);
    res.redirect("/home");
  } catch (err) {
    console.log(err);
  }
});

router.get("/", async (req, res) => {
  res.render("home");
});

module.exports = router;
