const express = require('express');
const router = express.Router();
const bcrypt = require("bcrypt");
const User = require("../models/User");

router.get("/users", (req, res) => {
  console.log(req.user);
  if(req.user) {
    res.json(users);  
  } else {
    res.sendStatus(403);
  }
  
});

router.post("/signup", async(req, res) => {
  const {firstName, lastName, email, password} = req.body;
  let errorObject = {}
  const user = await User.findOne({where: {email: email}});
  console.log(req.session.authenticated);

  if(password.length < 6) {
    errorObject.passwordError = "Password needs to be greater than 6 characters";
  }

  if(user) {
    errorObject.emailError = `${email} is already taken`;
    res.json(errorObject);
  } else {
    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(password, salt);
    
    if(errorObject.passwordError) {
      res.json(errorObject)
    } else {
      const newUser = await User.create({
        firstName,
        lastName,
        email,
        password: hashPassword
      });
    
      res.json({
        newUser,
        authenticated: true,
        status: 200
      })
    }
  }
});;

router.post('/login', async(req, res) => {
  const { email, password } = req.body;
  let user, hashPassword, isPassword = null;
  let errorMessage = Object.create({});

  if(email && password) {
    user = await User.findOne({where: {email: email}});

    if(user) {
      hashPassword = user.password;
      isPassword = await bcrypt.compare(password, hashPassword).valueOf();
    } else {
      errorMessage.userError = "Invalid email";
    }

    if(isPassword) {
      req.session.user = {
        name: (`${user.firstName} ${user.lastName}`),
        uid: user.id
      }
    } else {
      errorMessage.passwordError = "Invalid password"
    }

    if(req.session.authenticated && result) {
      console.log("SENDING SESSION");
      res.json(req.session);
    } else {
      if(isPassword) {
        req.session.authenticated = true;
        req.isAuthenticated = true;
        req.session.msg = "You have successfully logged in!";
        req.session.msgCode = true;
        res.json(req.session);
      } else {
        console.log("ERROR MESSAGE SENDING");
        res.json(errorMessage);
      }
    }
  }
});

router.get("/getAuth", (req, res) => {
  res.json({
    isAuth: req.session.authenticated
  });
});

module.exports = router;