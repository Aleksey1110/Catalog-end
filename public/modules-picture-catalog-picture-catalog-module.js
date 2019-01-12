(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-picture-catalog-picture-catalog-module"],{

/***/ "./src/app/modules/picture-catalog/catalog-page/catalog-page.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/picture-catalog/catalog-page/catalog-page.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvbW9kdWxlcy9waWN0dXJlLWNhdGFsb2cvY2F0YWxvZy1wYWdlL2NhdGFsb2ctcGFnZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/modules/picture-catalog/catalog-page/catalog-page.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/picture-catalog/catalog-page/catalog-page.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-dropdown (showItems)=\"showItems($event)\"></app-dropdown>\r\n<div class=\"row\" *ngIf=\"isPassedId\">\r\n    <div class=\"col-lg-6\">\r\n        <img src=\"{{itemImage}}\">\r\n    </div>\r\n    <div class=\"col-lg-6\">\r\n        <table class=\"table table-hover\">\r\n            <thead>\r\n                <tr>\r\n                    <th scope=\"col\"># п/п</th>\r\n                    <th scope=\"col\">Артикул</th>\r\n                    <th scope=\"col\">Название детали</th>\r\n                    <th scope=\"col\">Примечание</th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr class=\"table-active\" *ngFor=\"let detail of details\">\r\n                    <th scope=\"row\">{{detail.itemNumber}}</th>\r\n                    <td>\r\n                        <p *ngFor=\"let article of detail.itemArticle\">{{article}}</p>\r\n                    </td>\r\n                    <td>{{detail.itemName}}</td>\r\n                    <td>{{detail.itemNote}}</td>\r\n                </tr>\r\n                <tr>\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/modules/picture-catalog/catalog-page/catalog-page.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/modules/picture-catalog/catalog-page/catalog-page.component.ts ***!
  \********************************************************************************/
/*! exports provided: CatalogPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatalogPageComponent", function() { return CatalogPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CatalogPageComponent = /** @class */ (function () {
    function CatalogPageComponent() {
        this.items = [];
        this.details = [];
        this.isPassedId = false;
    }
    CatalogPageComponent.prototype.ngOnInit = function () {
    };
    // Функция сортировки данных
    CatalogPageComponent.prototype._compare = function (detailsA, detailsB) {
        return detailsA.itemNumber - detailsB.itemNumber;
    };
    // Получение данных из компонента dropdown. Присвоение значений
    CatalogPageComponent.prototype.showItems = function (items) {
        var _this = this;
        this.isPassedId = true;
        this.items = items;
        this.items.forEach(function (elem) {
            _this.details = elem.items;
            _this.itemImage = elem.itemImage;
        });
        this.details.sort(this._compare);
    };
    CatalogPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-catalog-page',
            template: __webpack_require__(/*! ./catalog-page.component.html */ "./src/app/modules/picture-catalog/catalog-page/catalog-page.component.html"),
            styles: [__webpack_require__(/*! ./catalog-page.component.css */ "./src/app/modules/picture-catalog/catalog-page/catalog-page.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CatalogPageComponent);
    return CatalogPageComponent;
}());



/***/ }),

/***/ "./src/app/modules/picture-catalog/dropdown/dropdown.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/modules/picture-catalog/dropdown/dropdown.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-group {\r\n    width: 235px;\r\n}\r\n\r\n.img-nav {\r\n    width: 100%;\r\n    cursor: pointer;\r\n}\r\n\r\n.img-link {\r\n    display: block;\r\n    margin-top: 20px;\r\n}\r\n\r\n.img-name {\r\n    text-align: center;\r\n    display: block;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tb2R1bGVzL3BpY3R1cmUtY2F0YWxvZy9kcm9wZG93bi9kcm9wZG93bi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtDQUNoQjs7QUFFRDtJQUNJLFlBQVk7SUFDWixnQkFBZ0I7Q0FDbkI7O0FBRUQ7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0NBQ3BCOztBQUVEO0lBQ0ksbUJBQW1CO0lBQ25CLGVBQWU7Q0FDbEIiLCJmaWxlIjoiYXBwL21vZHVsZXMvcGljdHVyZS1jYXRhbG9nL2Ryb3Bkb3duL2Ryb3Bkb3duLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS1ncm91cCB7XHJcbiAgICB3aWR0aDogMjM1cHg7XHJcbn1cclxuXHJcbi5pbWctbmF2IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uaW1nLWxpbmsge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcblxyXG4uaW1nLW5hbWUge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/modules/picture-catalog/dropdown/dropdown.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/modules/picture-catalog/dropdown/dropdown.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <!-- Вывод флеш-сообщений -->\r\n  <div class=\"alert alert-{{message.type}}\" *ngIf=\"message\">{{message.text}}</div>\r\n  <div class=\"col d-flex justify-content-between\">\r\n    <div class=\"form-group\">\r\n      <label for=\"markName\">Марка</label>\r\n      <!-- Передача ID выбранной марки в компонент -->\r\n      <select id=\"markName\" (change)=\"passCarId($event)\" class=\"custom-select\">\r\n        <option></option>\r\n        <option *ngFor=\"let carItem of markName\" [value]=\"carItem._id\">{{carItem.markName}}</option>\r\n      </select>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"modelName\">Модель</label>\r\n      <!-- Передача ID выбранной модели в компонент -->\r\n      <select id=\"modelName\" (change)=\"passModelId($event)\" class=\"custom-select\">\r\n        <option></option>\r\n        <option *ngFor=\"let model of modelName\" [value]=\"model._id\">{{model.modelsName}}</option>\r\n      </select>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"modificationName\">Модификация</label>\r\n      <!-- Передача ID выбранной модификации в компонент -->\r\n      <select id=\"modificationName\" (change)=\"passModificationId($event)\" class=\"custom-select\">\r\n        <option></option>\r\n        <option *ngFor=\"let modification of modifications\" [value]=\"modification._id\">{{modification.modificationName}}</option>\r\n      </select>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"detailGroup\">Название агрегата</label>\r\n      <!-- Передача ID выбранного агрегата в компонент -->\r\n      <select id=\"detailGroup\" (change)=\"passUnitId($event)\" class=\"custom-select\">\r\n        <option></option>\r\n        <option *ngFor=\"let unit of units\" [value]=\"unit._id\">{{unit.unitName}}</option>\r\n      </select>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"row\" *ngIf=\"passedId\">\r\n  <div class=\"col-lg-3\" *ngFor=\"let item of details\">\r\n    <a class=\"img-link\" (click)=\"passDetailId(item._id)\">\r\n      <img src=\"{{item.detailImage}}\" class=\"img-nav\">\r\n      <p class=\"img-name\">{{item.detailName}}</p>\r\n    </a>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/picture-catalog/dropdown/dropdown.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/modules/picture-catalog/dropdown/dropdown.component.ts ***!
  \************************************************************************/
/*! exports provided: DropdownComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownComponent", function() { return DropdownComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_api_img_catalog_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../services/api-img-catalog.service */ "./src/app/services/api-img-catalog.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_flash_message_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/flash-message.service */ "./src/app/services/flash-message.service.ts");




var DropdownComponent = /** @class */ (function () {
    function DropdownComponent(apiImageCatalog, _flashMessagesService) {
        this.apiImageCatalog = apiImageCatalog;
        this._flashMessagesService = _flashMessagesService;
        this.markName = [];
        this.modelName = [];
        this.modifications = [];
        this.units = [];
        this.details = [];
        this.items = [];
        this.passedId = false;
        // Выходные данные из компонента (Массив данных выбранного раздела)
        this.showItems = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
    }
    DropdownComponent.prototype.ngOnInit = function () {
        // Получение списка машин при загрузке страницы
        this.getCars();
    };
    // Функция сортировки данных по марке авто
    DropdownComponent.prototype._compareMark = function (detailsA, detailsB) {
        return ('' + detailsA.markName).localeCompare(detailsB.markName);
    };
    // Функция сортировки данных по названию агрегата
    DropdownComponent.prototype._compareUnit = function (detailsA, detailsB) {
        return ('' + detailsA.unitName).localeCompare(detailsB.unitName);
    };
    // Получение списка машин
    DropdownComponent.prototype.getCars = function () {
        var _this = this;
        this.apiImageCatalog.getCars()
            .subscribe(function (data) {
            _this.markName = data.sort(_this._compareMark);
        }, function (error) {
            _this._flashMessagesService.showMessage(error).subscribe(function (data) { return _this.message = data; });
        });
    };
    // Получение Id выбранной машины. Получение списка моделей
    DropdownComponent.prototype.passCarId = function (event) {
        var _this = this;
        this.carId = event.target.value;
        this.apiImageCatalog.getModel(this.carId)
            .subscribe(function (data) {
            _this.modelName = data;
        }, function (error) {
            _this._flashMessagesService.showMessage(error).subscribe(function (data) { return _this.message = data; });
        });
    };
    // Получение Id выбранной модели. Получение списка модификаций
    DropdownComponent.prototype.passModelId = function (event) {
        var _this = this;
        this.modelId = event.target.value;
        this.apiImageCatalog.getModification(this.carId, this.modelId)
            .subscribe(function (data) {
            _this.modifications = data;
        }, function (error) {
            _this._flashMessagesService.showMessage(error).subscribe(function (data) { return _this.message = data; });
        });
    };
    // Получение Id выбранной модификации. Получение списка агрегатов
    DropdownComponent.prototype.passModificationId = function (event) {
        var _this = this;
        this.unitId = event.target.value;
        this.apiImageCatalog.getUnit(this.carId, this.modelId, this.unitId)
            .subscribe(function (data) {
            _this.units = data;
        }, function (error) {
            _this._flashMessagesService.showMessage(error).subscribe(function (data) { return _this.message = data; });
        });
    };
    // Получение Id агрегата. Получение списка деталей со схемами.
    DropdownComponent.prototype.passUnitId = function (event) {
        var _this = this;
        this.detailId = event.target.value;
        this.apiImageCatalog.getDetail(this.carId, this.modelId, this.unitId, this.detailId)
            .subscribe(function (data) {
            _this.details = data.sort(_this._compareUnit);
        }, function (error) {
            _this._flashMessagesService.showMessage(error).subscribe(function (data) { return _this.message = data; });
        });
        this.passedId = true;
    };
    // Получение Id схемы. передача данных из компонента.
    DropdownComponent.prototype.passDetailId = function (itemId) {
        var _this = this;
        this.itemId = itemId;
        this.apiImageCatalog.getItems(this.carId, this.modelId, this.unitId, this.detailId, this.itemId)
            .subscribe(function (data) {
            _this.items = data;
            _this.showItems.emit(_this.items);
        }, function (error) {
            _this._flashMessagesService.showMessage(error).subscribe(function (data) { return _this.message = data; });
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DropdownComponent.prototype, "showItems", void 0);
    DropdownComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-dropdown',
            template: __webpack_require__(/*! ./dropdown.component.html */ "./src/app/modules/picture-catalog/dropdown/dropdown.component.html"),
            styles: [__webpack_require__(/*! ./dropdown.component.css */ "./src/app/modules/picture-catalog/dropdown/dropdown.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_api_img_catalog_service__WEBPACK_IMPORTED_MODULE_1__["ApiImgCatalogService"],
            src_app_services_flash_message_service__WEBPACK_IMPORTED_MODULE_3__["FlashMessageService"]])
    ], DropdownComponent);
    return DropdownComponent;
}());



/***/ }),

