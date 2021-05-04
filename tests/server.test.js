const app = require('../src/app');
const supertest = require('supertest');
const request = supertest(app);

test("A aplicação deve rodar na porta 3000", async () => {
  try{
    const res = await request.get('/');
    expect(res.statusCode).toEqual(200);
  }catch(err){
    fail(err);
  }
});