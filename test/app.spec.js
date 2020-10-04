const app = require('../src/app');

//TEST THE WELCOME STATEMENT
describe('APP', () => {
  it('GET / responds with 200 containing "Welcome to Sportshack Supplement Depot!"', () => {
    return supertest(app)
      .get('/')
      .expect(200, "Welcome to Sportshack Supplement Depot!")
  });
});