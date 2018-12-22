const mongoose = require('mongoose');
const Mark = mongoose.model('Mark');

// Функция отправки ответа
const sendJsonResponse = function (res, status, content) {
    res.status(status);
    res.json(content);
};

// Добавить марку
module.exports.createMark = function (req, res) {
    Mark.create({
        markName: req.body.markName
    }, function (err, mark) {
        if (err) {
            sendJsonResponse(res, 404, err);
        }
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
        Mark
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
        Mark
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
    modification.units.push({
        unitName: req.body.unitName
    });
    car.save(function (err, car) {
        if (err) {
            sendJsonResponse(res, 404, err);
        }
        let unit = modification.units[modification.units.length - 1];
        sendJsonResponse(res, 200, unit);
    });
};

// Добавить агрегат
module.exports.createUnit = function (req, res) {
    let carid = req.params.carid;
    if (carid) {
        Mark
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

//Функция добавления и сохранения раздела
const doAddDetail = function (req, res, car) {
    if (!car) {
        sendJsonResponse(res, 404, {
            "message": "Car not found"
        });
    }
    let modifications = car.models.id(req.params.modelid);
    let modification = modifications.modifications.id(req.params.unitid);
    let details = modification.units.id(req.params.detailid);
    details.details.push({
        detailName: req.body.detailName,
        detailImage: req.body.detailImage
    });
    car.save(function (err, car) {
        if (err) {
            sendJsonResponse(res, 404, err);
        }
        let detail = details.details[details.details.length - 1];
        sendJsonResponse(res, 200, detail);
    });
};

// Добавить раздел
module.exports.createDetail = function (req, res) {
    let carid = req.params.carid;
    if (carid) {
        Mark
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

//Функция добавления и сохранения для составляющих раздела
const doAddItem = function (req, res, car) {
    if (!car) {
        sendJsonResponse(res, 404, {
            "message": "Car not found"
        });
    }
    let modifications = car.models.id(req.params.modelid);
    let modification = modifications.modifications.id(req.params.unitid);
    let details = modification.units.id(req.params.detailid);
    let items = details.details.id(req.params.itemid);
    items.detailItems.push({
        itemImage: req.body.itemImage
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

// Добавить составляющие раздела
module.exports.createItem = function (req, res) {
    let carid = req.params.carid;
    if (carid) {
        Mark
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

//Функция добавления и сохранения для составляющих раздела
const doAddDetailItem = function (req, res, car) {
    if (!car) {
        sendJsonResponse(res, 404, {
            "message": "Car not found"
        });
    }
    let modifications = car.models.id(req.params.modelid);
    let modification = modifications.modifications.id(req.params.unitid);
    let details = modification.units.id(req.params.detailid);
    let items = details.details.id(req.params.itemid);
    let detailItems = items.detailItems.id(req.params.anid);
    detailItems.items.push({
        itemNumber: req.body.itemNumber,        
        itemName: req.body.itemName,
        itemArticle: req.body.itemArticle.split(','),
        itemNote: req.body.itemNote
    });
    car.save(function (err, car) {
        if (err) {
            sendJsonResponse(res, 404, err);
        } else {
            let item = detailItems.items[detailItems.items.length - 1];
            sendJsonResponse(res, 200, item);
        }

    });
};

// Добавить составляющие раздела
module.exports.createDetailItems = function (req, res) {
    let carid = req.params.carid;
    if (carid) {
        Mark
            .findById(carid)
            .exec(
                function (err, car) {
                    if (err) {
                        sendJsonResponse(res, 404, err);
                    }
                    doAddDetailItem(req, res, car);
                }
            );
    } else {
        sendJsonResponse(res, 404, {
            "message": "Not found, car required"
        });
    }
};