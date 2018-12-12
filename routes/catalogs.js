const express = require('express');
const router = express.Router();
const Car = require('../models/catalogs');

// Папки контроллеров
const ctrlCatalog = require('../controllers/catalog');
const ctrlAbout = require('../controllers/about');
const ctrlPost = require('../controllers/post');

// Http контроллеров
// Получить страницу каталога
router.get('/catalog', ctrlCatalog.catalog);
// Получить страницу "О нас"
router.get('/about', ctrlAbout.about);
// Тестовая страница добавления авто
router.post('/post', ctrlPost.post);

module.exports = router;