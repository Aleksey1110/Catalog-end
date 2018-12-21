const mongoose = require('mongoose');
const Mark = mongoose.model('Mark');

// Функция отправки ответа
const sendJsonResponse = function (res, status, content) {
    res.status(status);
    res.json(content);
};

// Редактировать название марки
module.exports.editMark = function (req, res) {
    if (!req.params.carid) {
        sendJsonResponse(res, 404, {
            "message": "Not found, car is required"
        });
        return;
    }
    Mark
        .findById(req.params.carid)
        .select('markName')
        .exec(
            function (err, mark) {
                if (!mark) {
                    sendJsonResponse(res, 404, {
                        "message": "mark not found"
                    });
                    return;
                } else if (err) {
                    sendJsonResponse(res, 404, err);
                    return;
                }
                mark.markName = req.body.markName;
                mark.save(function (err, mark) {
                    if (err) {
                        sendJsonResponse(res, 404, err);
                    } else {
                        sendJsonResponse(res, 200, mark);
                    }
                })
            }
        );
};

// Редактировать модель автомобиля
module.exports.editModel = function (req, res) {
    if (!req.params.carid || !req.params.modelid) {
        sendJsonResponse(res, 404, {
            "message": "Not found, carid and modelid are required"
        });
        return;
    }
    Mark
        .findById(req.params.carid)
        .exec(
            function (err, mark) {
                if (!mark) {
                    sendJsonResponse(res, 404, {
                        "message": "Mark not found"
                    });
                    return;
                } else if (err) {
                    sendJsonResponse(res, 404, err);
                    return;
                }
                model = mark.models.id(req.params.modelid);
                if (!model) {
                    sendJsonResponse(res, 404, {
                        "message": "Model not found"
                    });
                } else {
                    model.modelsName = req.body.modelsName;
                    mark.save(function (err, mark) {
                        if (err) {
                            sendJsonResponse(res, 404, err);
                        } else {
                            sendJsonResponse(res, 200, model);
                        }
                    });
                }
            }
        );
};

// Редактировать модификацию автомобиля
module.exports.editModification = function (req, res) {
    if (!req.params.carid || !req.params.modelid || !req.params.modifid) {
        sendJsonResponse(res, 404, {
            "message": "Not found, carid and modelid are required"
        });
        return;
    }
    Mark
        .findById(req.params.carid)
        .exec(
            function (err, mark) {
                if (!mark) {
                    sendJsonResponse(res, 404, {
                        "message": "Mark not found"
                    });
                    return;
                } else if (err) {
                    sendJsonResponse(res, 404, err);
                    return;
                }
                let model = mark.models.id(req.params.modelid);
                if (!model) {
                    sendJsonResponse(res, 404, {
                        "message": "Model not found"
                    });
                } else {
                    let modification = model.modifications.id(req.params.modifid);
                    if (!modification) {
                        sendJsonResponse(res, 404, {
                            "message": "Modification not found"
                        });
                    } else {
                        modification.modificationName = req.body.modificationName;
                        mark.save(function (err, mark) {
                            if (err) {
                                sendJsonResponse(res, 404, err);
                            } else {
                                sendJsonResponse(res, 200, modification);
                            }
                        });
                    }

                }
            }
        );
};

// Редактировать агарегат автомобиля
module.exports.editUnit = function (req, res) {
    if (!req.params.carid || !req.params.modelid || !req.params.modifid || !req.params.unitid) {
        sendJsonResponse(res, 404, {
            "message": "Not found, carid and modelid are required"
        });
        return;
    }
    Mark
        .findById(req.params.carid)
        .exec(
            function (err, mark) {
                if (!mark) {
                    sendJsonResponse(res, 404, {
                        "message": "Mark not found"
                    });
                    return;
                } else if (err) {
                    sendJsonResponse(res, 404, err);
                    return;
                }
                let model = mark.models.id(req.params.modelid);
                if (!model) {
                    sendJsonResponse(res, 404, {
                        "message": "Model not found"
                    });
                } else {
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
                            unit.unitName = req.body.unitName;
                            mark.save(function (err, mark) {
                                if (err) {
                                    sendJsonResponse(res, 404, err);
                                } else {
                                    sendJsonResponse(res, 200, unit);
                                }
                            });
                        }
                    }
                }
            }
        );
};

// Редактировать раздел
module.exports.editDetail = function (req, res) {
    if (!req.params.carid || !req.params.modelid || !req.params.modifid || !req.params.unitid || !req.params.detailid) {
        sendJsonResponse(res, 404, {
            "message": "Not found, carid and modelid are required"
        });
        return;
    }
    Mark
        .findById(req.params.carid)
        .exec(
            function (err, mark) {
                if (!mark) {
                    sendJsonResponse(res, 404, {
                        "message": "Mark not found"
                    });
                    return;
                } else if (err) {
                    sendJsonResponse(res, 404, err);
                    return;
                }
                let model = mark.models.id(req.params.modelid);
                if (!model) {
                    sendJsonResponse(res, 404, {
                        "message": "Model not found"
                    });
                } else {
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
                                detail.detailName = req.body.detailName;
                                detail.detailImage = req.body.detailImage;
                                mark.save(function (err, mark) {
                                    if (err) {
                                        sendJsonResponse(res, 404, err);
                                    } else {
                                        sendJsonResponse(res, 200, detail);
                                    }
                                });
                            }
                        }
                    }
                }
            }
        );
};

// Редактировать составляющие раздела
module.exports.editItem = function (req, res) {
    if (!req.params.carid || !req.params.modelid || !req.params.modifid || !req.params.unitid || !req.params.detailid || !req.params.itemid) {
        sendJsonResponse(res, 404, {
            "message": "Not found, carid and modelid are required"
        });
        return;
    }
    Mark
        .findById(req.params.carid)
        .exec(
            function (err, mark) {
                if (!mark) {
                    sendJsonResponse(res, 404, {
                        "message": "Mark not found"
                    });
                    return;
                } else if (err) {
                    sendJsonResponse(res, 404, err);
                    return;
                }
                let model = mark.models.id(req.params.modelid);
                if (!model) {
                    sendJsonResponse(res, 404, {
                        "message": "Model not found"
                    });
                } else {
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
                                let item = detail.detailItems.id(req.params.itemid);
                                if (!item) {
                                    sendJsonResponse(res, 404, {
                                        "message": "Item not found"
                                    });
                                } else {
                                    item.itemNumber = req.body.itemNumber;
                                    item.itemName = req.body.itemName;
                                    item.itemArticle = req.body.itemArticle.split(',');
                                    item.itemNote = req.body.itemNote;
                                    item.itemImage = req.body.itemImage;
                                    mark.save(function (err, mark) {
                                        if (err) {
                                            sendJsonResponse(res, 404, err);
                                        } else {
                                            sendJsonResponse(res, 200, item);
                                        }
                                    });
                                }
                            }
                        }
                    }
                }
            }
        );
};
