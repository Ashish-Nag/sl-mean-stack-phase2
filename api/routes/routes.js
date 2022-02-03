const express = require('express');
const question = require('../controllers/question.js');

const routes = express.Router();

routes.get('/', question.getQuestion);

module.exports = routes;