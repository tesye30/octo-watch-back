const User = require('../services/User');


class UserController {
  async CreateNewUser(req, res){
    try{
      const{ name, email, password } = req.body;
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
}

module.exports = new UserController();
