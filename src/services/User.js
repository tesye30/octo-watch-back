const knex = require('../database/connection');
const bcrypt = require('bcrypt');

class User {
  async CreateNewUser(name, email, password){
    try{
      const salt = await bcrypt.genSalt(10);
      const hash = await bcrypt.hash(password, salt);
      await knex.insert({ name, email, password: hash, role: 0 }).table("users");
    }catch(err){
      return undefined;
    }
  }
}

module.exports = new User();