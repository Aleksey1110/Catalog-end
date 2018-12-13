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
// Добавить агрегат
router.post('/addCar/:carid/:modelid/:unitid', ctrlAdd.createUnit);
// Добавить деталь
router.post('/addCar/:carid/:modelid/:unitid/:detailid', ctrlAdd.createDetail);
// Добавить составляющие детали
router.post('/addCar/:carid/:modelid/:unitid/:detailid/:itemid', ctrlAdd.createItem);
// Добавить аналог
router.post('/addCar/:carid/:modelid/:unitid/:detailid/:itemid/:anid', ctrlAdd.createAnalogue);

module.exports = router;