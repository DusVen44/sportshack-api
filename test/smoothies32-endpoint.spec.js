const knex = require('knex');
const app = require('../src/app');
const supertest = require('supertest');
const { expect } = require('chai');
const Helpers = require('./test-helpers');

describe('32oz SMOOTHIES ENDPOINT TEST', () => {
    let db;

    const { testSmoothies32 } = Helpers.makeFixtures();

    before('make knex instance', () => {
        db = knex({
          client: 'pg',
          connection: process.env.TEST_DATABASE_URL
        });
        app.set('db', db);
      });

    after('disconnect from db', () => db.destroy());
    before('cleanup', () => Helpers.clearTables(db));
    afterEach('cleanup', () => Helpers.clearTables(db));

    describe('SMOOTHIES20 TEST /api/smoothies32', () => {
        beforeEach('Insert Smoothies into Test Database', () => {
            Helpers.seedSmoothies20(db, testSmoothies32)
        });

        it('Returns list of 32oz Smoothies', () => {
            return supertest(app)
                .get('/api/smoothies32')
                .expect(200)
        });
    });
});