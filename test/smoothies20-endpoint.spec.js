const knex = require('knex');
const app = require('../src/app');
const supertest = require('supertest');
const Helpers = require('./test-helpers');

//TEST 20oz SMOOTHIES ENDPOINT
describe('20oz SMOOTHIES ENDPOINT TEST', () => {
    //DECLARE EMPTY DATABASE VARIABLE
    let db;

    //GET THE 20oz TEST SMOOTHIES FROM FIXTURES FUNCTION
    const { testSmoothies20 } = Helpers.makeFixtures();

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

    //TEST THE 20oz SMOOTHIES TABLE
    describe('SMOOTHIES20 TEST /api/smoothies20', () => {
        //SEED THE 20oz SMOOTHIES TABLE
        beforeEach('Insert Smoothies into Test Database', () => {
            Helpers.seedSmoothies20(db, testSmoothies20)
        });

        //TEST THE RETURN OF ALL 20oz SMOOTHIES
        it('Returns list of 20oz Smoothies', () => {
            return supertest(app)
                .get('/api/smoothies20')
                .expect(200)
        });
    });
});