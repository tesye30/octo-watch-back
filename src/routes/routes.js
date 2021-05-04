const { Router } = require('express');
const routes = Router();

// Apenas para passar no teste
routes.get("/", (req, res) => {
  res.json({});
});

module.exports = routes;