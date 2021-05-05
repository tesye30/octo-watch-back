const knex = require('../database/connection');
const bcrypt = require('bcrypt');

class User {

  async FindUserById(id){
    try{
      const user = await knex
                          .select(["id", "name", "email", "role"])
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

  async FindUsersByName(name){
    try{
      const users = await knex
                          .select(["name", "email", "role"])
                          .where('name', 'like', `%${name}%`)
                          .table("users");
      if(users.length > 1){
        return users;
      }else if(users.length == 1){
        return users[0];
      }else{
        return undefined
      }
    }catch(err){
      console.log(err);
      return { err: err, users: [] };
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

  async DeleteUser(id){
    try{
      const user = await this.FindUserById(id);
      if(user != undefined){
        await knex.delete().where({ id: id }).table("users");
        return { status: true  };
      }else{
        return { status: false, err: "Usuário não existe." };
      }
    }catch(err){
      return { status: false, err: err };
    }
  }
}

module.exports = new User();