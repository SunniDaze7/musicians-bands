const {Sequelize, db} = require('../db');

// TODO - define the Musician model
let Musician = db.define('Musician',{
    name: Sequelize.STRING,
    instrument:  Sequelize.STRING
});
module.exports = {
    Musician
};