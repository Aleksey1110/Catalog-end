const mongoose = require('mongoose');
const Car = mongoose.model('Car');

// Функция отправки ответа
const sendJsonResponse = function (res, status, content) {
    res.status(status);
    res.json(content);
};

// Добавить марку
module.exports.createMark = function (req, res) {
    Car.create({
        markName: req.body.markName
    }, function (err, mark) {
        if (err) {
            sendJsonResponse(res, 404, err);
        }
        console.log(mark);
        sendJsonResponse(res, 200, mark);
    });
};

//Функция добавления и сохранения для модели
const doAddModel = function (req, res, car) {
    if (!car) {
        sendJsonResponse(res, 404, {
            "message": "Car not found"
        });
    }
    car.models.push({
        modelsName: req.body.modelsName
    });
    car.save(function (err, car) {
        if (err) {
            sendJsonResponse(res, 404, err);
        }
        let mark = car.models[car.models.length - 1];
        sendJsonResponse(res, 200, mark);
    });
}

// Добавить модель
module.exports.createModel = function (req, res) {
    let carid = req.params.carid;
    if (carid) {
        Car
            .findById(carid)
            .exec(
                function (err, car) {
                    if (err) {
                        sendJsonResponse(res, 404, err);
                    }
                    doAddModel(req, res, car);
                }
            );
    } else {
        sendJsonResponse(res, 404, {
            "message": "Not found, car required"
        });
    }
};

//Функция добавления и сохранения для модификации
const doAddModification = function (req, res, modifications, car) {
    if (!modifications) {
        sendJsonResponse(res, 404, {
            "message": "Car not found"
        });
    }
    modifications.modifications.push({
        modificationName: req.body.modificationName
    });
    car.save(function (err, car) {
        if (err) {
            sendJsonResponse(res, 404, err);
        }
        let modification = modifications.modifications[modifications.modifications.length - 1];
        sendJsonResponse(res, 200, modification);
    });
}

// Добавить модификацию
module.exports.createMod = function (req, res) {
    let carid = req.params.carid;
    if (carid) {
        Car
            .findById(carid)
            .exec(
                function (err, car) {
                    if (err) {
                        sendJsonResponse(res, 404, err);
                    }
                    let modifications = car.models.id(req.params.modelid);
                    doAddModification(req, res, modifications, car);
                }
            );
    } else {
        sendJsonResponse(res, 404, {
            "message": "Not found, car required"
        });
    }
};