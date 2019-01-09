const express = require('express');
const router = express.Router();

const ctrlRemove = require('../controllers/removecar');
const token  = require('../controllers/admin/register');

// Удалить марку
router.delete('/removecar/:carid', token.verifyToken, ctrlRemove.removeMark);
// Удалить модель
router.delete('/removecar/:carid/:modelid', token.verifyToken, ctrlRemove.removeModel);
// Удалить модификацию
router.delete('/removecar/:carid/:modelid/:modifid', token.verifyToken, ctrlRemove.removeModification);
// Удалить агрегат
router.delete('/removecar/:carid/:modelid/:modifid/:unitid', token.verifyToken, ctrlRemove.removeUnit);
// Удалить деталь
router.delete('/removecar/:carid/:modelid/:modifid/:unitid/:detailid', token.verifyToken, ctrlRemove.removeDetail);
// Удалить составляющие детали
router.delete('/removecar/:carid/:modelid/:modifid/:unitid/:detailid/:itemid', token.verifyToken, ctrlRemove.removeItem);
// Удалить аналог
router.delete('/removecar/:carid/:modelid/:modifid/:unitid/:detailid/:itemid/:anid', token.verifyToken, ctrlRemove.removeAnalogue);

module.exports = router;