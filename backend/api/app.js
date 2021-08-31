const dotenv = require("dotenv");
dotenv.config();
const express = require('express');
const app = express();
const session = require('express-session');
const store = new session.MemoryStore();
const port = process.env.PORT || 5000;
const mailroom = require('./routes/mailroom');
const userRoute = require('./routes/user');
const authRoute = require('./routes/auth');
const {sequelize} = require('./util/database');
const Package = require('./models/Package');
const User = require('./models/User');
const passport = require('passport');
const local = require('./strategies/local');
const cors = require('cors');

// TODO: 
// Set up CORS
// PUSH project Heroku

// Setup database
User.hasMany(Package);

sequelize.sync()
  .then(result => console.log(result))
  .catch(error => console.error(error));

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(session({
  secret: `${process.env.SECRET_KEY}`,
  cookie: {maxAge: 9000},
  saveUninitialized: false,
  resave: true,
  store
}));

app.use(passport.initialize());
app.use(passport.session());

app.use((req,res,next) => {
  console.log(store);
  next();
});

app.use(cors({
  origin: "https://mailroom-project.herokuapp.com"
}));

app.use("/api/v1", mailroom );
app.use('/api/v1', userRoute);
app.use("/auth", authRoute);

if(process.env.NODE_ENV === 'production') {
  app.use(express.static("../../frontend/build"));
}

app.listen(port, () => {
  console.log(`Listening on localhost:${port}`);
});