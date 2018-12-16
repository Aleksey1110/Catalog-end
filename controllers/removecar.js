const mongoose = require('mongoose');
const Car = mongoose.model('Car');

// Функция отправки ответа
const sendJsonResponse = function (res, status, content) {
    res.status(status);
    res.json(content);
};

// Удалить марку
module.exports.removeMark = function(req, res) {
    let carid = req.params.carid;
    console.log(carid);
    if (carid) {
        Car
            .findByIdAndRemove(carid)
            .exec(
                function(err, car) {
                    if (err) {
                        sendJsonResponse(res, 404, err);
                        return;
                    }
                    sendJsonResponse(res, 204, null);
                }
            );
    } else {
        sendJsonResponse(res, 404, {
            "message": "Car not found"
        });
    }
};

// Удалить модель
module.exports.removeModel = function(req, res) {
    if (!req.params.carid || !req.params.modelid) {
        sendJsonResponse(res, 404, {
            "message": "Not found"
        });
        return;
    }
    Car
        .findById(req.params.carid)
        .exec(
            function(err, car) {
                if (!car) {
                    sendJsonResponse(res, 404, {
                        "message": "car not found"
                    });
                    return;
                } else if (err) {
                    sendJsonResponse(res, 404, err);
                }
                if (!car.models.id(req.params.modelid)) {
                    sendJsonResponse(res, 404, {
                        "message": "modelid not found"
                    });
                } else {
                    car.models.id(req.params.modelid).remove();
                    car.save(function(err) {
                        if (err) {
                            sendJsonResponse(res, 404, err);
                        } else {
                            sendJsonResponse(res, 204, null);
                        }
                    });
                }
            }
        );
};