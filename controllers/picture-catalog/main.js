const mongoose = require('mongoose');
const Mark = mongoose.model('Mark');

// Функция отправки ответа
const sendJsonResponse = function (res, status, content) {
    res.status(status);
    res.json(content);
};

// Получить список марок
module.exports.list = function (req, res) {
    Mark
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
        Mark
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
        Mark
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
        Mark
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
                        let modification = modifications.units;
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

// Получить список разделов
module.exports.detailItems = function (req, res) {
    if (req.params && req.params.carid && req.params.modelid && req.params.modifid && req.params.unitid) {
        Mark
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
                        let details = modifications.units.id(req.params.unitid);
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

// Получить список составляющих разделов 
module.exports.itemList = function (req, res) {
    if (req.params && req.params.carid && req.params.modelid && req.params.modifid && req.params.unitid && req.params.itemid) {
        Mark
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
                        let details = modifications.units.id(req.params.unitid);
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

// Получить список составляющих разделов 
module.exports.analogueList = function (req, res) {
    if (req.params && req.params.carid && req.params.modelid && req.params.modifid && req.params.unitid && req.params.itemid && req.params.anid) {
        Mark
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
                        let details = modifications.units.id(req.params.unitid);
                        let items = details.details.id(req.params.itemid);
                        let item = items.detailItems.id(req.params.anid);
                        let detailItems = item.items;
                        sendJsonResponse(res, 200, detailItems);
                    }
                }
            );
    } else {
        sendJsonResponse(res, 404, {
            "message": "Not found, carid, modelid, modifid, unitid, itemid are required"
        });
    }
};
