const router = require("express").Router();
const { Goals, Checklist } = require("../../models");
const withAuth = require("../../utils/auth");

//Creating a new goal
router.post("/", withAuth, async (req, res) => {
  try {
    const newGoals = await Goals.create({
      ...req.body,
      user_id: req.session.user_id,
    });
    res.status(200).json(newGoals);
  } catch (err) {
    res.status(400).json(err);
  }
});


// router.post("/", withAuth, async (req, res) => {
//   try {
//     const newChecklist = await Checklist.create({
//       ...req.body,
//       user_id: req.session.user_id,
//     });
//     res.status(200).json(newChecklist);
//   } catch (err) {
//     res.status(400).json(err);
//   }
// });

  // If the user is already logged in, return to profile
router.post("/", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/profile");
    return;
  }
  res.render("login");
});

module.exports = router;
