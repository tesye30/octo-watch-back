const knex = require('../database/connection');
const bcrypt = require('bcrypt');

class User {

  async FindUserById(id){
    try{
      const user = await knex
                          .select(["id", "name", "email", "password"])
                          .where({ id: id })
                          .table("users");
      if(user != undefined){
        return user[0];
      }else{
        return undefined;
      }
    }catch(err){
      console.log(err);
      return [];
    }
  }

  async returnIdByEmail(email){
    const id = await knex
                      .select(["id"])
                      .where({ email: email })
                      .table("users");
    return id[0];
  }

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