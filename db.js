const path = require('path');
const { Sequelize } = require('sequelize');

// TODO - create the new sequelize connection
const db = new Sequelize({
    dialect: 'sqlite',
    storage: path.join(__dirname, 'db.sqlite')
  })
  
module.exports = {
    db,
    Sequelize
};
