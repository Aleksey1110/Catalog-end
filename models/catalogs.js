const mongoose = require('mongoose');
const config = require('../config/database');

const analogueSchema = new mongoose.Schema({
    analogueName: String,
    analogueNum: String
}, {
    collection: 'cars'
});

const itemsSchema = new mongoose.Schema({
    originalNumber: [String],
    note: String,
    picture: String, 
    analogueNumber: [analogueSchema]
}, {
    collection: 'cars'
});

const detailSchema = new mongoose.Schema({
    detailName: String,
    detailItems: [itemsSchema]
}, {
    collection: 'cars'
});

const unitsSchema = new mongoose.Schema({
    unitName: String,
    details: [detailSchema]
}, {
    collection: 'cars'
});

const modificationsSchema = new mongoose.Schema({
    modificationName: String,
    parts: [unitsSchema]
}, {
    collection: 'cars'
});

const modelsSchema = new mongoose.Schema({
    modelsName: String,
    modifications: [modificationsSchema]
}, {
    collection: 'cars'
});

const markSchema = new mongoose.Schema({
    markName: String,
    models: [modelsSchema]
}, {
    collection: 'cars'
});

const Car = module.exports = new mongoose.model('Car', markSchema);

