const knex = require('../database/connection');
const bcrypt = require('bcrypt');

class User {

  async CreateNewUser(name, email, password){
    try{
      const newPassword = password.toString();
      const salt = await bcrypt.genSalt(10);
      const hash = await bcrypt.hash(newPassword, salt);
      
      await knex.insert({ name, email, password: hash, role: 0 }).table("users");
      return { status: true };
    }catch(err){
      console.log(err);
      return { status: false };
    }
  }
}

module.exports = new User();