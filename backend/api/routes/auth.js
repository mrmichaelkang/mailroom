const { Router } = require('express');
const router = Router();
const passport = require('passport');

router.post("/login", passport.authenticate('local'), (req, res) => {
  // console.log(req.user);
  res.sendStatus(200);
});

module.exports = router;