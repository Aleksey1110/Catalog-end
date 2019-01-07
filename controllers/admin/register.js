const mongoose = require('mongoose');
const User = require('../../models/user');

// Функция отправки ответа
const sendJsonResponse = function (res, status, content) {
    res.status(status);
    res.json(content);
};

module.exports.createAdmin = function (req, res) {
    let userData = req.body;
    let user = new User(userData);
    user.save((err, registeredUser) => {
        if (err) {
            sendJsonResponse(res, 404, err);
        } else {
            sendJsonResponse(res, 200, registeredUser);
        }
    });
};