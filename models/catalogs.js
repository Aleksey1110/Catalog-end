const mongoose = require('mongoose');
const config = require('../config/database');

const analogueSchema = new mongoose.Schema({
    analogueName: String,
    analogueNum: String
});

const itemsSchema = new mongoose.Schema({
    originalNumber: [String],
    analogueNumber: [analogueSchema],
    note: String,
    picture: String
});

const detailSchema = new mongoose.Schema({
    detailName: String,
    detailItems: [itemsSchema]
});

const unitsSchema = new mongoose.Schema({
    unitName: String,
    details: [detailSchema]
});

const modificationsSchema = new mongoose.Schema({
    modificationName: String,
    parts: [unitsSchema]
});

const modelsSchema = new mongoose.Schema({
    modelsName: String,
    modifications: [modificationsSchema]
});

const markSchema = new mongoose.Schema({
    markName: String,
    models: [modelsSchema]
});

const Car = module.exports = new mongoose.model('Car', markSchema);

// Функция добавления нового атомобиля
module.exports.addCar = function (newCar, callback) {
    newCar.save(callback);
};
