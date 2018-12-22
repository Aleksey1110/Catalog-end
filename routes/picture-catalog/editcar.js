const express = require('express');
const router = express.Router();

// Папка контроллера
const ctrlEdit = require('../../controllers/picture-catalog/editcar');

// Редактировать название марки
router.put('/editcar/:carid', ctrlEdit.editMark);
// Редактировать название модели
router.put('/editcar/:carid/:modelid', ctrlEdit.editModel);
// Редактировать название модификации
router.put('/editcar/:carid/:modelid/:modifid', ctrlEdit.editModification);
// Редактировать название агрегата
router.put('/editcar/:carid/:modelid/:modifid/:unitid', ctrlEdit.editUnit);
// Редактировать раздел
router.put('/editcar/:carid/:modelid/:modifid/:unitid/:detailid', ctrlEdit.editDetail);
// Редактировать составляющие раздела
router.put('/editcar/:carid/:modelid/:modifid/:unitid/:detailid/:itemid', ctrlEdit.editItem);
// Редактировать детали раздела
router.put('/editcar/:carid/:modelid/:modifid/:unitid/:detailid/:itemid/:anid', ctrlEdit.editDetailItem);


module.exports = router;