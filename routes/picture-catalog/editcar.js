const express = require('express');
const router = express.Router();
const passport = require('passport');

// Папка контроллера
const ctrlEdit = require('../../controllers/picture-catalog/editcar');

// Редактировать название марки
router.put('/editcar/:carid', passport.authenticate('jwt', {session: false}), ctrlEdit.editMark);
// Редактировать название модели
router.put('/editcar/:carid/:modelid', passport.authenticate('jwt', {session: false}), ctrlEdit.editModel);
// Редактировать название модификации
router.put('/editcar/:carid/:modelid/:modifid', passport.authenticate('jwt', {session: false}), ctrlEdit.editModification);
// Редактировать название агрегата
router.put('/editcar/:carid/:modelid/:modifid/:unitid', passport.authenticate('jwt', {session: false}), ctrlEdit.editUnit);
// Редактировать раздел
router.put('/editcar/:carid/:modelid/:modifid/:unitid/:detailid', passport.authenticate('jwt', {session: false}), ctrlEdit.editDetail);
// Редактировать составляющие раздела
router.put('/editcar/:carid/:modelid/:modifid/:unitid/:detailid/:itemid', passport.authenticate('jwt', {session: false}), ctrlEdit.editItem);
// Редактировать детали раздела
router.put('/editcar/:carid/:modelid/:modifid/:unitid/:detailid/:itemid/:anid', passport.authenticate('jwt', {session: false}), ctrlEdit.editDetailItem);


module.exports = router;