const mongoose = require('mongoose');
const config = require('../config/database');

const itemDetailSchema = new mongoose.Schema({
    itemNumber: Number,
    itemName: String,
    itemArticle: [String],
    itemNote: String,
}, {
    collection: 'catalogues'
});

const itemSchema = new mongoose.Schema({  
    itemImage: String,
    items: [itemDetailSchema]
}, {
    collection: 'catalogues'
});

const detailSchema = new mongoose.Schema({
    detailName: String,
    detailImage: String,
    detailItems: [itemSchema]
}, {
    collection: 'catalogues'
});

const unitSchema = new mongoose.Schema({
    unitName: String,
    details: [detailSchema]
}, {
    collection: 'catalogues'
});

const modificationSchema = new mongoose.Schema({
    modificationName: String,
    units: [unitSchema]
}, {
    collection: 'catalogues'
});

const modelsSchema = new mongoose.Schema({
    modelsName: String,
    modifications: [modificationSchema]
}, {
    collection: 'catalogues'
});

const markSchema = new mongoose.Schema({
    markName: String,
    models: [modelsSchema]
}, {
    collection: 'catalogues'
});

const Mark = module.exports = new mongoose.model('Mark', markSchema);