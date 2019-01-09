const express = require('express');
const router = express.Router();

// Папка контроллера
const ctrlEdit = require('../../controllers/picture-catalog/editcar');
const token = require('../../controllers/admin/register');

// Редактировать название марки
router.put('/editcar/:carid', token.verifyToken, ctrlEdit.editMark);
// Редактировать название модели
router.put('/editcar/:carid/:modelid', token.verifyToken, ctrlEdit.editModel);
// Редактировать название модификации
router.put('/editcar/:carid/:modelid/:modifid', token.verifyToken, ctrlEdit.editModification);
// Редактировать название агрегата
router.put('/editcar/:carid/:modelid/:modifid/:unitid', token.verifyToken, ctrlEdit.editUnit);
// Редактировать раздел
router.put('/editcar/:carid/:modelid/:modifid/:unitid/:detailid', token.verifyToken, ctrlEdit.editDetail);
// Редактировать составляющие раздела
router.put('/editcar/:carid/:modelid/:modifid/:unitid/:detailid/:itemid', token.verifyToken, ctrlEdit.editItem);
// Редактировать детали раздела
router.put('/editcar/:carid/:modelid/:modifid/:unitid/:detailid/:itemid/:anid', token.verifyToken, ctrlEdit.editDetailItem);


module.exports = router;