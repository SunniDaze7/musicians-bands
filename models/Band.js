const { DataTypes } = require('sequelize');
const {Sequelize, sequelize} = require('../db');

// TODO - define the Band model
let Band = Band.init({
    name: DataTypes.STRING,
    genre:  DataTypes.STRING
},{
    sequelize: db,
    modelName: 'Band'
  });

module.exports = {
    Band
};