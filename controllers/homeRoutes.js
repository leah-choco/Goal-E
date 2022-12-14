const router = require("express").Router();
const { User, Goals, Checklist } = require("../models");
const withAuth = require("../utils/auth");

//Rendering homepage
router.get("/", async (req, res) => {
  try {
    res.render("homepage", {
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET login form
router.get("/login", (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect("/profile");
    return;
  }
  res.render("login");
});

// GET signup form
router.get("/signup", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/profile");
    return;
  }
  res.render("signUp");
});

//GET create goals form
router.get("/create", (req, res) => {
  if (!req.session.logged_in) {
    res.sendStatus(404);
    return;
  }
  res.render("createGoals");
});

router.get("/edit/:id", async (req, res) => {
  try {
    console.log(req.params.id);
    const goalsData = await Goals.findByPk(req.params.id);

    const goal = goalsData.get({ plain: true });

    res.render("editGoals", {
      goal: goal,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
