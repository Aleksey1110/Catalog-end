const express = require('express');
const router = express.Router();
const Car = require('../models/catalogs');

const ctrlRemove = require('../controllers/removecar');

// Удалить марку
router.delete('/removecar/:carid', ctrlRemove.removeMark);
// Удалить модель
router.delete('/removecar/:carid/:modelid', ctrlRemove.removeModel);
// Удалить модификацию
router.delete('/removecar/:carid/:modelid/:modifid', ctrlRemove.removeModification);
// Удалить агрегат
router.delete('/removecar/:carid/:modelid/:modifid/:unitid', ctrlRemove.removeUnit);
// Удалить деталь
router.delete('/removecar/:carid/:modelid/:modifid/:unitid/:detailid', ctrlRemove.removeDetail);
// Удалить составляющие детали
router.delete('/removecar/:carid/:modelid/:modifid/:unitid/:detailid/:itemid', ctrlRemove.removeItem);
// Удалить аналог
router.delete('/removecar/:carid/:modelid/:modifid/:unitid/:detailid/:itemid/:anid', ctrlRemove.removeAnalogue);

module.exports = router;