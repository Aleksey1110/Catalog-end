const mongoose = require('mongoose');
const Car = mongoose.model('Car');

// Контроллер добавления нового автомобиля
module.exports.post = function (req, res, next) {
    let newCar = new Car({
        markName: req.body.markName,
        models: req.body.models,
        modelsName: req.body.modelsName,
        modifications: req.body.modifications,
        modificationName: req.body.modificationName,
        parts: req.body.parts,
        unitName: req.body.unitName,
        details: req.body.details,
        detailName: req.body.detailName,
        detailItems: req.body.detailItems,
        originalNumber: req.body.originalNumber,
        analogueNumber: req.body.analogueNumber,
        note: req.body.note,
        picture: req.body.picture,
        analogueName: req.body.analogueName,
        analogueNum: req.body.analogueNum
    });

    // Функция добавления нового автомобиля
    Car.addCar(newCar, (err, car) => {
        if (err) {
            res.json({ success: false, msg: 'failed to add new car' });
            console.log(err);
        } else {
            res.json({ success: true, msg: 'new car added' });
        }
    });
};