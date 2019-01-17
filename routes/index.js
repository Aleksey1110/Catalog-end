const express = require('express');
const router = express.Router();
const Car = require('../models/catalogs');

// Папка контроллеров
const ctrlDetails = require('../controllers/details');

// Http контроллеры
// Получить марки машин
router.get('/', ctrlDetails.list);
// Получить модели машин
router.get('/:carid', ctrlDetails.markModelList);
// Получить модификации машин
router.get('/:carid/:modelid', ctrlDetails.modelModificationList);
// Получить агрегаты машины
router.get('/:carid/:modelid/:modifid', ctrlDetails.partsList);
// Получить детали машины
router.get('/:carid/:modelid/:modifid/:unitid', ctrlDetails.detailItems);
// Получить составляющие детали машины
router.get('/:carid/:modelid/:modifid/:unitid/:itemid', ctrlDetails.itemList);
// Получить аналоги
router.get('/:carid/:modelid/:modifid/:unitid/:itemid/:anid', ctrlDetails.analogueList);

module.exports = router;