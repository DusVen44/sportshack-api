const knex = require('knex');
const app = require('../src/app');
const supertest = require('supertest');
const Helpers = require('./test-helpers');

//TEST 32oz SMOOTHIES ENDPOINT
describe('32oz SMOOTHIES ENDPOINT TEST', () => {
    //DECLARE EMPTY DATABASE VARIABLE
    let db;

    //GET THE 32oz TEST SMOOTHIES FROM FIXTURES FUNCTION
    const { testSmoothies32 } = Helpers.makeFixtures();

    //USE TEST DATABASE AND SET IT FOR TESTS
    before('make knex instance', () => {
        db = knex({
          client: 'pg',
          connection: process.env.TEST_DATABASE_URL
        });
        app.set('db', db);
      });

    //FUNCTION TO RUN FOR EVERY TEST
    after('disconnect from db', () => db.destroy());
    before('cleanup', () => Helpers.clearTables(db));
    afterEach('cleanup', () => Helpers.clearTables(db));

    //TEST THE 32oz SMOOTHIES TABLE
    describe('SMOOTHIES20 TEST /api/smoothies32', () => {
        //SEED THE 32oz SMOOTHIES TABLE
        beforeEach('Insert Smoothies into Test Database', () => {
            Helpers.seedSmoothies20(db, testSmoothies32)
        });

        //TEST THE RETURN OF ALL 32oz SMOOTHIES
        it('Returns list of 32oz Smoothies', () => {
            return supertest(app)
                .get('/api/smoothies32')
                .expect(200)
        });
    });
});