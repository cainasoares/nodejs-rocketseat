const express = require('express');

const routes = express.Router();

const authController = require('./controllers/authController');

routes.get('/', authController.signin);

module.exports = routes;
