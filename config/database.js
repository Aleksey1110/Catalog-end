const mongoose = require('mongoose');

const dbURI = {
    database: 'mongodb://localhost:27017/carscats'
};

mongoose.connect(dbURI.database);

mongoose.connection.on('connected', () => {
    console.log('Connected to database ' + dbURI.database);
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