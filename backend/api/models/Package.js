// const Sequelize = require('sequelize');
const db = require('../util/database');
const sequelize = db.sequelize;
const Sequelize = db.Sequelize;

const Package = sequelize.define('package', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  trackingLink: {
    type: Sequelize.STRING,
    allowNull: false
  },
  carrier: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  status: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

module.exports = Package;

console.log(Package === sequelize.models.Package);