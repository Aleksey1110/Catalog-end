const express = require('express');
const router = express.Router();
const passport = require('passport');

const ctrlRemove = require('../../controllers/picture-catalog/removecar');

// Удалить марку
router.delete('/removecar/:carid', passport.authenticate('jwt', {session: false}), ctrlRemove.removeMark);
// Удалить модель
router.delete('/removecar/:carid/:modelid', passport.authenticate('jwt', {session: false}), ctrlRemove.removeModel);
// Удалить модификацию
router.delete('/removecar/:carid/:modelid/:modifid', passport.authenticate('jwt', {session: false}), ctrlRemove.removeModification);
// Удалить агрегат
router.delete('/removecar/:carid/:modelid/:modifid/:unitid', passport.authenticate('jwt', {session: false}), ctrlRemove.removeUnit);
// Удалить раздел
router.delete('/removecar/:carid/:modelid/:modifid/:unitid/:detailid', passport.authenticate('jwt', {session: false}), ctrlRemove.removeDetail);
// Удалить составляющие раздела
router.delete('/removecar/:carid/:modelid/:modifid/:unitid/:detailid/:itemid', passport.authenticate('jwt', {session: false}), ctrlRemove.removeItem);
// Удалить детали раздела
router.delete('/removecar/:carid/:modelid/:modifid/:unitid/:detailid/:itemid/:anid', passport.authenticate('jwt', {session: false}), ctrlRemove.removeDetailItem);


module.exports = router;