const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors');


const app = express();

// Ссылки на роуты
const indexRouter = require('./routes/index');
const catalogs = require('./routes/catalogs');
const addCar = require('./routes/addcar');
const editCar = require('./routes/editcar');
const removeCar = require('./routes/removecar');

// Номер порта
const port = 3000;

// Cors middleware
app.use(cors());

// Папка для компиляции
app.use(express.static(path.join(__dirname, 'public')));

// Парсеры
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Роуты
app.use('/', indexRouter);
app.use('/catalogs', catalogs);
app.use('/add', addCar);
app.use('/edit', editCar);
app.use('/remove', removeCar);

// Запуск сервера
app.listen(port, () => {
    console.log('server started on port ' + port);
});
