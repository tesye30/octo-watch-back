const User = require('../services/User');


class UserController {
  async CreateNewUser(req, res){
    try{
      const{ name, email, password } = req.body;
    
      // Fazer validations
      await User.CreateNewUser(name, email, password);
      res.status(200).json({ message: "Usuário criado com sucesso." });
    }catch(err){
      console.log(err);
    }
  }
}

module.exports = new UserController();
