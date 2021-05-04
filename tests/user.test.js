const app = require('../src/app');
const User = require('../src/services/User');
const supertest = require('supertest');
const request = supertest(app);

const mainUser = {
  name: "Main User",
  email: "exemplo@exemplo.com",
  password: '123'
}

describe("CRUD de usuário", () => {

  test("Deve retornar um usuário", async () => {
    try{
      const id = await User.returnIdByEmail(mainUser.email);

      const res = await request
                      .get('/user')
                      .send(id)
      expect(res.statusCode).toEqual(200);
      expect(res.body.name).toEqual("Teste");
    }catch(err){
      fail(err);
    }
  });

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

  test("Deve deletar um usuário com sucesso", async () => {
    try{
      const { id } = await User.returnIdByEmail(mainUser.email);
      const res = await request
                     .delete('/user')
                     .send(id);
      expect(res.statusCode).toEqual(200);
      expect(res.bdoy.message).toEqual("Usuário deletado com sucesso.");
    }catch(err){
      fail(err);
    }
  });
});