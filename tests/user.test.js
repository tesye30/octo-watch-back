const app = require('../src/app');
const User = require('../src/services/User');
const supertest = require('supertest');
const request = supertest(app);

const mainUser = {
  name: "Main User",
  email: "exemplo@exemplo.com",
  password: '123'
}

beforeAll(async () => {
  try{
    await request
      .post('/user')
      .send(mainUser)
  }catch(err){
    console.log(err);
  }
});

afterAll(async () => {
  try{
    const id = await User.returnIdByEmail(mainUser.email);
    await request
          .delete('/user')
          .send(id);
  }catch(err){
    console.log(err);
  }
});

describe("CRUD de usuário", () => {

  test("Deve retornar um usuário", async () => {
    try{
      const id = await User.returnIdByEmail(mainUser.email);

      const res = await request
                      .get('/user')
                      .send(id)
      expect(res.statusCode).toEqual(200);
      expect(res.body.name).toEqual("Main User");
    }catch(err){
      fail(err);
    }
  });
});