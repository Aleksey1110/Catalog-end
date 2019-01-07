const express = require('express');
const router = express.Router();

// Папка контроллера
const ctrlAdmin = require('../../controllers/admin/register');

router.post('/', ctrlAdmin.createAdmin)

module.exports = router;