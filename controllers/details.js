const mongoose = require('mongoose');
const Car = mongoose.model('Car');

// Функция отправки ответа
const sendJsonResponse = function (res, status, content) {
    res.status(status);
    res.json(content);
};

// Получить список всех авто
module.exports.listAll = function (req, res) {
    Car
        .find()
        .exec((err, car) => {
            if (!car) {
                sendJsonResponse(res, 404, {
                    "message": "There are no cars in db"
                });
                return;
            } else if (err) {
                sendJsonResponse(res, 404, err);
            } else {
                sendJsonResponse(res, 200, car);
            };
        });
};

// Получить список всех марок
module.exports.list = function (req, res) {
    Car
        .find()
        .select('-models')
        .exec((err, car) => {
            if (!car) {
                sendJsonResponse(res, 404, {
                    "message": "There are no cars in db"
                });
                return;
            } else if (err) {
                sendJsonResponse(res, 404, err);
            } else {
                sendJsonResponse(res, 200, car);
            };
        });
};

// Получить список всех моделей 
module.exports.markModelList = function (req, res) {
    if (req.params && req.params.carid) {
        Car
            .findById(req.params.carid)
            .select('models')
            .exec((err, carModel) => {
                if (!carModel) {
                    sendJsonResponse(res, 404, {
                        "message": "Car not found"
                    });
                    return;
                } else if (err) {
                    sendJsonResponse(res, 404, err);
                } else {
                    let markMod = carModel.models;
                    sendJsonResponse(res, 200, markMod);
                }
            });
    } else {
        sendJsonResponse(res, 404, {
            "message": "No car in request"
        });
        return;
    };
};

// Получить список всех модификаций
module.exports.modelModificationList = function (req, res) {
    if (req.params && req.params.carid && req.params.modelid) {
        Car
            .findById(req.params.carid)
            .select('models')
            .exec(
                function (err, car) {
                    if (!car) {
                        sendJsonResponse(res, 404, {
                            "message": "Car not found"
                        });
                        return;
                    } else if (err) {
                        sendJsonResponse(res, 404, err);
                        return;
                    } else {
                        let modelModifications = car.models.id(req.params.modelid);
                        let modelModification = modelModifications.modifications;
                        sendJsonResponse(res, 200, modelModification);
                    };
                }
            );
    } else {
        sendJsonResponse(res, 404, {
            "message": "Not found, carid and modelid are required"
        });
    };
};

// Получить список всех агрегатов
module.exports.partsList = function (req, res) {
    if (req.params && req.params.carid && req.params.modelid && req.params.modifid) {
        Car
            .findById(req.params.carid)
            .select('models')
            .exec(
                function (err, car) {
                    if (!car) {
                        sendJsonResponse(res, 404, {
                            "message": "Car not found"
                        });
                        return;
                    } else if (err) {
                        sendJsonResponse(res, 404, err);
                        return;
                    } else {
                        let modelModifications = car.models.id(req.params.modelid);
                        let modifications = modelModifications.modifications.id(req.params.modifid);
                        let modification = modifications.parts;
                        sendJsonResponse(res, 200, modification);
                    }
                }
            );
    } else {
        sendJsonResponse(res, 404, {
            "message": "Not found, carid, modelid, modifid are required"
        });
    }
};

// Получить список всех деталей
module.exports.detailItems = function (req, res) {
    if (req.params && req.params.carid && req.params.modelid && req.params.modifid && req.params.unitid) {
        Car
            .findById(req.params.carid)
            .select('models')
            .exec(
                function (err, car) {
                    if (!car) {
                        sendJsonResponse(res, 404, {
                            "message": "Car not found"
                        });
                        return;
                    } else if (err) {
                        sendJsonResponse(res, 404, err);
                        return;
                    } else {
                        let modelModifications = car.models.id(req.params.modelid);
                        let modifications = modelModifications.modifications.id(req.params.modifid);
                        let details = modifications.parts.id(req.params.unitid);
                        let detailsItem = details.details;
                        sendJsonResponse(res, 200, detailsItem);
                    }
                }
            );
    } else {
        sendJsonResponse(res, 404, {
            "message": "Not found, carid, modelid, modifid, unitid are required"
        });
    }
};

// Получить список составляющих детали 
module.exports.itemList = function (req, res) {
    if (req.params && req.params.carid && req.params.modelid && req.params.modifid && req.params.unitid && req.params.itemid) {
        Car
            .findById(req.params.carid)
            .select('models')
            .exec(
                function (err, car) {
                    if (!car) {
                        sendJsonResponse(res, 404, {
                            "message": "Car not found"
                        });
                        return;
                    } else if (err) {
                        sendJsonResponse(res, 404, err);
                        return;
                    } else {
                        let modelModifications = car.models.id(req.params.modelid);
                        let modifications = modelModifications.modifications.id(req.params.modifid);
                        let details = modifications.parts.id(req.params.unitid);
                        let items = details.details.id(req.params.itemid);
                        let item = items.detailItems;
                        sendJsonResponse(res, 200, item);
                    }
                }
            );
    } else {
        sendJsonResponse(res, 404, {
            "message": "Not found, carid, modelid, modifid, unitid, itemid are required"
        });
    }
};

// Получить список составляющих детали 
module.exports.analogueList = function (req, res) {
    if (req.params && req.params.carid && req.params.modelid && req.params.modifid && req.params.unitid && req.params.itemid && req.params.anid) {
        Car
            .findById(req.params.carid)
            .select('models')
            .exec(
                function (err, car) {
                    if (!car) {
                        sendJsonResponse(res, 404, {
                            "message": "Car not found"
                        });
                        return;
                    } else if (err) {
                        sendJsonResponse(res, 404, err);
                        return;
                    } else {
                        let modelModifications = car.models.id(req.params.modelid);
                        let modifications = modelModifications.modifications.id(req.params.modifid);
                        let details = modifications.parts.id(req.params.unitid);
                        let items = details.details.id(req.params.itemid);
                        let item = items.detailItems.id(req.params.anid);
                        let analogue = item.analogueNumber;
                        sendJsonResponse(res, 200, analogue);
                    }
                }
            );
    } else {
        sendJsonResponse(res, 404, {
            "message": "Not found, carid, modelid, modifid, unitid, itemid, anid are required"
        });
    }
};
