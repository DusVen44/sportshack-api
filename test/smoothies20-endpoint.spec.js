const knex = require('knex');
const app = require('../src/app');
const supertest = require('supertest');
const { expect } = require('chai');

describe('20oz SMOOTHIES ENDPOINT TEST', () => {
    let clearTables= function clearTables(db) {
        return db.raw(
            `TRUNCATE history, users, exercises RESTART IDENTITY CASCADE`
        );
    };

    let db;

    before('make knex instance', () => {
        db = knex({
          client: 'pg',
          connection: process.env.TEST_DATABASE_URL
        });
        app.set('db', db);
      });

    after('disconnect from db', () => db.destroy());
    before('cleanup', () => clearTables);
    afterEach('cleanup', () => clearTables);


    it('GET RESPONDS WITH ALL 20oz SMOOTHIES', () => {
        return supertest(app)
            .get('/api/smoothies20')
            .expect(200)
    });
});