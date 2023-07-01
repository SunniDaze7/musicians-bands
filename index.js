const { Band } = require('./models/Band')
const { Musician } = require('./models/Musician')
const { Song } = require("./models/Song")
// Define associations here
//band has multiple musicians
Band.hasOne(Musician)
Musician.hasOne(Band)

//bands have many songs and vice versa
Band.belongsToMany(Song, {through: "band-song"})
Song.belongsToMany(Band, {through: "band-song"})

module.exports = {
    Band,
    Musician,
    Song
};
