const { sequelize, db } = require('./db');
const { Band, Musician, Song } = require('./index')

//global band
let band
//global song
let song
//global musician
let musician

describe('Band, Musician, and Song Models', () => {
    /**
     * Runs the code prior to all tests
     */
    beforeAll(async () => {
        // the 'sync' method will create tables based on the model class
        // by setting 'force:true' the tables are recreated each time the 
        // test suite is run
        await db.sync({ force: true });
        band = await Band.create({name: 'band', genre: 'rock'})
        song = await Song.create({title: 'song', year: 1980, length: 500})
        musician = await Musician.create({name: 'alice', instrument: 'guitar'})
    })

    test('can create a Band', async () => {
        // TODO - test creating a band
        expect(band).toHaveProperty('name');
    })

    test('can create a Musician', async () => {
        // TODO - test creating a musician
        expect(musician).toHaveProperty('instrument');
    })

    // test('can update a Band', async () => {
    //     // TODO - test updating a band
    //     expect('NO TEST').toBe('EXPECTED VALUE HERE');
    // })

    // test('can update a Musician', async () => {
    //     // TODO - test updating a musician
    //     expect('NO TEST').toBe('EXPECTED VALUE HERE');
    // })

    test('can delete a Band', async () => {
        // TODO - test deleting a band
        let deletedB = await Band.destroy({
            where: {
                name: 'band'
            }
        })
        expect(deletedB).toBe(1);
    })

    test('can delete a Musician', async () => {
        // TODO - test deleting a musician
        let deletedM = await Musician.destroy({
            where: {
                instrument: 'guitar'
            }
        })
        expect(deletedM).toBe(1);
    })
})