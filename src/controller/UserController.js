const User = require('../services/User');


class UserController {
  
  async FindUserById(req, res){
    try{
      const id = req.body.id;
      const user = await User.FindUserById(id);

      if(user != undefined){
        res.status(200).json(user);
      }else{
        res.status(400).json({ message: "Informação inválida." });
      }
    }catch(err){
      console.log(err);
    }
  }

  async CreateNewUser(req, res){
    try{
      const { name, email, password } = req.body;
      // Fazer validations
      const result = await User.CreateNewUser(name, email, password);
      if(result.status){
        res.status(200).json({ message: "Usuário criado com sucesso." });
      }else{
        res.status(500).json({ message: "Ocorreu um erro interno, tente novamente mais tarde." })
      }
    }catch(err){
      console.log(err);
    }
  }

  async DeleteUser(req, res){
    try{
      const id = req.body.id;
      const result = await User.DeleteUser(id);
      if(result.status){
        res.status(200).json({ message: "Usuário deletado com sucesso." });
      }else{
        res.status(406).json({ message: result.err });
      }
    }catch(err){
      console.log(err);
    }
  }
}

module.exports = new UserController();
