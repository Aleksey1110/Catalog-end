const express = require('express');
const router = express.Router();

// Папка контроллера
const ctrlAdd = require('../../controllers/picture-catalog/addcar');
const token = require('../../controllers/admin/register');

// Добавить марку
router.post('/addCar', token.verifyToken, ctrlAdd.createMark);
// Добавить модель
router.post('/addCar/:carid', token.verifyToken, ctrlAdd.createModel);
// Добавить модификацию
router.post('/addCar/:carid/:modelid', token.verifyToken, ctrlAdd.createMod);
// Добавить агрегат
router.post('/addCar/:carid/:modelid/:unitid', token.verifyToken, ctrlAdd.createUnit);
// Добавить раздел
router.post('/addCar/:carid/:modelid/:unitid/:detailid', token.verifyToken, ctrlAdd.createDetail);
// Добавить составляющие раздела
router.post('/addCar/:carid/:modelid/:unitid/:detailid/:itemid', token.verifyToken, ctrlAdd.createItem);
// Добавить составляющие раздела
router.post('/addCar/:carid/:modelid/:unitid/:detailid/:itemid/:anid', token.verifyToken, ctrlAdd.createDetailItems);

module.exports = router;