const LocalStrategy = require("passport-local");
const passport = require("passport");

passport.serializeUser((user, done) => {
  done(null, user.username);
});

passport.deserializeUser((username, done) => {
  try {
    let user;
    for(let i = 0; i < users.length; i++) {
      if(users[i].username === username) {
        user = users[i];
        console.log(users[i]);
      }
    }
    if(user) {
      console.log(user);
      done(null, user);
    }
  } catch(e) {
    done(e, null);
  }
});


passport.use(new LocalStrategy(
  async(username, password, done) => {

    try {
      let user;
      for(let i = 0; i < users.length; i++) {
        if(users[i].username === username) {
          user = users[i];
          console.log(users[i]);
        }
      }
  
      if(user.username.length === 0) {
        done(null, false);
      } else {
        if(user.password === password) {
          done(null, user);
        } else {
          done(null, false);
        }
      }
    } catch(e) {
      done(e, false);
    }
    
  } 
));