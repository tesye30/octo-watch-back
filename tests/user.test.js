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

  test("Deve retornar usuários que contenham um nome pasado", async () => {
    try{
      const res = await request
                    .get(`/users/?search=${mainUser.name}`);
      expect(res.statusCode).toEqual(200);
      expect(res.body).toBeDefined();
    }catch(err){
      fail(err);
    }
  });

  test("Deve editar um usuário com sucesso", async () => {
    try{
      const id = await User.returnIdByEmail(mainUser.email);
      const res = await request
                          .put(`/user/${id.id}`)
                          .send({ name: "Teste", email: "exemplo@exemplo.com" });
      expect(res.statusCode).toEqual(200);
      expect(res.body.message).toEqual("As informações do usuário foram alteradas com sucesso.");
    }catch(err){
      fail(err)
    }
  });
});