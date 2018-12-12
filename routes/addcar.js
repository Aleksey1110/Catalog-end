const express = require('express');
const router = express.Router();
const Car = require('../models/catalogs');

// Папка контроллера
const ctrlAdd = require('../controllers/addcar');

// Добавить марку
router.post('/addCar', ctrlAdd.createMark);
// Добавить модель
router.post('/addCar/:carid', ctrlAdd.createModel);
// Добавить модификацию
router.post('/addCar/:carid/:modelid', ctrlAdd.createMod);

module.exports = router;