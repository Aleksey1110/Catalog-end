const express = require('express');
const router = express.Router();
const passport = require('passport');

// Папка контроллера
const ctrlEdit = require('../controllers/editcar');
const token  = require('../controllers/admin/register');

// Редактировать название марки
router.put('/editcar/:carid', passport.authenticate('jwt', {session: false}), ctrlEdit.editMark);
// Редактировать название модели
router.put('/editcar/:carid/:modelid', passport.authenticate('jwt', {session: false}), ctrlEdit.editModel);
// Редактировать название модификации
router.put('/editcar/:carid/:modelid/:modifid', passport.authenticate('jwt', {session: false}), ctrlEdit.editModification);
// Редактировать название агрегата
router.put('/editcar/:carid/:modelid/:modifid/:unitid', passport.authenticate('jwt', {session: false}), ctrlEdit.editUnit);
// Редактировать название детали
router.put('/editcar/:carid/:modelid/:modifid/:unitid/:detailid', passport.authenticate('jwt', {session: false}), ctrlEdit.editDetail);
// Редактировать составляющие детали
router.put('/editcar/:carid/:modelid/:modifid/:unitid/:detailid/:itemid', passport.authenticate('jwt', {session: false}), ctrlEdit.editItem);
// Редактировать аналог
router.put('/editcar/:carid/:modelid/:modifid/:unitid/:detailid/:itemid/:anid', passport.authenticate('jwt', {session: false}), ctrlEdit.editAnalogue);

module.exports = router;