const express = require('express');
const router = express.Router();
const Car = require('../models/catalogs');

// Папка контроллеров
const ctrlDetails = require('../controllers/details');

// Http контроллеры
router.get('/api', ctrlDetails.list);
router.get('/api/:carid', ctrlDetails.markModelList);
router.get('/api/:carid/:modelid', ctrlDetails.modelModificationList);
router.get('/api/:carid/:modelid/:modifid', ctrlDetails.partsList);
router.get('/api/:carid/:modelid/:modifid/:unitid', ctrlDetails.detailItems);
router.get('/api/:carid/:modelid/:modifid/:unitid/:itemid', ctrlDetails.itemList);

module.exports = router;