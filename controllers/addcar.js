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
};

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
const doAddModification = function (req, res, car) {
    if (!car) {
        sendJsonResponse(res, 404, {
            "message": "Car not found"
        });
    }
    let modifications = car.models.id(req.params.modelid);
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
};

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
                    doAddModification(req, res, car);
                }
            );
    } else {
        sendJsonResponse(res, 404, {
            "message": "Not found, car required"
        });
    }
};

//Функция добавления и сохранения для агрегата
const doAddUnit = function (req, res, car) {
    if (!car) {
        sendJsonResponse(res, 404, {
            "message": "Car not found"
        });
    }
    let modifications = car.models.id(req.params.modelid);
    let modification = modifications.modifications.id(req.params.unitid);
    modification.parts.push({
        unitName: req.body.unitName
    });
    car.save(function (err, car) {
        if (err) {
            sendJsonResponse(res, 404, err);
        }
        let unit = modification.parts[modification.parts.length - 1];
        sendJsonResponse(res, 200, unit);
    });
};

// Добавить агрегат
module.exports.createUnit = function (req, res) {
    let carid = req.params.carid;
    if (carid) {
        Car
            .findById(carid)
            .exec(
                function (err, car) {
                    if (err) {
                        sendJsonResponse(res, 404, err);
                    }
                    doAddUnit(req, res, car);
                }
            );
    } else {
        sendJsonResponse(res, 404, {
            "message": "Not found, car required"
        });
    }
};

//Функция добавления и сохранения для детали
const doAddDetail = function (req, res, car) {
    if (!car) {
        sendJsonResponse(res, 404, {
            "message": "Car not found"
        });
    }
    let modifications = car.models.id(req.params.modelid);
    let modification = modifications.modifications.id(req.params.unitid);
    let details = modification.parts.id(req.params.detailid);
    details.details.push({
        detailName: req.body.detailName
    });
    car.save(function (err, car) {
        if (err) {
            sendJsonResponse(res, 404, err);
        }
        let detail = details.details[details.details.length - 1];
        sendJsonResponse(res, 200, detail);
    });
};

// Добавить деталь
module.exports.createDetail = function (req, res) {
    let carid = req.params.carid;
    if (carid) {
        Car
            .findById(carid)
            .exec(
                function (err, car) {
                    if (err) {
                        sendJsonResponse(res, 404, err);
                    }
                    doAddDetail(req, res, car);
                }
            );
    } else {
        sendJsonResponse(res, 404, {
            "message": "Not found, car required"
        });
    }
};
//Функция добавления и сохранения для составляющих детали
const doAddItem = function (req, res, car) {
    if (!car) {
        sendJsonResponse(res, 404, {
            "message": "Car not found"
        });
    }
    let modifications = car.models.id(req.params.modelid);
    let modification = modifications.modifications.id(req.params.unitid);
    let details = modification.parts.id(req.params.detailid);
    let items = details.details.id(req.params.itemid);
    items.detailItems.push({
        originalNumber: req.body.originalNumber.split(','),        
        note: req.body.note,
        picture: req.body.picture,
        analogueNumber: req.body.analogueNumber
    });
    car.save(function (err, car) {
        if (err) {
            sendJsonResponse(res, 404, err);
        } else {
            let item = items.detailItems[items.detailItems.length - 1];
            sendJsonResponse(res, 200, item);
        }

    });
};

// Добавить составляющие детали
module.exports.createItem = function (req, res) {
    let carid = req.params.carid;
    if (carid) {
        Car
            .findById(carid)
            .exec(
                function (err, car) {
                    if (err) {
                        sendJsonResponse(res, 404, err);
                    }
                    doAddItem(req, res, car);
                }
            );
    } else {
        sendJsonResponse(res, 404, {
            "message": "Not found, car required"
        });
    }
};