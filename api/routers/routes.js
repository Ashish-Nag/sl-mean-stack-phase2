const express = require('express');
const question = require('../controllers/question.js');
const user = require('../controllers/user');
const routes = express.Router();

routes.get('/questions', question.getQuestion);
routes.get('/user', user.getUser).post('/user', user.postUser);
module.exports = routes;