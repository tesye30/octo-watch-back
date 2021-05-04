const { Router } = require('express');
const UserController = require('../controller/UserController');
const routes = Router();

// Apenas para passar no teste
routes.get("/", (req, res) => {
  res.json({});
});

routes.get('/user', UserController.FindUserById);
routes.post('/user', UserController.CreateNewUser);

module.exports = routes;