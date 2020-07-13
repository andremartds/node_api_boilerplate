const { Router } = require('express');

const routes = new Router();

routes.get('/teste', (req, res) => {
  return res.json({messate: "Hello World"});
})

module.exports = routes;