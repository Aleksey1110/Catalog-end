const mongoose = require('mongoose');

module.exports.catalog = function(req, res, next) {
    res.send('Catalog page');
};