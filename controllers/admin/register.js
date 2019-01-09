const mongoose = require('mongoose');
const User = require('../../models/user');
const jwt = require('jsonwebtoken');

// Функция отправки ответа
const sendJsonResponse = function (res, status, content) {
    res.status(status);
    res.json(content);
};

module.exports.verifyToken = function (req, res, next) {
    if (!req.headers.authorization) {
        return sendJsonResponse(res, 401, {
            "message": "Unauthorized request"
        });
    }
    const token = req.headers.authorization.split(' ')[1];
    if (token === 'null') {
        return sendJsonResponse(res, 401, {
            "message": "Unauthorized request"
        });
    }
    const payload = jwt.verify(token, 'potapok');
    if (!payload) {
        return sendJsonResponse(res, 401, {
            "message": "Unauthorized request"
        });
    }
    req.userId = payload.subject;
    next();
}

module.exports.createAdmin = function (req, res) {
    let userData = req.body;
    let user = new User(userData);
    user.save((err, registeredUser) => {
        if (err) {
            sendJsonResponse(res, 404, err);
        } else {
            let payload = {
                subject: registeredUser._id
            };
            let token = jwt.sign(payload, 'potapok');
            res.status(200).send({
                token
            });
        }
    });
};