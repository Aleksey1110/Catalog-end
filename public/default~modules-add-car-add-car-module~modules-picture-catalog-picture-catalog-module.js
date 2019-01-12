(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~modules-add-car-add-car-module~modules-picture-catalog-picture-catalog-module"],{

/***/ "./src/app/services/api-img-catalog.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/api-img-catalog.service.ts ***!
  \*****************************************************/
/*! exports provided: ApiImgCatalogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiImgCatalogService", function() { return ApiImgCatalogService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");





var ApiImgCatalogService = /** @class */ (function () {
    function ApiImgCatalogService(http) {
        this.http = http;
        this._url = 'http://localhost:3000';
    }
    // Обработчик ошибок сервера
    ApiImgCatalogService.prototype.errorHandler = function (error) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(error.message || 'Server error');
    };
    // Получить список всех марок
    ApiImgCatalogService.prototype.getCars = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers.append('Content-Type', 'application/json');
        return this.http.get("catalogs/piccat", { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorHandler));
    };
    // Получить список всех моделей
    ApiImgCatalogService.prototype.getModel = function (id1) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers.append('Content-Type', 'application/json');
        return this.http.get("catalogs/piccat/" + id1, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorHandler));
    };
    // Получить список всех модификаций
    ApiImgCatalogService.prototype.getModification = function (id1, id2) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers.append('Content-Type', 'application/json');
        return this.http.get("catalogs/piccat/" + id1 + "/" + id2, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorHandler));
    };
    // Получить список всех агрегатов
    ApiImgCatalogService.prototype.getUnit = function (id1, id2, id3) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers.append('Content-Type', 'application/json');
        return this.http.get("catalogs/piccat/" + id1 + "/" + id2 + "/" + id3, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorHandler));
    };
    // Получить список всех разделов
    ApiImgCatalogService.prototype.getDetail = function (id1, id2, id3, id4) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers.append('Content-Type', 'application/json');
        return this.http.get("catalogs/piccat/" + id1 + "/" + id2 + "/" + id3 + "/" + id4, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorHandler));
    };
    // Получить схему выбранного раздела
    ApiImgCatalogService.prototype.getItems = function (id1, id2, id3, id4, id5) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers.append('Content-Type', 'application/json');
        return this.http.get("catalogs/piccat/" + id1 + "/" + id2 + "/" + id3 + "/" + id4 + "/" + id5, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorHandler));
    };
    // Получить детали выбранного раздела
    ApiImgCatalogService.prototype.getDetailItems = function (id1, id2, id3, id4, id5, id6) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers.append('Content-Type', 'application/json');
        return this.http.get("catalogs/piccat/" + id1 + "/" + id2 + "/" + id3 + "/" + id4 + "/" + id5 + "/" + id6, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorHandler));
    };
    // Создать новую марку авто
    ApiImgCatalogService.prototype.createCar = function (car) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post("imgadd/addCar", car, { headers: headers });
    };
    // Создать новую модель
    ApiImgCatalogService.prototype.createModel = function (id1, model) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post("imgadd/addCar/" + id1, model, { headers: headers });
    };
    // Создать новую модификацию
    ApiImgCatalogService.prototype.createModification = function (id1, id2, modification) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post("imgadd/addCar/" + id1 + "/" + id2, modification, { headers: headers });
    };
    // Создать новую агрегат
    ApiImgCatalogService.prototype.createUnit = function (id1, id2, id3, unit) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post("imgadd/addCar/" + id1 + "/" + id2 + "/" + id3, unit, { headers: headers });
    };
    // Создать новую схему
    ApiImgCatalogService.prototype.createDetail = function (id1, id2, id3, id4, detail) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post("imgadd/addCar/" + id1 + "/" + id2 + "/" + id3 + "/" + id4, detail, { headers: headers });
    };
    // Создать новую основную схему
    ApiImgCatalogService.prototype.createDetailItem = function (id1, id2, id3, id4, id5, item) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post("imgadd/addCar/" + id1 + "/" + id2 + "/" + id3 + "/" + id4 + "/" + id5, item, { headers: headers });
    };
    // Создать новые детали
    ApiImgCatalogService.prototype.createItems = function (id1, id2, id3, id4, id5, id6, item) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post("imgadd/addCar/" + id1 + "/" + id2 + "/" + id3 + "/" + id4 + "/" + id5 + "/" + id6, item, { headers: headers });
    };
    // Редактировать название марки авто
    ApiImgCatalogService.prototype.editMark = function (id1, mark) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers.append('Content-Type', 'application/json');
        return this.http.put("imgedit/editcar/" + id1, mark, { headers: headers });
    };
    // Редактировать название модели авто
    ApiImgCatalogService.prototype.editModel = function (id1, id2, model) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers.append('Content-Type', 'application/json');
        return this.http.put("imgedit/editcar/" + id1 + "/" + id2, model, { headers: headers });
    };
    // Редактировать название модификации авто
    ApiImgCatalogService.prototype.editModification = function (id1, id2, id3, modification) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers.append('Content-Type', 'application/json');
        return this.http.put("imgedit/editcar/" + id1 + "/" + id2 + "/" + id3, modification, { headers: headers });
    };
    // Редактировать название агрегата авто
    ApiImgCatalogService.prototype.editUnit = function (id1, id2, id3, id4, unit) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers.append('Content-Type', 'application/json');
        return this.http.put("imgedit/editcar/" + id1 + "/" + id2 + "/" + id3 + "/" + id4, unit, { headers: headers });
    };
    // Редактировать название раздел
    ApiImgCatalogService.prototype.editDetail = function (id1, id2, id3, id4, id5, detail) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers.append('Content-Type', 'application/json');
        return this.http.put("imgedit/editcar/" + id1 + "/" + id2 + "/" + id3 + "/" + id4 + "/" + id5, detail, { headers: headers });
    };
    // Редактировать ссылку на схему раздела
    ApiImgCatalogService.prototype.editDetailItems = function (id1, id2, id3, id4, id5, id6, item) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers.append('Content-Type', 'application/json');
        return this.http.put("imgedit/editcar/" + id1 + "/" + id2 + "/" + id3 + "/" + id4 + "/" + id5 + "/" + id6, item, { headers: headers });
    };
    // Редактировать детали раздела
    ApiImgCatalogService.prototype.editItems = function (id1, id2, id3, id4, id5, id6, id7, item) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers.append('Content-Type', 'application/json');
        return this.http.put("imgedit/editcar/" + id1 + "/" + id2 + "/" + id3 + "/" + id4 + "/" + id5 + "/" + id6 + "/" + id7, item, { headers: headers });
    };
    // Удалить марку
    ApiImgCatalogService.prototype.removeMark = function (id1) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers.append('Content-Type', 'application/json');
        return this.http.delete("imgremove/removecar/" + id1, { headers: headers });
    };
    // Удалить модель
    ApiImgCatalogService.prototype.removeModel = function (id1, id2) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers.append('Content-Type', 'application/json');
        return this.http.delete("imgremove/removecar/" + id1 + "/" + id2, { headers: headers });
    };
    // Удалить модификацию
    ApiImgCatalogService.prototype.removeModification = function (id1, id2, id3) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers.append('Content-Type', 'application/json');
        return this.http.delete("imgremove/removecar/" + id1 + "/" + id2 + "/" + id3, { headers: headers });
    };
    // Удалить агрегат
    ApiImgCatalogService.prototype.removeUnit = function (id1, id2, id3, id4) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers.append('Content-Type', 'application/json');
        return this.http.delete("imgremove/removecar/" + id1 + "/" + id2 + "/" + id3 + "/" + id4, { headers: headers });
    };
    // Удалить раздел
    ApiImgCatalogService.prototype.removeDetail = function (id1, id2, id3, id4, id5) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers.append('Content-Type', 'application/json');
        return this.http.delete("imgremove/removecar/" + id1 + "/" + id2 + "/" + id3 + "/" + id4 + "/" + id5, { headers: headers });
    };
    // Удалить ссылку на схему раздела
    ApiImgCatalogService.prototype.removeItem = function (id1, id2, id3, id4, id5, id6) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers.append('Content-Type', 'application/json');
        return this.http.delete("imgremove/removecar/" + id1 + "/" + id2 + "/" + id3 + "/" + id4 + "/" + id5 + "/" + id6, { headers: headers });
    };
    // Удалить данные раздела
    ApiImgCatalogService.prototype.removeItems = function (id1, id2, id3, id4, id5, id6, id7) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers.append('Content-Type', 'application/json');
        return this.http.delete("imgremove/removecar/" + id1 + "/" + id2 + "/" + id3 + "/" + id4 + "/" + id5 + "/" + id6 + "/" + id7, { headers: headers });
    };
    ApiImgCatalogService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ApiImgCatalogService);
    return ApiImgCatalogService;
}());



/***/ })

}]);
//# sourceMappingURL=default~modules-add-car-add-car-module~modules-picture-catalog-picture-catalog-module.js.map