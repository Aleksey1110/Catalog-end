const express = require('express');
const router = express.Router();

const ctrlRemove = require('../../controllers/picture-catalog/removecar');

// Удалить марку
router.delete('/removecar/:carid', ctrlRemove.removeMark);
// Удалить модель
router.delete('/removecar/:carid/:modelid', ctrlRemove.removeModel);
// Удалить модификацию
router.delete('/removecar/:carid/:modelid/:modifid', ctrlRemove.removeModification);
// Удалить агрегат
router.delete('/removecar/:carid/:modelid/:modifid/:unitid', ctrlRemove.removeUnit);
// Удалить раздел
router.delete('/removecar/:carid/:modelid/:modifid/:unitid/:detailid', ctrlRemove.removeDetail);
// Удалить составляющие раздела
router.delete('/removecar/:carid/:modelid/:modifid/:unitid/:detailid/:itemid', ctrlRemove.removeItem);

module.exports = router;