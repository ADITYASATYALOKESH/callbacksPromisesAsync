const express = require('express');
const FirstRouter = require('../controllers/FirstController');
const route = express.Router();
route.get('/get-student', FirstRouter.GetStudent);
module.exports = route;