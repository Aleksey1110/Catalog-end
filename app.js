const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors');


const app = express();

// Ссылки на роуты
const indexRouter = require('./routes/index');
const addCar = require('./routes/addcar');
const editCar = require('./routes/editcar');
const removeCar = require('./routes/removecar');
const catalogs = require('./routes/picture-catalog/main');
const imgaddcar = require('./routes/picture-catalog/addcar');
const imgeditcar = require('./routes/picture-catalog/editcar');
const imgremove = require('./routes/picture-catalog/removecar');

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
app.use('/add', addCar);
app.use('/edit', editCar);
app.use('/remove', removeCar);
app.use('/catalogs', catalogs);
app.use('/imgadd', imgaddcar);
app.use('/imgedit', imgeditcar);
app.use('/imgremove', imgremove);


// Запуск сервера
app.listen(port, () => {
    console.log('server started on port ' + port);
});
