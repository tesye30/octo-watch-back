const app = require('../src/app');
const supertest = require('supertest');
const request = supertest(app);

const mainUser = {
  name: "Main User",
  email: "exemplo@exemplo.com",
  password: '123'
}

describe("Cadastro de usuário", () => {
  test("Deve cadastrar um usuário com sucesso", async () => {
    try{
      const res = await request
                      .post('/user')
                      .send(mainUser);
      expect(res.statusCode).toEqual(200);
      expect(res.body.message).toEqual("Usuário criado com sucesso.");
      // done();
    }catch(err){
      fail(err);
    }
  });
});