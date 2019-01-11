const User = require('../../models/user');

// Функция отправки ответа
const sendJsonResponse = function (res, status, content) {
    res.status(status);
    res.json(content);
};

module.exports.createAdmin = function (req, res) {
    let userData = req.body;
    let newUser = new User(userData);
    User.addUser(newUser, (err, user) => {
        if (err) {
            sendJsonResponse(res, 404, {
                "message": "Failed to register user"
            });
        } else {
            sendJsonResponse(res, 200, {
                "message": "User registered"
            });
        }
    });
};