/***/ "./src/app/modules/picture-catalog/picture-catalog-routing.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/modules/picture-catalog/picture-catalog-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: PictureCatalogRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PictureCatalogRoutingModule", function() { return PictureCatalogRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _catalog_page_catalog_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./catalog-page/catalog-page.component */ "./src/app/modules/picture-catalog/catalog-page/catalog-page.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




// Основные роуты модуля
var picRoutes = [
    { path: '', component: _catalog_page_catalog_page_component__WEBPACK_IMPORTED_MODULE_1__["CatalogPageComponent"] }
];
var PictureCatalogRoutingModule = /** @class */ (function () {
    function PictureCatalogRoutingModule() {
    }
    PictureCatalogRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(picRoutes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]
            ]
        })
    ], PictureCatalogRoutingModule);
    return PictureCatalogRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/picture-catalog/picture-catalog.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/modules/picture-catalog/picture-catalog.module.ts ***!
  \*******************************************************************/
/*! exports provided: PictureCatalogModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PictureCatalogModule", function() { return PictureCatalogModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_api_img_catalog_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/api-img-catalog.service */ "./src/app/services/api-img-catalog.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dropdown/dropdown.component */ "./src/app/modules/picture-catalog/dropdown/dropdown.component.ts");
/* harmony import */ var _catalog_page_catalog_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./catalog-page/catalog-page.component */ "./src/app/modules/picture-catalog/catalog-page/catalog-page.component.ts");
/* harmony import */ var _picture_catalog_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./picture-catalog-routing.module */ "./src/app/modules/picture-catalog/picture-catalog-routing.module.ts");
/* harmony import */ var src_app_services_flash_message_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/flash-message.service */ "./src/app/services/flash-message.service.ts");








var PictureCatalogModule = /** @class */ (function () {
    function PictureCatalogModule() {
    }
    PictureCatalogModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_4__["DropdownComponent"],
                _catalog_page_catalog_page_component__WEBPACK_IMPORTED_MODULE_5__["CatalogPageComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _picture_catalog_routing_module__WEBPACK_IMPORTED_MODULE_6__["PictureCatalogRoutingModule"]
            ],
            providers: [
                _services_api_img_catalog_service__WEBPACK_IMPORTED_MODULE_1__["ApiImgCatalogService"],
                src_app_services_flash_message_service__WEBPACK_IMPORTED_MODULE_7__["FlashMessageService"]
            ]
        })
    ], PictureCatalogModule);
    return PictureCatalogModule;
}());



/***/ })

}]);
//# sourceMappingURL=modules-picture-catalog-picture-catalog-module.js.map