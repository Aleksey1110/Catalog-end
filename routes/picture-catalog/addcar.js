const express = require('express');
const router = express.Router();
const passport = require('passport');

// Папка контроллера
const ctrlAdd = require('../../controllers/picture-catalog/addcar');

// Добавить марку
router.post('/addCar', passport.authenticate('jwt', {session: false}), ctrlAdd.createMark);
// Добавить модель
router.post('/addCar/:carid', passport.authenticate('jwt', {session: false}), ctrlAdd.createModel);
// Добавить модификацию
router.post('/addCar/:carid/:modelid', passport.authenticate('jwt', {session: false}), ctrlAdd.createMod);
// Добавить агрегат
router.post('/addCar/:carid/:modelid/:unitid', passport.authenticate('jwt', {session: false}), ctrlAdd.createUnit);
// Добавить раздел
router.post('/addCar/:carid/:modelid/:unitid/:detailid', passport.authenticate('jwt', {session: false}), ctrlAdd.createDetail);
// Добавить составляющие раздела
router.post('/addCar/:carid/:modelid/:unitid/:detailid/:itemid', passport.authenticate('jwt', {session: false}), ctrlAdd.createItem);
// Добавить составляющие раздела
router.post('/addCar/:carid/:modelid/:unitid/:detailid/:itemid/:anid', passport.authenticate('jwt', {session: false}), ctrlAdd.createDetailItems);

module.exports = router;