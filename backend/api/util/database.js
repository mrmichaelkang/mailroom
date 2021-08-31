const connection = 'postgres://postgres:mk4211310@localhost:5432/mailroom';
// const db = pgp(connection);
let db = {}

const Sequelize = require('sequelize');
const sequelize = new Sequelize(`${process.env.DB}`, `${process.env.DB_USER}`, `${process.env.DB_PASS}`, {
  dialect: 'postgres',
  host: `${process.env.DB_HOST}`
});

module.exports = openDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("Database connection successful.");
  } catch (e) {
    console.error(e);
  }
}

module.exports = closeDB = async () => {
  try {
    await sequelize.close();
    console.log("Database has been successfully closed.")
  } catch(e) {
    console.log(e);
  }
}

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
// module.exports = sequelize;