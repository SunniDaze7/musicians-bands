const {Sequelize, sequelize} = require('../db');

// TODO - define the Musician model
let Musician = Musician.init({
    name: DataTypes.STRING,
    instrument:  DataTypes.STRING
},{
    sequelize: db,
    modelName: 'Musician'
  });
module.exports = {
    Musician
};