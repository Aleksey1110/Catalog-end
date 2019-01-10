const express = require('express');
const router = express.Router();
const passport = require('passport');

const ctrlRemove = require('../controllers/removecar');
const token  = require('../controllers/admin/register');

// Удалить марку
router.delete('/removecar/:carid', passport.authenticate('jwt', {session: false}), ctrlRemove.removeMark);
// Удалить модель
router.delete('/removecar/:carid/:modelid', passport.authenticate('jwt', {session: false}), ctrlRemove.removeModel);
// Удалить модификацию
router.delete('/removecar/:carid/:modelid/:modifid', passport.authenticate('jwt', {session: false}), ctrlRemove.removeModification);
// Удалить агрегат
router.delete('/removecar/:carid/:modelid/:modifid/:unitid', passport.authenticate('jwt', {session: false}), ctrlRemove.removeUnit);
// Удалить деталь
router.delete('/removecar/:carid/:modelid/:modifid/:unitid/:detailid', passport.authenticate('jwt', {session: false}), ctrlRemove.removeDetail);
// Удалить составляющие детали
router.delete('/removecar/:carid/:modelid/:modifid/:unitid/:detailid/:itemid', passport.authenticate('jwt', {session: false}), ctrlRemove.removeItem);
// Удалить аналог
router.delete('/removecar/:carid/:modelid/:modifid/:unitid/:detailid/:itemid/:anid', passport.authenticate('jwt', {session: false}), ctrlRemove.removeAnalogue);

module.exports = router;