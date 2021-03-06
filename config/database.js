require('dotenv').config({ path: '../.env' });
const mongoose = require('mongoose');

module.exports.dbURI = {
    database: 'mongodb://localhost:27017/carscats',
    secret: process.env.JWT_SECRET
};

if (process.env.NODE_ENV === 'production') {
    this.dbURI.database = 'mongodb://alex:i80186zx@ds137634.mlab.com:37634/carscats'
};

mongoose.connect(this.dbURI.database, {useNewUrlParser: true});

mongoose.connection.on('connected', () => {
    console.log('Connected to database ' + this.dbURI.database);
});

mongoose.connection.on('Error', (err) => {
    console.log('Database error: ' + err);
});

mongoose.connection.on('disconnected', () => {
    console.log('Mongoose disconected');    
});

const gracefulShutdown = function(msg, callback) {
    mongoose.connection.close(() => {
        console.log('Mongoose disconnected through ' + msg);
        callback();
    });
};

// Для перезапуска nodemon
process.once('SIGUSR2', () => {
    gracefulShutdown('nodemon restart', () => {
        process.kill(process.pid, 'SIGUSR2');
    });
});

// Для завершения приложения
process.on('SIGINT', () => {
    gracefulShutdown('app termination',() => {
        process.exit(0);
    });
});