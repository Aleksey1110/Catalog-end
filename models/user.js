const mongoose = require('mongoose');
const config = require('../config/database');

const userSchema = new mongoose.Schema({
    email: String,
    password: String
});

const User = module.exports = new mongoose.model('User', userSchema, 'admin');