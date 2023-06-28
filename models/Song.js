const {Sequelize, sequelize} = require('../db');

// TODO - define the Song model
let Song = Song.init({
    title: DataTypes.STRING,
    year:  DataTypes.INTEGER,
    length:  DataTypes.INTEGER
},{
    sequelize: db,
    modelName: 'Song'
  });

module.exports = {
    Band
};

module.exports = {
    Song
};