const express = require('express');
const router = express.Router();
const Mark = require('../../models/picture-catalog');

const ctrlMark = require('../../controllers/picture-catalog/main');

// Получить список марок
router.get('/piccat', ctrlMark.list);
// Получить модели машин
router.get('/piccat/:carid', ctrlMark.markModelList);
// Получить модификации машин
router.get('/piccat/:carid/:modelid', ctrlMark.modelModificationList);
// Получить агрегаты машины
router.get('/piccat/:carid/:modelid/:modifid', ctrlMark.partsList);
// Получить детали машины
router.get('/piccat/:carid/:modelid/:modifid/:unitid', ctrlMark.detailItems);
// Получить составляющие детали машины
router.get('/piccat/:carid/:modelid/:modifid/:unitid/:itemid', ctrlMark.itemList);
// // Получить конкретную деталь
// router.get('/piccat/:carid/:modelid/:modifid/:unitid/:itemid/:anid', ctrlMark.analogueList);

module.exports = router;