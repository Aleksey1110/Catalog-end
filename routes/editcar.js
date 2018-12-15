const express = require('express');
const router = express.Router();
const Car = require('../models/catalogs');

// Папка контроллера
const ctrlEdit = require('../controllers/editcar');

// Редактировать название марки
router.put('/editcar/:carid', ctrlEdit.editMark);
// Редактировать название модели
router.put('/editcar/:carid/:modelid', ctrlEdit.editModel);
// Редактировать название модификации
router.put('/editcar/:carid/:modelid/:modifid', ctrlEdit.editModification);
// Редактировать название агрегата
router.put('/editcar/:carid/:modelid/:modifid/:unitid', ctrlEdit.editUnit);
// Редактировать название детали
router.put('/editcar/:carid/:modelid/:modifid/:unitid/:detailid', ctrlEdit.editDetail);
// Редактировать составляющие детали
router.put('/editcar/:carid/:modelid/:modifid/:unitid/:detailid/:itemid', ctrlEdit.editItem);
// Редактировать аналог
router.put('/editcar/:carid/:modelid/:modifid/:unitid/:detailid/:itemid/:anid', ctrlEdit.editAnalogue);

module.exports = router;