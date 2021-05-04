const app = require('../src/app');
const supertest = require('supertest');
const request = supertest(app);

const mainUser = {
  name: "Main User",
  email: "exemplo@exemplo.com",
  password: '123',
  role: 0
}

describe("Cadastro de usuário", () => {
  test("Deve cadastrar um usuário com sucesso", async (done) => {
    try{
      const res = await request
                      .post('/user')
                      .send(mainUser);
      expect(res.statusCode).toEqual(200);
    }catch(err){
      fail(err);
    }
  });
});