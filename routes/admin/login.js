const express = require('express');
const router = express.Router();

// Папка контроллера
const ctrlAdmin = require('../../controllers/admin/login');

router.post('/', ctrlAdmin.loginAdmin)

module.exports = router;