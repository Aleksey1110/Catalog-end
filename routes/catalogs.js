const express = require('express');
const router = express.Router();
const Car = require('../models/catalogs');

// Папки контроллеров
const ctrlCatalog = require('../controllers/catalog');
const ctrlAbout = require('../controllers/about');
const ctrlPost = require('../controllers/post');

// Http контроллеров
router.get('/catalog', ctrlCatalog.catalog);
router.get('/about', ctrlAbout.about);
router.post('/post', ctrlPost.post);

module.exports = router;