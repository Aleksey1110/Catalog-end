const mongoose = require('mongoose');
const User = require('../../models/user');

// Функция отправки ответа
const sendJsonResponse = function (res, status, content) {
    res.status(status);
    res.json(content);
};

module.exports.loginAdmin = function (req, res) {
    let userData = req.body;

    User.findOne({
        email: userData.email
    }, (err, user) => {
        if (err) {
            sendJsonResponse(res, 404, err);
        } else {
            if (!user) {
                sendJsonResponse(res, 401, {
                    "message": "Invalid email"
                });
            } else if (user.password !== userData.password) {
                sendJsonResponse(res, 401, {
                    "message": "Invalid password"
                });
            } else {
                sendJsonResponse(res, 200, user);
            }
        }
    });
};