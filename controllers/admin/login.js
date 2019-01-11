const User = require('../../models/user');
const jwt = require('jsonwebtoken');
const config = require('../../config/database');

// Функция отправки ответа
const sendJsonResponse = function (res, status, content) {
    res.status(status);
    res.json(content);
};

module.exports.loginAdmin = function (req, res) {
    const username = req.body.email;
    const password = req.body.password;

    User.getUserByUsername(username, (err, user) => {
        if (err) throw err;
        if (!user) {
            sendJsonResponse(res, 404, {
                "message": "User not found"
            });
        } else {
            User.comparePassword(password, user.password, (err, isMatch) => {
                if (err) throw err;
                if (isMatch) {
                    const token = jwt.sign(user.toJSON(), config.dbURI.secret, {
                        expiresIn: 604800
                    });
                    res.json({
                        success: true,
                        token: token,
                        user: {
                            id: user._id,
                            email: user.email
                        }
                    });
                } else {
                    sendJsonResponse(res, 404, {
                        "message": "Wrong password"
                    });
                }
            });
        }


    });
};