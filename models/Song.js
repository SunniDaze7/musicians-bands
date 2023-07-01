const {Sequelize, db} = require('../db');

// TODO - define the Song model
let Song = db.define('Song',{
    title:Sequelize.STRING,
    year: Sequelize.INTEGER,
    length: Sequelize.INTEGER
});

module.exports = {
    Song
};