const express = require('express');
const router = express.Router();

// Папка контроллера
const ctrlAdd = require('../../controllers/picture-catalog/addcar');

// Добавить марку
router.post('/addCar', ctrlAdd.createMark);
// Добавить модель
router.post('/addCar/:carid', ctrlAdd.createModel);
// Добавить модификацию
router.post('/addCar/:carid/:modelid', ctrlAdd.createMod);
// Добавить агрегат
router.post('/addCar/:carid/:modelid/:unitid', ctrlAdd.createUnit);
// Добавить раздел
router.post('/addCar/:carid/:modelid/:unitid/:detailid', ctrlAdd.createDetail);
// Добавить составляющие раздела
router.post('/addCar/:carid/:modelid/:unitid/:detailid/:itemid', ctrlAdd.createItem);
// Добавить составляющие раздела
router.post('/addCar/:carid/:modelid/:unitid/:detailid/:itemid/:anid', ctrlAdd.createDetailItems);

module.exports = router;