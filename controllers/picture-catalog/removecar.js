const mongoose = require('mongoose');
const Mark = mongoose.model('Mark');

// Функция отправки ответа
const sendJsonResponse = function (res, status, content) {
    res.status(status);
    res.json(content);
};

// Удалить марку
module.exports.removeMark = function (req, res) {
    let carid = req.params.carid;
    console.log(carid);
    if (carid) {
        Mark
            .findByIdAndRemove(carid)
            .exec(
                function (err, car) {
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
module.exports.removeModel = function (req, res) {
    if (!req.params.carid || !req.params.modelid) {
        sendJsonResponse(res, 404, {
            "message": "Not found"
        });
        return;
    }
    Mark
        .findById(req.params.carid)
        .exec(
            function (err, car) {
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
                    car.save(function (err) {
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

// Удалить модификацию
module.exports.removeModification = function (req, res) {
    if (!req.params.carid || !req.params.modelid || !req.params.modifid) {
        sendJsonResponse(res, 404, {
            "message": "Not found"
        });
        return;
    }
    Mark
        .findById(req.params.carid)
        .exec(
            function (err, car) {
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
                    let model = car.models.id(req.params.modelid);
                    model.modifications.id(req.params.modifid).remove();
                    car.save(function (err) {
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

// Удалить агрегат
module.exports.removeUnit = function (req, res) {
    if (!req.params.carid || !req.params.modelid || !req.params.modifid || !req.params.unitid) {
        sendJsonResponse(res, 404, {
            "message": "Not found"
        });
        return;
    }
    Mark
        .findById(req.params.carid)
        .exec(
            function (err, car) {
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
                    let model = car.models.id(req.params.modelid);
                    let modification = model.modifications.id(req.params.modifid);
                    if (!modification) {
                        sendJsonResponse(res, 404, {
                            "message": "Modification not found"
                        });
                    } else {
                        modification.units.id(req.params.unitid).remove();
                        car.save(function (err) {
                            if (err) {
                                sendJsonResponse(res, 404, err);
                            } else {
                                sendJsonResponse(res, 204, null);
                            }
                        });
                    }

                }
            }
        );
};

// Удалить деталь
module.exports.removeDetail = function (req, res) {
    if (!req.params.carid || !req.params.modelid || !req.params.modifid || !req.params.unitid || !req.params.detailid) {
        sendJsonResponse(res, 404, {
            "message": "Not found"
        });
        return;
    }
    Mark
        .findById(req.params.carid)
        .exec(
            function (err, car) {
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
                    let model = car.models.id(req.params.modelid);
                    let modification = model.modifications.id(req.params.modifid);
                    if (!modification) {
                        sendJsonResponse(res, 404, {
                            "message": "Modification not found"
                        });
                    } else {
                        let unit = modification.units.id(req.params.unitid);
                        if (!unit) {
                            sendJsonResponse(res, 404, {
                                "message": "Unit not found"
                            });
                        } else {
                            unit.details.id(req.params.detailid).remove();
                            car.save(function (err) {
                                if (err) {
                                    sendJsonResponse(res, 404, err);
                                } else {
                                    sendJsonResponse(res, 204, null);
                                }
                            });
                        }

                    }
                }
            }
        );
};

// Удалить составляющие детали
module.exports.removeItem = function (req, res) {
    if (!req.params.carid || !req.params.modelid || !req.params.modifid || !req.params.unitid || !req.params.detailid || !req.params.itemid) {
        sendJsonResponse(res, 404, {
            "message": "Not found"
        });
        return;
    }
    Mark
        .findById(req.params.carid)
        .exec(
            function (err, car) {
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
                    let model = car.models.id(req.params.modelid);
                    let modification = model.modifications.id(req.params.modifid);
                    if (!modification) {
                        sendJsonResponse(res, 404, {
                            "message": "Modification not found"
                        });
                    } else {
                        let unit = modification.units.id(req.params.unitid);
                        if (!unit) {
                            sendJsonResponse(res, 404, {
                                "message": "Unit not found"
                            });
                        } else {
                            let detail = unit.details.id(req.params.detailid);
                            if (!detail) {
                                sendJsonResponse(res, 404, {
                                    "message": "Detail not found"
                                });
                            } else {
                                detail.detailItems.id(req.params.itemid).remove();
                                car.save(function (err) {
                                    if (err) {
                                        sendJsonResponse(res, 404, err);
                                    } else {
                                        sendJsonResponse(res, 204, null);
                                    }
                                });
                            }

                        }

                    }
                }
            }
        );
};
