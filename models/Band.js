const {Sequelize, db} = require('../db');

// TODO - define the Band model
let Band = db.define('Band',{
    name: Sequelize.STRING,
    genre:  Sequelize.STRING
});

module.exports = {
    Band
};