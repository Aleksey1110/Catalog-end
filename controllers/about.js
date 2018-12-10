const mongoose = require('mongoose');

module.exports.about = function(req, res, next) {
    res.send('About page');
};