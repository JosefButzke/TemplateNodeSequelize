const { Router } = require('express');
const SessionController = require('./app/controller/SessionController');

const routes = new Router();

routes.post('/sessions', SessionController.store);

module.exports = routes;