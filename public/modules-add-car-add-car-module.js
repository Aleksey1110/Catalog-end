(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-add-car-add-car-module"],{

/***/ "./node_modules/angular2-flash-messages/module/flash-message.js":
/*!**********************************************************************!*\
  !*** ./node_modules/angular2-flash-messages/module/flash-message.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var FlashMessage = /** @class */ (function () {
    function FlashMessage(text, cssClass, closeOnClick, showCloseBtn) {
        this.id = (FlashMessage.nextId++);
        this.text = 'default text';
        this.cssClass = '';
        this.closeOnClick = false;
        this.showCloseBtn = false;
        if (text)
            this.text = text;
        if (cssClass)
            this.cssClass = cssClass;
        if (closeOnClick)
            this.closeOnClick = closeOnClick;
        if (showCloseBtn)
            this.showCloseBtn = showCloseBtn;
    }
    FlashMessage.nextId = 0;
    return FlashMessage;
}());
exports.FlashMessage = FlashMessage;
//# sourceMappingURL=flash-message.js.map

/***/ }),

/***/ "./node_modules/angular2-flash-messages/module/flash-messages.component.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/angular2-flash-messages/module/flash-messages.component.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var flash_message_1 = __webpack_require__(/*! ./flash-message */ "./node_modules/angular2-flash-messages/module/flash-message.js");
var flash_messages_service_1 = __webpack_require__(/*! ./flash-messages.service */ "./node_modules/angular2-flash-messages/module/flash-messages.service.js");
var FlashMessagesComponent = /** @class */ (function () {
    function FlashMessagesComponent(_flashMessagesService, _cdRef) {
        this._flashMessagesService = _flashMessagesService;
        this._cdRef = _cdRef;
        this._defaults = {
            text: 'default message',
            closeOnClick: false,
            showCloseBtn: false,
            cssClass: ''
        };
        this.messages = [];
        this.classes = '';
        this._grayOut = false;
        this._flashMessagesService.show = this.show.bind(this);
        this._flashMessagesService.grayOut = this.grayOut.bind(this);
    }
    FlashMessagesComponent.prototype.ngOnInit = function () { };
    FlashMessagesComponent.prototype.show = function (text, options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        var defaults = {
            timeout: 2500,
            closeOnClick: false,
            showCloseBtn: false,
            cssClass: '',
            text: "default message"
        };
        for (var attrname in options) {
            defaults[attrname] = options[attrname];
        }
        var message = new flash_message_1.FlashMessage(text, defaults.cssClass, defaults.closeOnClick, defaults.showCloseBtn);
        message.timer = window.setTimeout(function () {
            _this._remove(message);
            _this._cdRef.detectChanges();
        }, defaults.timeout);
        this.messages.push(message);
        this._cdRef.detectChanges();
    };
    FlashMessagesComponent.prototype.close = function (message) {
        clearTimeout(message.timer);
        this._remove(message);
        this._cdRef.detectChanges();
    };
    FlashMessagesComponent.prototype.alertClicked = function (message) {
        if (message.closeOnClick) {
            this.close(message);
        }
    };
    FlashMessagesComponent.prototype.grayOut = function (value) {
        if (value === void 0) { value = false; }
        this._grayOut = value;
    };
    FlashMessagesComponent.prototype._remove = function (message) {
        this.messages = this.messages.filter(function (msg) { return msg.id !== message.id; });
    };
    FlashMessagesComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'flash-messages',
                    template: "\n      <div id=\"flashMessages\" class=\"flash-messages\">\n          <div id=\"grayOutDiv\" *ngIf='_grayOut && messages.length'></div>\n          <div class=\"alert flash-message {{message.cssClass}}\" [ngClass]=\"{'alert-dismissible':message.showCloseBtn}\" [style.cursor]=\"message.closeOnClick?'pointer':'inherit'\" *ngFor='let message of messages' (click)=\"alertClicked(message)\">\n              <button *ngIf=\"message.showCloseBtn\" type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\" (click)=\"close(message)\"><span aria-hidden=\"true\">&times;</span></button>\n              <div [innerHTML]=\"message.text\"></div>\n          </div> \n      </div>\n  "
                },] },
    ];
    /** @nocollapse */
    FlashMessagesComponent.ctorParameters = function () { return [
        { type: flash_messages_service_1.FlashMessagesService },
        { type: core_1.ChangeDetectorRef }
    ]; };
    return FlashMessagesComponent;
}());
exports.FlashMessagesComponent = FlashMessagesComponent;
//# sourceMappingURL=flash-messages.component.js.map

/***/ }),

/***/ "./node_modules/angular2-flash-messages/module/flash-messages.service.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/angular2-flash-messages/module/flash-messages.service.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var FlashMessagesService = /** @class */ (function () {
    function FlashMessagesService() {
    }
    FlashMessagesService.decorators = [
        { type: core_1.Injectable },
    ];
    return FlashMessagesService;
}());
exports.FlashMessagesService = FlashMessagesService;
//# sourceMappingURL=flash-messages.service.js.map

/***/ }),

/***/ "./node_modules/angular2-flash-messages/module/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/angular2-flash-messages/module/index.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var module_1 = __webpack_require__(/*! ./module */ "./node_modules/angular2-flash-messages/module/module.js");
exports.FlashMessagesModule = module_1.FlashMessagesModule;
var flash_messages_service_1 = __webpack_require__(/*! ./flash-messages.service */ "./node_modules/angular2-flash-messages/module/flash-messages.service.js");
exports.FlashMessagesService = flash_messages_service_1.FlashMessagesService;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/angular2-flash-messages/module/module.js":
/*!***************************************************************!*\
  !*** ./node_modules/angular2-flash-messages/module/module.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var common_1 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var flash_messages_component_1 = __webpack_require__(/*! ./flash-messages.component */ "./node_modules/angular2-flash-messages/module/flash-messages.component.js");
var flash_messages_service_1 = __webpack_require__(/*! ./flash-messages.service */ "./node_modules/angular2-flash-messages/module/flash-messages.service.js");
var FlashMessagesModule = /** @class */ (function () {
    function FlashMessagesModule() {
    }
    FlashMessagesModule.forRoot = function () {
        return {
            ngModule: FlashMessagesModule,
            providers: [flash_messages_service_1.FlashMessagesService]
        };
    };
    FlashMessagesModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [common_1.CommonModule],
                    declarations: [flash_messages_component_1.FlashMessagesComponent],
                    exports: [flash_messages_component_1.FlashMessagesComponent],
                    providers: []
                },] },
    ];
    return FlashMessagesModule;
}());
exports.FlashMessagesModule = FlashMessagesModule;
//# sourceMappingURL=module.js.map

/***/ }),

/***/ "./src/app/modules/add-car/add-analogue/add-analogue.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/modules/add-car/add-analogue/add-analogue.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input {\r\n    margin-bottom: 7px;\r\n}\r\n\r\nselect {\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.form-group {\r\n    margin-bottom: 5px;\r\n}\r\n\r\nsmall {\r\n    color: #d9534f;\r\n    margin-bottom: 7px;\r\n    display: block;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tb2R1bGVzL2FkZC1jYXIvYWRkLWFuYWxvZ3VlL2FkZC1hbmFsb2d1ZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUJBQW1CO0NBQ3RCOztBQUVEO0lBQ0ksb0JBQW9CO0NBQ3ZCOztBQUVEO0lBQ0ksbUJBQW1CO0NBQ3RCOztBQUVEO0lBQ0ksZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixlQUFlO0NBQ2xCIiwiZmlsZSI6ImFwcC9tb2R1bGVzL2FkZC1jYXIvYWRkLWFuYWxvZ3VlL2FkZC1hbmFsb2d1ZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW5wdXQge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogN3B4O1xyXG59XHJcblxyXG5zZWxlY3Qge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLmZvcm0tZ3JvdXAge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG59XHJcblxyXG5zbWFsbCB7XHJcbiAgICBjb2xvcjogI2Q5NTM0ZjtcclxuICAgIG1hcmdpbi1ib3R0b206IDdweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/modules/add-car/add-analogue/add-analogue.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/modules/add-car/add-analogue/add-analogue.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Вывод флеш-сообщений -->\r\n<div class=\"alert alert-{{message.type}}\" *ngIf=\"message\">{{message.text}}</div>\r\n<form #form=\"ngForm\" novalidate (ngSubmit)=\"addItems()\">\r\n  <div class=\"form-group\">\r\n    <label>Марка</label>\r\n    <!-- Передача ID выбранной марки в компонент -->\r\n    <select (change)=\"passCarId($event)\" class=\"custom-select\" ngModel name=\"carItem\" required>\r\n      <option></option>\r\n      <option *ngFor=\"let carItem of markName\" [value]=\"carItem._id\">{{carItem.markName}}</option>\r\n    </select>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label>Модель</label>\r\n    <!-- Передача ID выбранной модели в компонент -->\r\n    <select (change)=\"passModelId($event)\" class=\"custom-select\" ngModel name=\"model\" required>\r\n      <option></option>\r\n      <option *ngFor=\"let model of modelName\" [value]=\"model._id\">{{model.modelsName}}</option>\r\n    </select>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label>Модификация</label>\r\n    <!-- Передача ID выбранной модификации в компонент -->\r\n    <select (change)=\"passModificationId($event)\" class=\"custom-select\" ngModel name=\"modification\" required>\r\n      <option></option>\r\n      <option *ngFor=\"let modification of modifications\" [value]=\"modification._id\">{{modification.modificationName}}</option>\r\n    </select>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label>Агрегат</label>\r\n    <!-- Передача ID выбранного агрегата в компонент -->\r\n    <select (change)=\"passUnitId($event)\" class=\"custom-select\" ngModel name=\"unit\" required>\r\n      <option></option>\r\n      <option *ngFor=\"let unit of units\" [value]=\"unit._id\">{{unit.unitName}}</option>\r\n    </select>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label>Деталь</label>\r\n    <!-- Передача ID выбранной детали в компонент -->\r\n    <select (change)=\"passDetailId($event)\" class=\"custom-select\" ngModel name=\"detail\" required>\r\n      <option></option>\r\n      <option *ngFor=\"let detail of details\" [value]=\"detail._id\">{{detail.detailName}}</option>\r\n    </select>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label>Оригинальный номер</label>\r\n    <!-- Передача ID выбранных оригинальных номеров в компонент -->\r\n    <select (change)=\"passOriginalId($event)\" class=\"custom-select\" ngModel name=\"analogue\" required>\r\n      <option></option>\r\n      <option *ngFor=\"let analogue of analogues\" [value]=\"analogue._id\">{{analogue.originalNumber}}</option>\r\n    </select>\r\n  </div>\r\n  <!-- Блок добавления данных -->\r\n  <div class=\"form-group\">\r\n    <p>Внесите данные аналога</p>\r\n    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"analogueName\" name=\"analogueName\" required placeholder=\"Внесите название аналога\"\r\n      #name=\"ngModel\" [class.is-invalid]=\"name.invalid && name.touched\">\r\n    <small *ngIf=\"name.invalid && name.touched\">Заполните форму</small>\r\n    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"analogueNum\" name=\"analogueNum\" required placeholder=\"Внесите артикул аналога\"\r\n      #number=\"ngModel\" [class.is-invalid]=\"name.invalid && name.touched\">\r\n    <small *ngIf=\"number.invalid && number.touched\">Заполните форму</small>\r\n  </div>\r\n  <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"form.form.invalid\">Добавить</button>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/modules/add-car/add-analogue/add-analogue.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/modules/add-car/add-analogue/add-analogue.component.ts ***!
  \************************************************************************/
/*! exports provided: AddAnalogueComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddAnalogueComponent", function() { return AddAnalogueComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_flash_message_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/flash-message.service */ "./src/app/services/flash-message.service.ts");




var AddAnalogueComponent = /** @class */ (function () {
    function AddAnalogueComponent(_apiService, _flashMessagesService) {
        this._apiService = _apiService;
        this._flashMessagesService = _flashMessagesService;
        this.markName = [];
        this.modelName = [];
        this.modifications = [];
        this.units = [];
        this.details = [];
        this.analogues = [];
    }
    AddAnalogueComponent.prototype.ngOnInit = function () {
        // Получение списка машин при загрузке страницы
        this.getCars();
    };
    // Получение списка машин
    AddAnalogueComponent.prototype.getCars = function () {
        var _this = this;
        this._apiService.getCars()
            .subscribe(function (data) {
            _this.markName = data;
        }, function (error) {
            _this._flashMessagesService.showMessage(error).subscribe(function (data) { return _this.message = data; });
        });
    };
    // Получение Id выбранной машины. Получение списка моделей
    AddAnalogueComponent.prototype.passCarId = function (event) {
        var _this = this;
        this.carId = event.target.value;
        this._apiService.getModelName(this.carId)
            .subscribe(function (data) {
            _this.modelName = data;
        }, function (error) {
            _this._flashMessagesService.showMessage(error).subscribe(function (data) { return _this.message = data; });
        });
    };
    // Получение Id выбранной модели. Получение списка модификаций
    AddAnalogueComponent.prototype.passModelId = function (event) {
        var _this = this;
        this.modelId = event.target.value;
        this._apiService.getModificationName(this.carId, this.modelId)
            .subscribe(function (data) {
            _this.modifications = data;
        }, function (error) {
            _this._flashMessagesService.showMessage(error).subscribe(function (data) { return _this.message = data; });
        });
    };
    // Получение Id выбранной модификации. Получение списка агрегатов
    AddAnalogueComponent.prototype.passModificationId = function (event) {
        var _this = this;
        this.unitId = event.target.value;
        this._apiService.getPartsList(this.carId, this.modelId, this.unitId)
            .subscribe(function (data) {
            _this.units = data;
        }, function (error) {
            _this._flashMessagesService.showMessage(error).subscribe(function (data) { return _this.message = data; });
        });
    };
    // Получение Id выбранного агрегата. Получение списка деталей
    AddAnalogueComponent.prototype.passUnitId = function (event) {
        var _this = this;
        this.detailId = event.target.value;
        this._apiService.getDetailsItem(this.carId, this.modelId, this.unitId, this.detailId)
            .subscribe(function (data) {
            _this.details = data;
        }, function (error) {
            _this._flashMessagesService.showMessage(error).subscribe(function (data) { return _this.message = data; });
        });
    };
    // Получение Id детали. Получение списка составляющих детали.
    AddAnalogueComponent.prototype.passDetailId = function (event) {
        var _this = this;
        this.itemId = event.target.value;
        this._apiService.getItem(this.carId, this.modelId, this.unitId, this.detailId, this.itemId)
            .subscribe(function (data) {
            _this.analogues = data;
        }, function (error) {
            _this._flashMessagesService.showMessage(error).subscribe(function (data) { return _this.message = data; });
        });
    };
    // Получение Id оригинального номера.
    AddAnalogueComponent.prototype.passOriginalId = function (event) {
        this.originalId = event.target.value;
    };
    // Создать новый объект для аналогов детали, передать сервису,
    //  отправить на сервер, очистить форму, вывести сообщение об успехе или неудаче
    AddAnalogueComponent.prototype.addItems = function () {
        var _this = this;
        var analogue = {
            analogueName: this.analogueName,
            analogueNum: this.analogueNum
        };
        if (this.carId && this.modelId && this.unitId && this.detailId && this.itemId && this.originalId) {
            this._apiService.createAnalogue(this.carId, this.modelId, this.unitId, this.detailId, this.itemId, this.originalId, analogue)
                .subscribe(function (data) {
                _this._flashMessagesService.showMessage('Данные успешно добавлены', 'success', 3000).subscribe(function (msg) {
                    _this.message = msg;
                });
            }, function (error) {
                _this._flashMessagesService.showMessage(error).subscribe(function (data) { return _this.message = data; });
            });
            this.analogueName = '';
            this.analogueNum = '';
        }
        else {
            this._flashMessagesService.showMessage('Выберите данные автомобиля').subscribe(function (data) { return _this.message = data; });
        }
    };
    AddAnalogueComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-add-analogue',
            template: __webpack_require__(/*! ./add-analogue.component.html */ "./src/app/modules/add-car/add-analogue/add-analogue.component.html"),
            styles: [__webpack_require__(/*! ./add-analogue.component.css */ "./src/app/modules/add-car/add-analogue/add-analogue.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"],
            src_app_services_flash_message_service__WEBPACK_IMPORTED_MODULE_3__["FlashMessageService"]])
    ], AddAnalogueComponent);
    return AddAnalogueComponent;
}());



/***/ }),

/***/ "./src/app/modules/add-car/add-car-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/modules/add-car/add-car-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: AddCarRoutingModule, routingComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCarRoutingModule", function() { return AddCarRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routingComponents", function() { return routingComponents; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _add_car_add_car_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-car/add-car.component */ "./src/app/modules/add-car/add-car/add-car.component.ts");
/* harmony import */ var _add_model_add_model_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-model/add-model.component */ "./src/app/modules/add-car/add-model/add-model.component.ts");
/* harmony import */ var _add_modification_add_modification_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-modification/add-modification.component */ "./src/app/modules/add-car/add-modification/add-modification.component.ts");
/* harmony import */ var _add_unit_add_unit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-unit/add-unit.component */ "./src/app/modules/add-car/add-unit/add-unit.component.ts");
/* harmony import */ var _add_detail_add_detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./add-detail/add-detail.component */ "./src/app/modules/add-car/add-detail/add-detail.component.ts");
/* harmony import */ var _add_detail_item_add_detail_item_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./add-detail-item/add-detail-item.component */ "./src/app/modules/add-car/add-detail-item/add-detail-item.component.ts");
/* harmony import */ var _add_analogue_add_analogue_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./add-analogue/add-analogue.component */ "./src/app/modules/add-car/add-analogue/add-analogue.component.ts");
/* harmony import */ var _edit_mark_edit_mark_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./edit-mark/edit-mark.component */ "./src/app/modules/add-car/edit-mark/edit-mark.component.ts");
/* harmony import */ var _edit_model_edit_model_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./edit-model/edit-model.component */ "./src/app/modules/add-car/edit-model/edit-model.component.ts");
/* harmony import */ var _edit_modification_edit_modification_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./edit-modification/edit-modification.component */ "./src/app/modules/add-car/edit-modification/edit-modification.component.ts");
/* harmony import */ var _edit_unit_edit_unit_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./edit-unit/edit-unit.component */ "./src/app/modules/add-car/edit-unit/edit-unit.component.ts");
/* harmony import */ var _edit_detail_edit_detail_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./edit-detail/edit-detail.component */ "./src/app/modules/add-car/edit-detail/edit-detail.component.ts");
/* harmony import */ var _edit_detail_item_edit_detail_item_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./edit-detail-item/edit-detail-item.component */ "./src/app/modules/add-car/edit-detail-item/edit-detail-item.component.ts");
/* harmony import */ var _edit_detail_analogue_edit_detail_analogue_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./edit-detail-analogue/edit-detail-analogue.component */ "./src/app/modules/add-car/edit-detail-analogue/edit-detail-analogue.component.ts");
/* harmony import */ var _add_imgmark_add_imgmark_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./add-imgmark/add-imgmark.component */ "./src/app/modules/add-car/add-imgmark/add-imgmark.component.ts");
/* harmony import */ var _add_imgmodel_add_imgmodel_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./add-imgmodel/add-imgmodel.component */ "./src/app/modules/add-car/add-imgmodel/add-imgmodel.component.ts");
/* harmony import */ var _add_imgmodification_add_imgmodification_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./add-imgmodification/add-imgmodification.component */ "./src/app/modules/add-car/add-imgmodification/add-imgmodification.component.ts");
/* harmony import */ var _add_imgunit_add_imgunit_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./add-imgunit/add-imgunit.component */ "./src/app/modules/add-car/add-imgunit/add-imgunit.component.ts");
/* harmony import */ var _add_imgdetail_add_imgdetail_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./add-imgdetail/add-imgdetail.component */ "./src/app/modules/add-car/add-imgdetail/add-imgdetail.component.ts");
/* harmony import */ var _add_imgitem_add_imgitem_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./add-imgitem/add-imgitem.component */ "./src/app/modules/add-car/add-imgitem/add-imgitem.component.ts");
/* harmony import */ var _add_imgitemdetail_add_imgitemdetail_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./add-imgitemdetail/add-imgitemdetail.component */ "./src/app/modules/add-car/add-imgitemdetail/add-imgitemdetail.component.ts");
/* harmony import */ var _edit_imgmark_edit_imgmark_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./edit-imgmark/edit-imgmark.component */ "./src/app/modules/add-car/edit-imgmark/edit-imgmark.component.ts");
/* harmony import */ var _edit_imgmodel_edit_imgmodel_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./edit-imgmodel/edit-imgmodel.component */ "./src/app/modules/add-car/edit-imgmodel/edit-imgmodel.component.ts");
/* harmony import */ var _edit_imgmodification_edit_imgmodification_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./edit-imgmodification/edit-imgmodification.component */ "./src/app/modules/add-car/edit-imgmodification/edit-imgmodification.component.ts");
/* harmony import */ var _edit_imgunit_edit_imgunit_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./edit-imgunit/edit-imgunit.component */ "./src/app/modules/add-car/edit-imgunit/edit-imgunit.component.ts");
/* harmony import */ var _edit_imgdetail_edit_imgdetail_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./edit-imgdetail/edit-imgdetail.component */ "./src/app/modules/add-car/edit-imgdetail/edit-imgdetail.component.ts");
/* harmony import */ var _edit_imgitem_edit_imgitem_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./edit-imgitem/edit-imgitem.component */ "./src/app/modules/add-car/edit-imgitem/edit-imgitem.component.ts");
/* harmony import */ var _edit_imgitemdetail_edit_imgitemdetail_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./edit-imgitemdetail/edit-imgitemdetail.component */ "./src/app/modules/add-car/edit-imgitemdetail/edit-imgitemdetail.component.ts");
/* harmony import */ var _add_main_add_main_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./add-main/add-main.component */ "./src/app/modules/add-car/add-main/add-main.component.ts");
/* harmony import */ var _edit_main_edit_main_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./edit-main/edit-main.component */ "./src/app/modules/add-car/edit-main/edit-main.component.ts");
/* harmony import */ var _add_imgmain_add_imgmain_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./add-imgmain/add-imgmain.component */ "./src/app/modules/add-car/add-imgmain/add-imgmain.component.ts");
/* harmony import */ var _edit_imgmain_edit_imgmain_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./edit-imgmain/edit-imgmain.component */ "./src/app/modules/add-car/edit-imgmain/edit-imgmain.component.ts");
/* harmony import */ var _add_editing_add_editing_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./add-editing/add-editing.component */ "./src/app/modules/add-car/add-editing/add-editing.component.ts");




































// Роуты дял Add компонентов (Страница Home)
var addRoutes = [
    { path: 'mark', component: _add_car_add_car_component__WEBPACK_IMPORTED_MODULE_3__["AddCarComponent"] },
    { path: 'model', component: _add_model_add_model_component__WEBPACK_IMPORTED_MODULE_4__["AddModelComponent"] },
    { path: 'modification', component: _add_modification_add_modification_component__WEBPACK_IMPORTED_MODULE_5__["AddModificationComponent"] },
    { path: 'unit', component: _add_unit_add_unit_component__WEBPACK_IMPORTED_MODULE_6__["AddUnitComponent"] },
    { path: 'detail', component: _add_detail_add_detail_component__WEBPACK_IMPORTED_MODULE_7__["AddDetailComponent"] },
    { path: 'item', component: _add_detail_item_add_detail_item_component__WEBPACK_IMPORTED_MODULE_8__["AddDetailItemComponent"] },
    { path: 'analogue', component: _add_analogue_add_analogue_component__WEBPACK_IMPORTED_MODULE_9__["AddAnalogueComponent"] }
];
// Роуты для edit компонентов (Страница Home)
var editRoutes = [
    { path: 'mark', component: _edit_mark_edit_mark_component__WEBPACK_IMPORTED_MODULE_10__["EditMarkComponent"] },
    { path: 'model', component: _edit_model_edit_model_component__WEBPACK_IMPORTED_MODULE_11__["EditModelComponent"] },
    { path: 'modification', component: _edit_modification_edit_modification_component__WEBPACK_IMPORTED_MODULE_12__["EditModificationComponent"] },
    { path: 'unit', component: _edit_unit_edit_unit_component__WEBPACK_IMPORTED_MODULE_13__["EditUnitComponent"] },
    { path: 'detail', component: _edit_detail_edit_detail_component__WEBPACK_IMPORTED_MODULE_14__["EditDetailComponent"] },
    { path: 'item', component: _edit_detail_item_edit_detail_item_component__WEBPACK_IMPORTED_MODULE_15__["EditDetailItemComponent"] },
    { path: 'analogue', component: _edit_detail_analogue_edit_detail_analogue_component__WEBPACK_IMPORTED_MODULE_16__["EditDetailAnalogueComponent"] }
];
// Роуты дял Add компонентов (Страница Catalogs)
var addImgRoutes = [
    { path: 'mark', component: _add_imgmark_add_imgmark_component__WEBPACK_IMPORTED_MODULE_17__["AddImgmarkComponent"] },
    { path: 'model', component: _add_imgmodel_add_imgmodel_component__WEBPACK_IMPORTED_MODULE_18__["AddImgmodelComponent"] },
    { path: 'modification', component: _add_imgmodification_add_imgmodification_component__WEBPACK_IMPORTED_MODULE_19__["AddImgmodificationComponent"] },
    { path: 'unit', component: _add_imgunit_add_imgunit_component__WEBPACK_IMPORTED_MODULE_20__["AddImgunitComponent"] },
    { path: 'detail', component: _add_imgdetail_add_imgdetail_component__WEBPACK_IMPORTED_MODULE_21__["AddImgdetailComponent"] },
    { path: 'item', component: _add_imgitem_add_imgitem_component__WEBPACK_IMPORTED_MODULE_22__["AddImgitemComponent"] },
    { path: 'itemdetail', component: _add_imgitemdetail_add_imgitemdetail_component__WEBPACK_IMPORTED_MODULE_23__["AddImgitemdetailComponent"] }
];
// Роуты для edit компонентов (Страница Catalogs)
var editImgRoutes = [
    { path: 'mark', component: _edit_imgmark_edit_imgmark_component__WEBPACK_IMPORTED_MODULE_24__["EditImgmarkComponent"] },
    { path: 'model', component: _edit_imgmodel_edit_imgmodel_component__WEBPACK_IMPORTED_MODULE_25__["EditImgmodelComponent"] },
    { path: 'modification', component: _edit_imgmodification_edit_imgmodification_component__WEBPACK_IMPORTED_MODULE_26__["EditImgmodificationComponent"] },
    { path: 'unit', component: _edit_imgunit_edit_imgunit_component__WEBPACK_IMPORTED_MODULE_27__["EditImgunitComponent"] },
    { path: 'detail', component: _edit_imgdetail_edit_imgdetail_component__WEBPACK_IMPORTED_MODULE_28__["EditImgdetailComponent"] },
    { path: 'item', component: _edit_imgitem_edit_imgitem_component__WEBPACK_IMPORTED_MODULE_29__["EditImgitemComponent"] },
    { path: 'itemdetail', component: _edit_imgitemdetail_edit_imgitemdetail_component__WEBPACK_IMPORTED_MODULE_30__["EditImgitemdetailComponent"] }
];
// Роуты на страницы добавления и редактирования данных
var addEditingRoutes = [
    { path: 'addmain', component: _add_main_add_main_component__WEBPACK_IMPORTED_MODULE_31__["AddMainComponent"], children: addRoutes },
    { path: 'editmain', component: _edit_main_edit_main_component__WEBPACK_IMPORTED_MODULE_32__["EditMainComponent"], children: editRoutes },
    { path: 'addimgmain', component: _add_imgmain_add_imgmain_component__WEBPACK_IMPORTED_MODULE_33__["AddImgmainComponent"], children: addImgRoutes },
    { path: 'editimgmain', component: _edit_imgmain_edit_imgmain_component__WEBPACK_IMPORTED_MODULE_34__["EditImgmainComponent"], children: editImgRoutes }
];
// Основные роуты модуля
var addEditRoutes = [
    { path: '', component: _add_editing_add_editing_component__WEBPACK_IMPORTED_MODULE_35__["AddEditingComponent"], children: addEditingRoutes }
];
var AddCarRoutingModule = /** @class */ (function () {
    function AddCarRoutingModule() {
    }
    AddCarRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(addEditRoutes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
            ]
        })
    ], AddCarRoutingModule);
    return AddCarRoutingModule;
}());

var routingComponents = [
    _add_editing_add_editing_component__WEBPACK_IMPORTED_MODULE_35__["AddEditingComponent"],
    _edit_imgmain_edit_imgmain_component__WEBPACK_IMPORTED_MODULE_34__["EditImgmainComponent"],
    _add_imgmain_add_imgmain_component__WEBPACK_IMPORTED_MODULE_33__["AddImgmainComponent"],
    _edit_main_edit_main_component__WEBPACK_IMPORTED_MODULE_32__["EditMainComponent"],
    _add_main_add_main_component__WEBPACK_IMPORTED_MODULE_31__["AddMainComponent"],
    _edit_imgitemdetail_edit_imgitemdetail_component__WEBPACK_IMPORTED_MODULE_30__["EditImgitemdetailComponent"],
    _edit_imgitem_edit_imgitem_component__WEBPACK_IMPORTED_MODULE_29__["EditImgitemComponent"],
    _edit_imgdetail_edit_imgdetail_component__WEBPACK_IMPORTED_MODULE_28__["EditImgdetailComponent"],
    _edit_imgunit_edit_imgunit_component__WEBPACK_IMPORTED_MODULE_27__["EditImgunitComponent"],
    _edit_imgmodification_edit_imgmodification_component__WEBPACK_IMPORTED_MODULE_26__["EditImgmodificationComponent"],
    _edit_imgmodel_edit_imgmodel_component__WEBPACK_IMPORTED_MODULE_25__["EditImgmodelComponent"],
    _edit_imgmark_edit_imgmark_component__WEBPACK_IMPORTED_MODULE_24__["EditImgmarkComponent"],
    _add_imgitemdetail_add_imgitemdetail_component__WEBPACK_IMPORTED_MODULE_23__["AddImgitemdetailComponent"],
    _add_imgitem_add_imgitem_component__WEBPACK_IMPORTED_MODULE_22__["AddImgitemComponent"],
    _add_imgdetail_add_imgdetail_component__WEBPACK_IMPORTED_MODULE_21__["AddImgdetailComponent"],
    _add_imgunit_add_imgunit_component__WEBPACK_IMPORTED_MODULE_20__["AddImgunitComponent"],
    _add_imgmodification_add_imgmodification_component__WEBPACK_IMPORTED_MODULE_19__["AddImgmodificationComponent"],
    _add_imgmodel_add_imgmodel_component__WEBPACK_IMPORTED_MODULE_18__["AddImgmodelComponent"],
    _add_imgmark_add_imgmark_component__WEBPACK_IMPORTED_MODULE_17__["AddImgmarkComponent"],
    _edit_detail_analogue_edit_detail_analogue_component__WEBPACK_IMPORTED_MODULE_16__["EditDetailAnalogueComponent"],
    _edit_detail_item_edit_detail_item_component__WEBPACK_IMPORTED_MODULE_15__["EditDetailItemComponent"],
    _edit_detail_edit_detail_component__WEBPACK_IMPORTED_MODULE_14__["EditDetailComponent"],
    _edit_unit_edit_unit_component__WEBPACK_IMPORTED_MODULE_13__["EditUnitComponent"],
    _edit_modification_edit_modification_component__WEBPACK_IMPORTED_MODULE_12__["EditModificationComponent"],
    _edit_model_edit_model_component__WEBPACK_IMPORTED_MODULE_11__["EditModelComponent"],
    _edit_mark_edit_mark_component__WEBPACK_IMPORTED_MODULE_10__["EditMarkComponent"],
    _add_analogue_add_analogue_component__WEBPACK_IMPORTED_MODULE_9__["AddAnalogueComponent"],
    _add_detail_item_add_detail_item_component__WEBPACK_IMPORTED_MODULE_8__["AddDetailItemComponent"],
    _add_detail_add_detail_component__WEBPACK_IMPORTED_MODULE_7__["AddDetailComponent"],
    _add_unit_add_unit_component__WEBPACK_IMPORTED_MODULE_6__["AddUnitComponent"],
    _add_modification_add_modification_component__WEBPACK_IMPORTED_MODULE_5__["AddModificationComponent"],
    _add_model_add_model_component__WEBPACK_IMPORTED_MODULE_4__["AddModelComponent"],
    _add_car_add_car_component__WEBPACK_IMPORTED_MODULE_3__["AddCarComponent"]
];


/***/ }),

/***/ "./src/app/modules/add-car/add-car.module.ts":
/*!***************************************************!*\
  !*** ./src/app/modules/add-car/add-car.module.ts ***!
  \***************************************************/
/*! exports provided: AddCarModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCarModule", function() { return AddCarModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_token_interceptor_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/token-interceptor.service */ "./src/app/services/token-interceptor.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _add_car_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-car-routing.module */ "./src/app/modules/add-car/add-car-routing.module.ts");
/* harmony import */ var src_app_services_flash_message_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/flash-message.service */ "./src/app/services/flash-message.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");









var AddCarModule = /** @class */ (function () {
    function AddCarModule() {
    }
    AddCarModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _add_car_routing_module__WEBPACK_IMPORTED_MODULE_6__["routingComponents"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5__["FlashMessagesModule"].forRoot(),
                _add_car_routing_module__WEBPACK_IMPORTED_MODULE_6__["AddCarRoutingModule"]
            ],
            providers: [
                src_app_services_flash_message_service__WEBPACK_IMPORTED_MODULE_7__["FlashMessageService"],
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HTTP_INTERCEPTORS"],
                    useClass: _services_token_interceptor_service__WEBPACK_IMPORTED_MODULE_1__["TokenInterceptorService"],
                    multi: true
                }
            ]
        })
    ], AddCarModule);
    return AddCarModule;
}());



/***/ }),

/***/ "./src/app/modules/add-car/add-car/add-car.component.css":
/*!***************************************************************!*\
  !*** ./src/app/modules/add-car/add-car/add-car.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-group {\r\n    margin-bottom: 5px;\r\n}\r\n\r\nsmall {\r\n    color: #d9534f;\r\n    margin-bottom: 7px;\r\n    display: block;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tb2R1bGVzL2FkZC1jYXIvYWRkLWNhci9hZGQtY2FyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQkFBbUI7Q0FDdEI7O0FBRUQ7SUFDSSxlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLGVBQWU7Q0FDbEIiLCJmaWxlIjoiYXBwL21vZHVsZXMvYWRkLWNhci9hZGQtY2FyL2FkZC1jYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtLWdyb3VwIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxufVxyXG5cclxuc21hbGwge1xyXG4gICAgY29sb3I6ICNkOTUzNGY7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA3cHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/modules/add-car/add-car/add-car.component.html":
/*!****************************************************************!*\
  !*** ./src/app/modules/add-car/add-car/add-car.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Вывод флеш-сщщбщений -->\r\n<div class=\"alert alert-{{message.type}}\" *ngIf=\"message\">{{message.text}}</div>\r\n<!-- Форма -->\r\n<form #form=\"ngForm\" novalidate (ngSubmit)=\"addCar()\">\r\n  <!-- Блок добавления данных -->\r\n  <div class=\"form-group\">\r\n    <label>Внесите название марки автомобиля</label>\r\n    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"markName\" name=\"markName\" required #name=\"ngModel\"\r\n      [class.is-invalid]=\"name.invalid && name.touched\">\r\n    <small *ngIf=\"name.invalid && name.touched\">Заполните форму</small>\r\n  </div>\r\n  <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"form.form.invalid\">Добавить</button>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/modules/add-car/add-car/add-car.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/modules/add-car/add-car/add-car.component.ts ***!
  \**************************************************************/
/*! exports provided: AddCarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCarComponent", function() { return AddCarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_flash_message_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/flash-message.service */ "./src/app/services/flash-message.service.ts");




var AddCarComponent = /** @class */ (function () {
    function AddCarComponent(_apiService, _flashMessagesService) {
        this._apiService = _apiService;
        this._flashMessagesService = _flashMessagesService;
    }
    AddCarComponent.prototype.ngOnInit = function () {
    };
    // Создать новый объект машины, передать название марки, отправить на сервер, очистить форму, вывести сообщение
    AddCarComponent.prototype.addCar = function () {
        var _this = this;
        var car = {
            markName: this.markName
        };
        this._apiService.createCar(car)
            .subscribe(function (data) {
            _this._flashMessagesService.showMessage('Данные успешно добавлены', 'success', 3000).subscribe(function (msg) {
                _this.message = msg;
            });
        }, function (error) {
            _this._flashMessagesService.showMessage(error).subscribe(function (data) { return _this.message = data; });
        });
        this.markName = '';
    };
    AddCarComponent.prototype.ngOnDestroy = function () {
    };
    AddCarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-add-car',
            template: __webpack_require__(/*! ./add-car.component.html */ "./src/app/modules/add-car/add-car/add-car.component.html"),
            styles: [__webpack_require__(/*! ./add-car.component.css */ "./src/app/modules/add-car/add-car/add-car.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"],
            src_app_services_flash_message_service__WEBPACK_IMPORTED_MODULE_3__["FlashMessageService"]])
    ], AddCarComponent);
    return AddCarComponent;
}());



/***/ }),

/***/ "./src/app/modules/add-car/add-detail-item/add-detail-item.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/add-car/add-detail-item/add-detail-item.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input {\r\n    margin-bottom: 7px;\r\n}\r\n\r\nselect {\r\n    margin-bottom: 10px;\r\n}\r\n\r\ntextarea {\r\n    margin-bottom: 7px;\r\n}\r\n\r\n.form-group {\r\n    margin-bottom: 5px;\r\n}\r\n\r\nsmall {\r\n    color: #d9534f;\r\n    margin-bottom: 7px;\r\n    display: block;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tb2R1bGVzL2FkZC1jYXIvYWRkLWRldGFpbC1pdGVtL2FkZC1kZXRhaWwtaXRlbS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUJBQW1CO0NBQ3RCOztBQUVEO0lBQ0ksb0JBQW9CO0NBQ3ZCOztBQUVEO0lBQ0ksbUJBQW1CO0NBQ3RCOztBQUVEO0lBQ0ksbUJBQW1CO0NBQ3RCOztBQUVEO0lBQ0ksZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixlQUFlO0NBQ2xCIiwiZmlsZSI6ImFwcC9tb2R1bGVzL2FkZC1jYXIvYWRkLWRldGFpbC1pdGVtL2FkZC1kZXRhaWwtaXRlbS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW5wdXQge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogN3B4O1xyXG59XHJcblxyXG5zZWxlY3Qge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxudGV4dGFyZWEge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogN3B4O1xyXG59XHJcblxyXG4uZm9ybS1ncm91cCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbn1cclxuXHJcbnNtYWxsIHtcclxuICAgIGNvbG9yOiAjZDk1MzRmO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogN3B4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/modules/add-car/add-detail-item/add-detail-item.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/modules/add-car/add-detail-item/add-detail-item.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Вывод флеш-сщщбщений -->\r\n<div class=\"alert alert-{{message.type}}\" *ngIf=\"message\">{{message.text}}</div>\r\n<form #form=\"ngForm\" novalidate (ngSubmit)=\"addItems()\">\r\n  <div class=\"form-group\">\r\n    <label>Марка</label>\r\n    <!-- Передача ID выбранной марки в компонент -->\r\n    <select (change)=\"passCarId($event)\" class=\"custom-select\" name=\"carItem\" ngModel required>\r\n      <option></option>\r\n      <option *ngFor=\"let carItem of markName\" [value]=\"carItem._id\">{{carItem.markName}}</option>\r\n    </select>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label>Модель</label>\r\n    <!-- Передача ID выбранной модели в компонент -->\r\n    <select (change)=\"passModelId($event)\" class=\"custom-select\" name=\"model\" ngModel required>\r\n      <option></option>\r\n      <option *ngFor=\"let model of modelName\" [value]=\"model._id\">{{model.modelsName}}</option>\r\n    </select>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label>Модификация</label>\r\n    <!-- Передача ID выбранной модификации в компонент -->\r\n    <select (change)=\"passModificationId($event)\" class=\"custom-select\" name=\"modification\" ngModel required>\r\n      <option></option>\r\n      <option *ngFor=\"let modification of modifications\" [value]=\"modification._id\">{{modification.modificationName}}</option>\r\n    </select>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label>Агрегат</label>\r\n    <!-- Передача ID выбранного агрегата в компонент -->\r\n    <select (change)=\"passUnitId($event)\" class=\"custom-select\" name=\"unit\" ngModel required>\r\n      <option></option>\r\n      <option *ngFor=\"let unit of units\" [value]=\"unit._id\">{{unit.unitName}}</option>\r\n    </select>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label>Деталь</label>\r\n    <!-- Передача ID выбранной детали в компонент -->\r\n    <select (change)=\"passDetailId($event)\" class=\"custom-select\" name=\"detail\" ngModel required>\r\n      <option></option>\r\n      <option *ngFor=\"let detail of details\" [value]=\"detail._id\">{{detail.detailName}}</option>\r\n    </select>\r\n  </div>\r\n  <!-- Блок внесения данных -->\r\n  <div class=\"form-group\">\r\n    <p>Внесите данные</p>\r\n    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"originalNumber\" name=\"originalNumber\" required placeholder=\"Внесите оригинальные номера через запятую\"\r\n      #number=\"ngModel\" [class.is-invalid]=\"number.invalid && number.touched\">\r\n    <small *ngIf=\"number.invalid && number.touched\">Заполните форму</small>\r\n    <textarea type=\"text\" class=\"form-control\" [(ngModel)]=\"note\" name=\"note\" placeholder=\"Добавьте примечание\"></textarea>\r\n    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"picture\" name=\"picture\" placeholder=\"Внесите ссылку на изображение\">\r\n  </div>\r\n  <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"form.form.invalid\">Добавить</button>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/modules/add-car/add-detail-item/add-detail-item.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/modules/add-car/add-detail-item/add-detail-item.component.ts ***!
  \******************************************************************************/
/*! exports provided: AddDetailItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddDetailItemComponent", function() { return AddDetailItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var src_app_services_flash_message_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/flash-message.service */ "./src/app/services/flash-message.service.ts");




var AddDetailItemComponent = /** @class */ (function () {
    function AddDetailItemComponent(_apiService, _flashMessagesService) {
        this._apiService = _apiService;
        this._flashMessagesService = _flashMessagesService;
        this.markName = [];
        this.modelName = [];
        this.modifications = [];
        this.units = [];
        this.details = [];
        this.originalNumber = [];
    }
    AddDetailItemComponent.prototype.ngOnInit = function () {
        // Получение списка машин при загрузке страницы
        this.getCars();
    };
    // Получение списка машин
    AddDetailItemComponent.prototype.getCars = function () {
        var _this = this;
        this._apiService.getCars()
            .subscribe(function (data) {
            _this.markName = data;
        }, function (error) {
            _this._flashMessagesService.showMessage(error).subscribe(function (data) { return _this.message = data; });
        });
    };
    // Получение Id выбранной машины. Получение списка моделей
    AddDetailItemComponent.prototype.passCarId = function (event) {
        var _this = this;
        this.carId = event.target.value;
        this._apiService.getModelName(this.carId)
            .subscribe(function (data) {
            _this.modelName = data;
        }, function (error) {
            _this._flashMessagesService.showMessage(error).subscribe(function (data) { return _this.message = data; });
        });
    };
    // Получение Id выбранной модели. Получение списка модификаций
    AddDetailItemComponent.prototype.passModelId = function (event) {
        var _this = this;
        this.modelId = event.target.value;
        this._apiService.getModificationName(this.carId, this.modelId)
            .subscribe(function (data) {
            _this.modifications = data;
        }, function (error) {
            _this._flashMessagesService.showMessage(error).subscribe(function (data) { return _this.message = data; });
        });
    };
    // Получение Id выбранной модификации. Получение списка агрегатов
    AddDetailItemComponent.prototype.passModificationId = function (event) {
        var _this = this;
        this.unitId = event.target.value;
        this._apiService.getPartsList(this.carId, this.modelId, this.unitId)
            .subscribe(function (data) {
            _this.units = data;
        }, function (error) {
            _this._flashMessagesService.showMessage(error).subscribe(function (data) { return _this.message = data; });
        });
    };
    // Получение Id выбранного агрегата. Получение списка деталей
    AddDetailItemComponent.prototype.passUnitId = function (event) {
        var _this = this;
        this.detailId = event.target.value;
        this._apiService.getDetailsItem(this.carId, this.modelId, this.unitId, this.detailId)
            .subscribe(function (data) {
            _this.details = data;
        }, function (error) {
            _this._flashMessagesService.showMessage(error).subscribe(function (data) { return _this.message = data; });
        });
    };
    // Получение Id детали. Получение списка составляющих детали.
    AddDetailItemComponent.prototype.passDetailId = function (event) {
        var _this = this;
        this.itemId = event.target.value;
        this._apiService.getItem(this.carId, this.modelId, this.unitId, this.detailId, this.itemId)
            .subscribe(function (data) { }, function (error) {
            _this._flashMessagesService.showMessage(error).subscribe(function (data) { return _this.message = data; });
        });
    };
    // Создать новый объект для дынных детали, передать сервису,
    //  отправить на сервер, очистить форму, вывести сообщение об успехе или неудаче
    AddDetailItemComponent.prototype.addItems = function () {
        var _this = this;
        var item = {
            originalNumber: this.originalNumber,
            note: this.note,
            picture: this.picture
        };
        if (this.carId && this.modelId && this.unitId && this.detailId && this.itemId) {
            this._apiService.createDetailItem(this.carId, this.modelId, this.unitId, this.detailId, this.itemId, item)
                .subscribe(function (data) {
                _this._flashMessagesService.showMessage('Данные успешно добавлены', 'success', 3000).subscribe(function (msg) {
                    _this.message = msg;
                });
            }, function (error) {
                _this._flashMessagesService.showMessage(error).subscribe(function (data) { return _this.message = data; });
            });
            this.originalNumber = [];
            this.note = '';
            this.picture = '';
        }
        else {
            this._flashMessagesService.showMessage('Выберите данные автомобиля').subscribe(function (data) { return _this.message = data; });
        }
    };
    AddDetailItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-detail-item',
            template: __webpack_require__(/*! ./add-detail-item.component.html */ "./src/app/modules/add-car/add-detail-item/add-detail-item.component.html"),
            styles: [__webpack_require__(/*! ./add-detail-item.component.css */ "./src/app/modules/add-car/add-detail-item/add-detail-item.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"],
            src_app_services_flash_message_service__WEBPACK_IMPORTED_MODULE_3__["FlashMessageService"]])
    ], AddDetailItemComponent);
    return AddDetailItemComponent;
}());



/***/ }),

/***/ "./src/app/modules/add-car/add-detail/add-detail.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/modules/add-car/add-detail/add-detail.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "select {\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.form-group {\r\n    margin-bottom: 5px;\r\n}\r\n\r\nsmall {\r\n    color: #d9534f;\r\n    margin-bottom: 7px;\r\n    display: block;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tb2R1bGVzL2FkZC1jYXIvYWRkLWRldGFpbC9hZGQtZGV0YWlsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxvQkFBb0I7Q0FDdkI7O0FBRUQ7SUFDSSxtQkFBbUI7Q0FDdEI7O0FBRUQ7SUFDSSxlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLGVBQWU7Q0FDbEIiLCJmaWxlIjoiYXBwL21vZHVsZXMvYWRkLWNhci9hZGQtZGV0YWlsL2FkZC1kZXRhaWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInNlbGVjdCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4uZm9ybS1ncm91cCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbn1cclxuXHJcbnNtYWxsIHtcclxuICAgIGNvbG9yOiAjZDk1MzRmO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogN3B4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/modules/add-car/add-detail/add-detail.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/modules/add-car/add-detail/add-detail.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Вывод флеш-сщщбщений -->\r\n<div class=\"alert alert-{{message.type}}\" *ngIf=\"message\">{{message.text}}</div>\r\n<form #form=\"ngForm\" novalidate (ngSubmit)=\"addDetail()\">\r\n  <div class=\"form-group\">\r\n    <label>Марка</label>\r\n    <!-- Передача ID выбранной марки в компонент -->\r\n    <select (change)=\"passCarId($event)\" class=\"custom-select\" name=\"carItem\" ngModel required>\r\n      <option></option>\r\n      <option *ngFor=\"let carItem of markName\" [value]=\"carItem._id\">{{carItem.markName}}</option>\r\n    </select>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label>Модель</label>\r\n    <!-- Передача ID выбранной модели в компонент -->\r\n    <select (change)=\"passModelId($event)\" class=\"custom-select\" name=\"model\" ngModel required>\r\n      <option></option>\r\n      <option *ngFor=\"let model of modelName\" [value]=\"model._id\">{{model.modelsName}}</option>\r\n    </select>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label>Модификация</label>\r\n    <!-- Передача ID выбранной модификации в компонент -->\r\n    <select (change)=\"passModificationId($event)\" class=\"custom-select\" name=\"modification\" ngModel required>\r\n      <option></option>\r\n      <option *ngFor=\"let modification of modifications\" [value]=\"modification._id\">{{modification.modificationName}}</option>\r\n    </select>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label>Агрегат</label>\r\n    <!-- Передача ID выбранного агрегата в компонент -->\r\n    <select (change)=\"passUnitId($event)\" class=\"custom-select\" name=\"unit\" ngModel required>\r\n      <option></option>\r\n      <option *ngFor=\"let unit of units\" [value]=\"unit._id\">{{unit.unitName}}</option>\r\n    </select>\r\n  </div>\r\n  <!-- Блок добавления данных -->\r\n  <div class=\"form-group\">\r\n    <label>Внесите название детали автомобиля</label>\r\n    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"detailName\" name=\"detailName\" required #name=\"ngModel\"\r\n      [class.is-invalid]=\"name.invalid && name.touched\">\r\n    <small *ngIf=\"name.invalid && name.touched\">Заполните форму</small>\r\n  </div>\r\n  <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"form.form.invalid\">Добавить</button>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/modules/add-car/add-detail/add-detail.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/modules/add-car/add-detail/add-detail.component.ts ***!
  \********************************************************************/
/*! exports provided: AddDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddDetailComponent", function() { return AddDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var src_app_services_flash_message_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/flash-message.service */ "./src/app/services/flash-message.service.ts");




var AddDetailComponent = /** @class */ (function () {
    function AddDetailComponent(_apiService, _flashMessagesService) {
        this._apiService = _apiService;
        this._flashMessagesService = _flashMessagesService;
        this.markName = [];
        this.modelName = [];
        this.modifications = [];
        this.units = [];
    }
    AddDetailComponent.prototype.ngOnInit = function () {
        // Получение списка машин при загрузке страницы
        this.getCars();
    };
    // Получение списка машин
    AddDetailComponent.prototype.getCars = function () {
        var _this = this;
        this._apiService.getCars()
            .subscribe(function (data) {
            _this.markName = data;
        }, function (error) {
            _this._flashMessagesService.showMessage(error).subscribe(function (data) { return _this.message = data; });
        });
    };
    // Получение Id выбранной машины. Получение списка моделей
    AddDetailComponent.prototype.passCarId = function (event) {
        var _this = this;
        this.carId = event.target.value;
        this._apiService.getModelName(this.carId)
            .subscribe(function (data) {
            _this.modelName = data;
        }, function (error) {
            _this._flashMessagesService.showMessage(error).subscribe(function (data) { return _this.message = data; });
        });
    };
    // Получение Id выбранной модели. Получение списка модификаций
    AddDetailComponent.prototype.passModelId = function (event) {
        var _this = this;
        this.modelId = event.target.value;
        this._apiService.getModificationName(this.carId, this.modelId)
            .subscribe(function (data) {
            _this.modifications = data;
        }, function (error) {
            _this._flashMessagesService.showMessage(error).subscribe(function (data) { return _this.message = data; });
        });
    };
    // Получение Id выбранной модификации. Получение списка агрегатов
    AddDetailComponent.prototype.passModificationId = function (event) {
        var _this = this;
        this.unitId = event.target.value;
        this._apiService.getPartsList(this.carId, this.modelId, this.unitId)
            .subscribe(function (data) {
            _this.units = data;
        }, function (error) {
            _this._flashMessagesService.showMessage(error).subscribe(function (data) { return _this.message = data; });
        });
    };
    // Получение Id выбранного агрегата.
    AddDetailComponent.prototype.passUnitId = function (event) {
        this.detailId = event.target.value;
    };
    // Создать новый объект детали, передать название детали,
    //  отправить на сервер, очистить форму, вывести сообщение об успехе или неудаче
    AddDetailComponent.prototype.addDetail = function () {
        var _this = this;
        var detail = {
            detailName: this.detailName
        };
        if (this.carId && this.modelId && this.unitId && this.detailId) {
            this._apiService.createDetail(this.carId, this.modelId, this.unitId, this.detailId, detail)
                .subscribe(function (data) {
                _this._flashMessagesService.showMessage('Данные успешно добавлены', 'success', 3000).subscribe(function (msg) {
                    _this.message = msg;
                });
            }, function (error) {
                _this._flashMessagesService.showMessage(error).subscribe(function (data) { return _this.message = data; });
            });
            this.detailName = '';
        }
        else {
            this._flashMessagesService.showMessage('Выберите данные автомобиля').subscribe(function (data) { return _this.message = data; });
        }
    };
    AddDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-detail',
            template: __webpack_require__(/*! ./add-detail.component.html */ "./src/app/modules/add-car/add-detail/add-detail.component.html"),
            styles: [__webpack_require__(/*! ./add-detail.component.css */ "./src/app/modules/add-car/add-detail/add-detail.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"],
            src_app_services_flash_message_service__WEBPACK_IMPORTED_MODULE_3__["FlashMessageService"]])
    ], AddDetailComponent);
    return AddDetailComponent;
}());



/***/ }),

/***/ "./src/app/modules/add-car/add-editing/add-editing.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/modules/add-car/add-editing/add-editing.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ul {\r\n    margin-bottom: 20px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tb2R1bGVzL2FkZC1jYXIvYWRkLWVkaXRpbmcvYWRkLWVkaXRpbmcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG9CQUFvQjtDQUN2QiIsImZpbGUiOiJhcHAvbW9kdWxlcy9hZGQtY2FyL2FkZC1lZGl0aW5nL2FkZC1lZGl0aW5nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ1bCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/modules/add-car/add-editing/add-editing.component.html":
/*!************************************************************************!*\
  !*** ./src/app/modules/add-car/add-editing/add-editing.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"nav nav-pills\">\r\n  <li class=\"nav-item\" [routerLinkActive]=\"['active']\">\r\n    <a class=\"nav-link\" [routerLink]=\"['/editing/addmain']\">Добавление данных (Home)</a>\r\n  </li>\r\n  <li class=\"nav-item\" [routerLinkActive]=\"['active']\">\r\n    <a class=\"nav-link\" [routerLink]=\"['/editing/editmain']\">Редактирование данных (Home)</a>\r\n  </li>\r\n  <li class=\"nav-item\" [routerLinkActive]=\"['active']\">\r\n    <a class=\"nav-link\" [routerLink]=\"['/editing/addimgmain']\">Добавление данных (Catalogs)</a>\r\n  </li>\r\n  <li class=\"nav-item\" [routerLinkActive]=\"['active']\">\r\n    <a class=\"nav-link\" [routerLink]=\"['/editing/editimgmain']\">Редактирование данных (Catalogs)</a>\r\n  </li>\r\n</ul>\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/modules/add-car/add-editing/add-editing.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/modules/add-car/add-editing/add-editing.component.ts ***!
  \**********************************************************************/
/*! exports provided: AddEditingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddEditingComponent", function() { return AddEditingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AddEditingComponent = /** @class */ (function () {
    function AddEditingComponent() {
    }
    AddEditingComponent.prototype.ngOnInit = function () {
    };
    AddEditingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-editing',
            template: __webpack_require__(/*! ./add-editing.component.html */ "./src/app/modules/add-car/add-editing/add-editing.component.html"),
            styles: [__webpack_require__(/*! ./add-editing.component.css */ "./src/app/modules/add-car/add-editing/add-editing.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AddEditingComponent);
    return AddEditingComponent;
}());



/***/ }),

/***/ "./src/app/modules/add-car/add-imgdetail/add-imgdetail.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/modules/add-car/add-imgdetail/add-imgdetail.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "select {\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.form-group {\r\n    margin-bottom: 5px;\r\n}\r\n\r\nsmall {\r\n    color: #d9534f;\r\n    margin-bottom: 7px;\r\n    display: block;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tb2R1bGVzL2FkZC1jYXIvYWRkLWltZ2RldGFpbC9hZGQtaW1nZGV0YWlsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxvQkFBb0I7Q0FDdkI7O0FBRUQ7SUFDSSxtQkFBbUI7Q0FDdEI7O0FBRUQ7SUFDSSxlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLGVBQWU7Q0FDbEIiLCJmaWxlIjoiYXBwL21vZHVsZXMvYWRkLWNhci9hZGQtaW1nZGV0YWlsL2FkZC1pbWdkZXRhaWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInNlbGVjdCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4uZm9ybS1ncm91cCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbn1cclxuXHJcbnNtYWxsIHtcclxuICAgIGNvbG9yOiAjZDk1MzRmO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogN3B4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/modules/add-car/add-imgdetail/add-imgdetail.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/modules/add-car/add-imgdetail/add-imgdetail.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Вывод флеш-сщщбщений -->\r\n<div class=\"alert alert-{{message.type}}\" *ngIf=\"message\">{{message.text}}</div>\r\n<form #form=\"ngForm\" novalidate (ngSubmit)=\"addDetail()\">\r\n  <div class=\"form-group\">\r\n    <label>Марка</label>\r\n    <!-- Передача ID выбранной марки в компонент -->\r\n    <select (change)=\"passCarId($event)\" class=\"custom-select\" name=\"carItem\" ngModel required>\r\n      <option></option>\r\n      <option *ngFor=\"let carItem of markName\" [value]=\"carItem._id\">{{carItem.markName}}</option>\r\n    </select>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label>Модель</label>\r\n    <!-- Передача ID выбранной модели в компонент -->\r\n    <select (change)=\"passModelId($event)\" class=\"custom-select\" name=\"model\" ngModel required>\r\n      <option></option>\r\n      <option *ngFor=\"let model of modelName\" [value]=\"model._id\">{{model.modelsName}}</option>\r\n    </select>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label>Модификация</label>\r\n    <!-- Передача ID выбранной модификации в компонент -->\r\n    <select (change)=\"passModificationId($event)\" class=\"custom-select\" name=\"modification\" ngModel required>\r\n      <option></option>\r\n      <option *ngFor=\"let modification of modifications\" [value]=\"modification._id\">{{modification.modificationName}}</option>\r\n    </select>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label>Агрегат</label>\r\n    <!-- Передача ID выбранного агрегата в компонент -->\r\n    <select (change)=\"passUnitId($event)\" class=\"custom-select\" name=\"unit\" ngModel required>\r\n      <option></option>\r\n      <option *ngFor=\"let unit of units\" [value]=\"unit._id\">{{unit.unitName}}</option>\r\n    </select>\r\n  </div>\r\n  <!-- Блок добавления данных -->\r\n  <div class=\"form-group\">\r\n    <label>Внесите данные</label>\r\n    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"detailImage\" name=\"detailImage\" required placeholder=\"Внесите ссылку на схему\"\r\n      #link=\"ngModel\" [class.is-invalid]=\"link.invalid && link.touched\">\r\n    <small *ngIf=\"name.invalid && name.touched\">Заполните форму</small>\r\n    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"detailName\" name=\"detailName\" required placeholder=\"Внесите название схемы\"\r\n      #name=\"ngModel\" [class.is-invalid]=\"name.invalid && name.touched\">\r\n    <small *ngIf=\"name.invalid && name.touched\">Заполните форму</small>\r\n  </div>\r\n  <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"form.form.invalid\">Добавить</button>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/modules/add-car/add-imgdetail/add-imgdetail.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/modules/add-car/add-imgdetail/add-imgdetail.component.ts ***!
  \**************************************************************************/
/*! exports provided: AddImgdetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddImgdetailComponent", function() { return AddImgdetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_api_img_catalog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../services/api-img-catalog.service */ "./src/app/services/api-img-catalog.service.ts");
/* harmony import */ var src_app_services_flash_message_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/flash-message.service */ "./src/app/services/flash-message.service.ts");




var AddImgdetailComponent = /** @class */ (function () {
    function AddImgdetailComponent(_apiImgcatalogService, _flashMessagesService) {
        this._apiImgcatalogService = _apiImgcatalogService;
        this._flashMessagesService = _flashMessagesService;
        this.markName = [];
        this.modelName = [];
        this.modifications = [];
        this.units = [];
    }
    AddImgdetailComponent.prototype.ngOnInit = function () {
        // Получение списка машин при загрузке страницы
        this.getCars();
    };
    // Получение списка машин
    AddImgdetailComponent.prototype.getCars = function () {
        var _this = this;
        this._apiImgcatalogService.getCars()
            .subscribe(function (data) {
            _this.markName = data;
        }, function (error) {
            _this._flashMessagesService.showMessage(error).subscribe(function (data) { return _this.message = data; });
        });
    };
    // Получение Id выбранной машины. Получение списка моделей
    AddImgdetailComponent.prototype.passCarId = function (event) {
        var _this = this;
        this.carId = event.target.value;
        this._apiImgcatalogService.getModel(this.carId)
            .subscribe(function (data) {
            _this.modelName = data;
        }, function (error) {
            _this._flashMessagesService.showMessage(error).subscribe(function (data) { return _this.message = data; });
        });
    };
    // Получение Id выбранной модели. Получение списка модификаций
    AddImgdetailComponent.prototype.passModelId = function (event) {
        var _this = this;
        this.modelId = event.target.value;
        this._apiImgcatalogService.getModification(this.carId, this.modelId)
            .subscribe(function (data) {
            _this.modifications = data;
        }, function (error) {
            _this._flashMessagesService.showMessage(error).subscribe(function (data) { return _this.message = data; });
        });
    };
    // Получение Id выбранной модификации. Получение списка агрегатов
    AddImgdetailComponent.prototype.passModificationId = function (event) {
        var _this = this;
        this.unitId = event.target.value;
        this._apiImgcatalogService.getUnit(this.carId, this.modelId, this.unitId)
            .subscribe(function (data) {
            _this.units = data;
        }, function (error) {
            _this._flashMessagesService.showMessage(error).subscribe(function (data) { return _this.message = data; });
        });
    };
    // Получение Id выбранного агрегата.
    AddImgdetailComponent.prototype.passUnitId = function (event) {
        this.detailId = event.target.value;
    };
    // Создать новый объект схемы, передать данные,
    //  отправить на сервер, очистить форму, вывести сообщение об успехе или неудаче
    AddImgdetailComponent.prototype.addDetail = function () {
        var _this = this;
        var detail = {
            detailName: this.detailName,
            detailImage: this.detailImage
        };
        if (this.carId && this.modelId && this.unitId && this.detailId) {
            this._apiImgcatalogService.createDetail(this.carId, this.modelId, this.unitId, this.detailId, detail)
                .subscribe(function (data) {
                _this._flashMessagesService.showMessage('Данные успешно добавлены', 'success', 3000).subscribe(function (msg) {
                    _this.message = msg;
                });
            }, function (error) {
                _this._flashMessagesService.showMessage(error).subscribe(function (data) { return _this.message = data; });
            });
            this.detailName = '';
            this.detailImage = '';
        }
        else {
            this._flashMessagesService.showMessage('Выберите данные автомобиля').subscribe(function (data) { return _this.message = data; });
        }
    };
    AddImgdetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-imgdetail',
            template: __webpack_require__(/*! ./add-imgdetail.component.html */ "./src/app/modules/add-car/add-imgdetail/add-imgdetail.component.html"),
            styles: [__webpack_require__(/*! ./add-imgdetail.component.css */ "./src/app/modules/add-car/add-imgdetail/add-imgdetail.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_api_img_catalog_service__WEBPACK_IMPORTED_MODULE_2__["ApiImgCatalogService"],
            src_app_services_flash_message_service__WEBPACK_IMPORTED_MODULE_3__["FlashMessageService"]])
    ], AddImgdetailComponent);
    return AddImgdetailComponent;
}());



/***/ }),

/***/ "./src/app/modules/add-car/add-imgitem/add-imgitem.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/modules/add-car/add-imgitem/add-imgitem.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input {\r\n    margin-bottom: 7px;\r\n}\r\n\r\nselect {\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.form-group {\r\n    margin-bottom: 0;\r\n}\r\n\r\nsmall {\r\n    color: #d9534f;\r\n    margin-bottom: 7px;\r\n    display: block;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tb2R1bGVzL2FkZC1jYXIvYWRkLWltZ2l0ZW0vYWRkLWltZ2l0ZW0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG1CQUFtQjtDQUN0Qjs7QUFFRDtJQUNJLG9CQUFvQjtDQUN2Qjs7QUFFRDtJQUNJLGlCQUFpQjtDQUNwQjs7QUFFRDtJQUNJLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsZUFBZTtDQUNsQiIsImZpbGUiOiJhcHAvbW9kdWxlcy9hZGQtY2FyL2FkZC1pbWdpdGVtL2FkZC1pbWdpdGVtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbnB1dCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA3cHg7XHJcbn1cclxuXHJcbnNlbGVjdCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4uZm9ybS1ncm91cCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG59XHJcblxyXG5zbWFsbCB7XHJcbiAgICBjb2xvcjogI2Q5NTM0ZjtcclxuICAgIG1hcmdpbi1ib3R0b206IDdweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/modules/add-car/add-imgitem/add-imgitem.component.html":
/*!************************************************************************!*\
  !*** ./src/app/modules/add-car/add-imgitem/add-imgitem.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Вывод флеш-сщщбщений -->\r\n<div class=\"alert alert-{{message.type}}\" *ngIf=\"message\">{{message.text}}</div>\r\n<form #form=\"ngForm\" novalidate (ngSubmit)=\"addItems()\">\r\n  <div class=\"form-group\">\r\n    <label>Марка</label>\r\n    <!-- Передача ID выбранной марки в компонент -->\r\n    <select (change)=\"passCarId($event)\" class=\"custom-select\" name=\"carItem\" ngModel required>\r\n      <option></option>\r\n      <option *ngFor=\"let carItem of markName\" [value]=\"carItem._id\">{{carItem.markName}}</option>\r\n    </select>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label>Модель</label>\r\n    <!-- Передача ID выбранной модели в компонент -->\r\n    <select (change)=\"passModelId($event)\" class=\"custom-select\" name=\"model\" ngModel required>\r\n      <option></option>\r\n      <option *ngFor=\"let model of modelName\" [value]=\"model._id\">{{model.modelsName}}</option>\r\n    </select>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label>Модификация</label>\r\n    <!-- Передача ID выбранной модификации в компонент -->\r\n    <select (change)=\"passModificationId($event)\" class=\"custom-select\" name=\"modification\" ngModel required>\r\n      <option></option>\r\n      <option *ngFor=\"let modification of modifications\" [value]=\"modification._id\">{{modification.modificationName}}</option>\r\n    </select>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label>Агрегат</label>\r\n    <!-- Передача ID выбранного агрегата в компонент -->\r\n    <select (change)=\"passUnitId($event)\" class=\"custom-select\" name=\"unit\" ngModel required>\r\n      <option></option>\r\n      <option *ngFor=\"let unit of units\" [value]=\"unit._id\">{{unit.unitName}}</option>\r\n    </select>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label>Схема</label>\r\n    <!-- Передача ID выбранной схемы в компонент -->\r\n    <select (change)=\"passDetailId($event)\" class=\"custom-select\" name=\"detail\" ngModel required>\r\n      <option></option>\r\n      <option *ngFor=\"let detail of details\" [value]=\"detail._id\">{{detail.detailName}}</option>\r\n    </select>\r\n  </div>\r\n  <!-- Блок добавления данных -->\r\n  <div class=\"form-group\">\r\n    <label>Внесите данные</label>\r\n    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"itemImage\" name=\"itemImage\" required placeholder=\"Внесите ссылку на основную схему\"\r\n      #link=\"ngModel\" [class.is-invalid]=\"link.invalid && link.touched\">\r\n    <small *ngIf=\"link.invalid && link.touched\">Заполните форму</small>\r\n  </div>\r\n  <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"form.form.invalid\">Добавить</button>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/modules/add-car/add-imgitem/add-imgitem.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/modules/add-car/add-imgitem/add-imgitem.component.ts ***!
  \**********************************************************************/
/*! exports provided: AddImgitemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddImgitemComponent", function() { return AddImgitemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_api_img_catalog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../services/api-img-catalog.service */ "./src/app/services/api-img-catalog.service.ts");
/* harmony import */ var src_app_services_flash_message_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/flash-message.service */ "./src/app/services/flash-message.service.ts");




var AddImgitemComponent = /** @class */ (function () {
    function AddImgitemComponent(_apiImgCatalogService, _flashMessagesService) {
        this._apiImgCatalogService = _apiImgCatalogService;
        this._flashMessagesService = _flashMessagesService;
        this.markName = [];
        this.modelName = [];
        this.modifications = [];
        this.units = [];
        this.details = [];
    }
    AddImgitemComponent.prototype.ngOnInit = function () {
        // Получение списка машин при загрузке страницы
        this.getCars();
    };
    // Получение списка машин
    AddImgitemComponent.prototype.getCars = function () {
        var _this = this;
        this._apiImgCatalogService.getCars()
            .subscribe(function (data) {
            _this.markName = data;
        }, function (error) {
            _this._flashMessagesService.showMessage(error).subscribe(function (data) { return _this.message = data; });
        });
    };
    // Получение Id выбранной машины. Получение списка моделей
    AddImgitemComponent.prototype.passCarId = function (event) {
        var _this = this;
        this.carId = event.target.value;
        this._apiImgCatalogService.getModel(this.carId)
            .subscribe(function (data) {
            _this.modelName = data;
        }, function (error) {
            _this._flashMessagesService.showMessage(error).subscribe(function (data) { return _this.message = data; });
        });
    };
    // Получение Id выбранной модели. Получение списка модификаций
    AddImgitemComponent.prototype.passModelId = function (event) {
        var _this = this;
        this.modelId = event.target.value;
        this._apiImgCatalogService.getModification(this.carId, this.modelId)
            .subscribe(function (data) {
            _this.modifications = data;
        }, function (error) {
            _this._flashMessagesService.showMessage(error).subscribe(function (data) { return _this.message = data; });
        });
    };
    // Получение Id выбранной модификации. Получение списка агрегатов
    AddImgitemComponent.prototype.passModificationId = function (event) {
        var _this = this;
        this.unitId = event.target.value;
        this._apiImgCatalogService.getUnit(this.carId, this.modelId, this.unitId)
            .subscribe(function (data) {
            _this.units = data;
        }, function (error) {
            _this._flashMessagesService.showMessage(error).subscribe(function (data) { return _this.message = data; });
        });
    };
    // Получение Id выбранного агрегата. Получение списка схем
    AddImgitemComponent.prototype.passUnitId = function (event) {
        var _this = this;
        this.detailId = event.target.value;
        this._apiImgCatalogService.getDetail(this.carId, this.modelId, this.unitId, this.detailId)
            .subscribe(function (data) {
            _this.details = data;
        }, function (error) {
            _this._flashMessagesService.showMessage(error).subscribe(function (data) { return _this.message = data; });
        });
    };
    // Получение Id схемы. Получение составляющих схемы.
    AddImgitemComponent.prototype.passDetailId = function (event) {
        var _this = this;
        this.itemId = event.target.value;
        this._apiImgCatalogService.getItems(this.carId, this.modelId, this.unitId, this.detailId, this.itemId)
            .subscribe(function (data) { }, function (error) {
            _this._flashMessagesService.showMessage(error).subscribe(function (data) { return _this.message = data; });
        });
    };
    // Создать новый объект для основного изображения схемы, передать сервису,
    //  отправить на сервер, очистить форму, вывести сообщение об успехе или неудаче
    AddImgitemComponent.prototype.addItems = function () {
        var _this = this;
        var item = {
            itemImage: this.itemImage
        };
        if (this.carId && this.modelId && this.unitId && this.detailId && this.itemId) {
            this._apiImgCatalogService.createDetailItem(this.carId, this.modelId, this.unitId, this.detailId, this.itemId, item)
                .subscribe(function (data) {
                _this._flashMessagesService.showMessage('Данные успешно добавлены', 'success', 3000).subscribe(function (msg) {
                    _this.message = msg;
                });
            }, function (error) {
                _this._flashMessagesService.showMessage(error).subscribe(function (data) { return _this.message = data; });
            });
            this.itemImage = '';
        }
        else {
            this._flashMessagesService.showMessage('Выберите данные автомобиля').subscribe(function (data) { return _this.message = data; });
        }
    };
    AddImgitemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-imgitem',
            template: __webpack_require__(/*! ./add-imgitem.component.html */ "./src/app/modules/add-car/add-imgitem/add-imgitem.component.html"),
            styles: [__webpack_require__(/*! ./add-imgitem.component.css */ "./src/app/modules/add-car/add-imgitem/add-imgitem.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_api_img_catalog_service__WEBPACK_IMPORTED_MODULE_2__["ApiImgCatalogService"],
            src_app_services_flash_message_service__WEBPACK_IMPORTED_MODULE_3__["FlashMessageService"]])
    ], AddImgitemComponent);
    return AddImgitemComponent;
}());



/***/ }),

/***/ "./src/app/modules/add-car/add-imgitemdetail/add-imgitemdetail.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/add-car/add-imgitemdetail/add-imgitemdetail.component.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input {\r\n    margin-bottom: 7px;\r\n}\r\n\r\nselect {\r\n    margin-bottom: 10px;\r\n}\r\n\r\ntextarea {\r\n    margin-bottom: 7px;\r\n}\r\n\r\n.form-group {\r\n    margin-bottom: 5px;\r\n}\r\n\r\nsmall {\r\n    color: #d9534f;\r\n    margin-bottom: 7px;\r\n    display: block;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tb2R1bGVzL2FkZC1jYXIvYWRkLWltZ2l0ZW1kZXRhaWwvYWRkLWltZ2l0ZW1kZXRhaWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG1CQUFtQjtDQUN0Qjs7QUFFRDtJQUNJLG9CQUFvQjtDQUN2Qjs7QUFFRDtJQUNJLG1CQUFtQjtDQUN0Qjs7QUFFRDtJQUNJLG1CQUFtQjtDQUN0Qjs7QUFFRDtJQUNJLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsZUFBZTtDQUNsQiIsImZpbGUiOiJhcHAvbW9kdWxlcy9hZGQtY2FyL2FkZC1pbWdpdGVtZGV0YWlsL2FkZC1pbWdpdGVtZGV0YWlsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbnB1dCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA3cHg7XHJcbn1cclxuXHJcbnNlbGVjdCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG50ZXh0YXJlYSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA3cHg7XHJcbn1cclxuXHJcbi5mb3JtLWdyb3VwIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxufVxyXG5cclxuc21hbGwge1xyXG4gICAgY29sb3I6ICNkOTUzNGY7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA3cHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/modules/add-car/add-imgitemdetail/add-imgitemdetail.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/modules/add-car/add-imgitemdetail/add-imgitemdetail.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Вывод флеш-сщщбщений -->\r\n<div class=\"alert alert-{{message.type}}\" *ngIf=\"message\">{{message.text}}</div>\r\n<form #form=\"ngForm\" novalidate (ngSubmit)=\"addItems()\">\r\n  <div class=\"form-group\">\r\n    <label>Марка</label>\r\n    <!-- Передача ID выбранной марки в компонент -->\r\n    <select class=\"custom-select\" ngModel name=\"mark\" (change)=\"passCarId($event)\" required>\r\n      <option></option>\r\n      <option *ngFor=\"let mark of markName\" [value]=\"mark._id\">{{mark.markName}}</option>\r\n    </select>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label>Модель</label>\r\n    <!-- Передача ID выбранной модели в компонент -->\r\n    <select (change)=\"passModelId($event)\" class=\"custom-select\" name=\"modelName\" ngModel required>\r\n      <option></option>\r\n      <option *ngFor=\"let model of modelName\" [value]=\"model._id\">{{model.modelsName}}</option>\r\n    </select>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label>Модификация</label>\r\n    <!-- Передача ID выбранной модификации в компонент -->\r\n    <select (change)=\"passModificationId($event)\" class=\"custom-select\" name=\"modificationName\" ngModel required>\r\n      <option></option>\r\n      <option *ngFor=\"let modification of modifications\" [value]=\"modification._id\">{{modification.modificationName}}</option>\r\n    </select>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label>Агрегат</label>\r\n    <!-- Передача ID выбранного агрегата в компонент -->\r\n    <select (change)=\"passUnitId($event)\" class=\"custom-select\" name=\"detailGroup\" ngModel required>\r\n      <option></option>\r\n      <option *ngFor=\"let unit of units\" [value]=\"unit._id\">{{unit.unitName}}</option>\r\n    </select>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label>Схема</label>\r\n    <!-- Передача ID выбранной схемы в компонент -->\r\n    <select (change)=\"passDetailId($event)\" class=\"custom-select\" name=\"detailName\" ngModel required>\r\n      <option></option>\r\n      <option *ngFor=\"let detail of details\" [value]=\"detail._id\">{{detail.detailName}}</option>\r\n    </select>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label>Основная схема раздела</label>\r\n    <!-- Передача ID выбранной основной схемы в компонент -->\r\n    <select (change)=\"passOriginalId($event)\" class=\"custom-select\" name=\"analogueName\" ngModel required>\r\n      <option></option>\r\n      <option *ngFor=\"let analogue of analogues\" [value]=\"analogue._id\">{{analogue.itemImage}}</option>\r\n    </select>\r\n  </div>\r\n  <!-- Блок внесения данных -->\r\n  <div class=\"form-group\">\r\n    <label>Внесите данные</label>\r\n    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"itemNumber\" name=\"itemNumber\" placeholder=\"Внесите порядковый номер\"\r\n      required #number=\"ngModel\" [class.is-invalid]=\"number.invalid && number.touched\">\r\n    <small *ngIf=\"number.invalid && number.touched\">Заполните форму</small>\r\n    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"itemName\" name=\"itemName\" placeholder=\"Внесите название детали\"\r\n      required #name=\"ngModel\" [class.is-invalid]=\"name.invalid && name.touched\">\r\n    <small *ngIf=\"name.invalid && name.touched\">Заполните форму</small>\r\n    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"itemArticle\" name=\"itemArticle\" placeholder=\"Внесите артикулы через запятую\"\r\n      required #article=\"ngModel\" [class.is-invalid]=\"article.invalid && article.touched\">\r\n    <small *ngIf=\"article.invalid && article.touched\">Заполните форму</small>\r\n    <textarea class=\"form-control\" [(ngModel)]=\"itemNote\" name=\"itemNote\" placeholder=\"Внесите примечание\"></textarea>\r\n  </div>\r\n  <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"form.form.invalid\">Добавить</button>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/modules/add-car/add-imgitemdetail/add-imgitemdetail.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/add-car/add-imgitemdetail/add-imgitemdetail.component.ts ***!
  \**********************************************************************************/
/*! exports provided: AddImgitemdetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddImgitemdetailComponent", function() { return AddImgitemdetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_api_img_catalog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../services/api-img-catalog.service */ "./src/app/services/api-img-catalog.service.ts");
/* harmony import */ var src_app_services_flash_message_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/flash-message.service */ "./src/app/services/flash-message.service.ts");




var AddImgitemdetailComponent = /** @class */ (function () {
    function AddImgitemdetailComponent(_apiImgCatalogService, _flashMessagesService) {
        this._apiImgCatalogService = _apiImgCatalogService;
        this._flashMessagesService = _flashMessagesService;
        this.markName = [];
        this.modelName = [];
        this.modifications = [];
        this.units = [];
        this.details = [];
        this.analogues = [];
    }
    AddImgitemdetailComponent.prototype.ngOnInit = function () {
        // Получение списка машин при загрузке страницы
        this.getCars();
    };
    // Получение списка машин
    AddImgitemdetailComponent.prototype.getCars = function () {
        var _this = this;
        this._apiImgCatalogService.getCars()
            .subscribe(function (data) {
            _this.markName = data;
        }, function (error) {
            _this._flashMessagesService.showMessage(error).subscribe(function (data) { return _this.message = data; });
        });
    };
    // Получение Id выбранной машины. Получение списка моделей
    AddImgitemdetailComponent.prototype.passCarId = function (event) {
        var _this = this;
        this.carId = event.target.value;
        this._apiImgCatalogService.getModel(this.carId)
            .subscribe(function (data) {
            _this.modelName = data;
        }, function (error) {
            _this._flashMessagesService.showMessage(error).subscribe(function (data) { return _this.message = data; });
        });
    };
    // Получение Id выбранной модели. Получение списка модификаций
    AddImgitemdetailComponent.prototype.passModelId = function (event) {
        var _this = this;
        this.modelId = event.target.value;
        this._apiImgCatalogService.getModification(this.carId, this.modelId)
            .subscribe(function (data) {
            _this.modifications = data;
        }, function (error) {
            _this._flashMessagesService.showMessage(error).subscribe(function (data) { return _this.message = data; });
        });
    };
    // Получение Id выбранной модификации. Получение списка агрегатов
    AddImgitemdetailComponent.prototype.passModificationId = function (event) {
        var _this = this;
        this.unitId = event.target.value;
        this._apiImgCatalogService.getUnit(this.carId, this.modelId, this.unitId)
            .subscribe(function (data) {
            _this.units = data;
        }, function (error) {
            _this._flashMessagesService.showMessage(error).subscribe(function (data) { return _this.message = data; });
        });
    };
    // Получение Id выбранного агрегата. Получение списка разделов
    AddImgitemdetailComponent.prototype.passUnitId = function (event) {
        var _this = this;
        this.detailId = event.target.value;
        this._apiImgCatalogService.getDetail(this.carId, this.modelId, this.unitId, this.detailId)
            .subscribe(function (data) {
            _this.details = data;
        }, function (error) {
            _this._flashMessagesService.showMessage(error).subscribe(function (data) { return _this.message = data; });
        });
    };
    // Получение Id раздела. Получение основной схемы раздела.
    AddImgitemdetailComponent.prototype.passDetailId = function (event) {
        var _this = this;
        this.itemId = event.target.value;
        this._apiImgCatalogService.getItems(this.carId, this.modelId, this.unitId, this.detailId, this.itemId)
            .subscribe(function (data) {
            _this.analogues = data;
        }, function (error) {
            _this._flashMessagesService.showMessage(error).subscribe(function (data) { return _this.message = data; });
        });
    };
    // Получение Id основной схемы раздела.
    AddImgitemdetailComponent.prototype.passOriginalId = function (event) {
        this.originalId = event.target.value;
    };
    // Создать новый объект для дынных раздела, передать сервису,
    //  отправить на сервер, очистить форму, вывести сообщение об успехе или неудаче
    AddImgitemdetailComponent.prototype.addItems = function () {
        var _this = this;
        var items = {
            itemNumber: this.itemNumber,
            itemName: this.itemName,
            itemArticle: this.itemArticle,
            itemNote: this.itemNote
        };
        if (this.carId && this.modelId && this.unitId && this.detailId && this.itemId && this.originalId) {
            this._apiImgCatalogService.createItems(this.carId, this.modelId, this.unitId, this.detailId, this.itemId, this.originalId, items)
                .subscribe(function (data) {
                _this._flashMessagesService.showMessage('Данные успешно добавлены', 'success', 3000).subscribe(function (msg) {
                    _this.message = msg;
                });
            }, function (error) {
                _this._flashMessagesService.showMessage(error).subscribe(function (data) { return _this.message = data; });
            });
            this.itemNumber = null;
            this.itemName = '';
            this.itemArticle = [];
            this.itemNote = '';
        }
        else {
            this._flashMessagesService.showMessage('Выберите данные автомобиля').subscribe(function (data) { return _this.message = data; });
        }
    };
    AddImgitemdetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-imgitemdetail',
            template: __webpack_require__(/*! ./add-imgitemdetail.component.html */ "./src/app/modules/add-car/add-imgitemdetail/add-imgitemdetail.component.html"),
            styles: [__webpack_require__(/*! ./add-imgitemdetail.component.css */ "./src/app/modules/add-car/add-imgitemdetail/add-imgitemdetail.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_api_img_catalog_service__WEBPACK_IMPORTED_MODULE_2__["ApiImgCatalogService"],
            src_app_services_flash_message_service__WEBPACK_IMPORTED_MODULE_3__["FlashMessageService"]])
    ], AddImgitemdetailComponent);
    return AddImgitemdetailComponent;
}());



/***/ }),

/***/ "./src/app/modules/add-car/add-imgmain/add-imgmain.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/modules/add-car/add-imgmain/add-imgmain.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvbW9kdWxlcy9hZGQtY2FyL2FkZC1pbWdtYWluL2FkZC1pbWdtYWluLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/modules/add-car/add-imgmain/add-imgmain.component.html":
/*!************************************************************************!*\
  !*** ./src/app/modules/add-car/add-imgmain/add-imgmain.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <!-- Колонка с роутами для добавления данных -->\r\n  <div class=\"col-lg-4\">\r\n    <ul class=\"nav nav-pills flex-column\">\r\n      <li class=\"nav-item\" [routerLinkActive]=\"['active']\">\r\n        <a class=\"nav-link\" [routerLink]=\"['/editing/addimgmain/mark']\">добавить марку</a>\r\n      </li>\r\n      <li class=\"nav-item\" [routerLinkActive]=\"['active']\">\r\n        <a class=\"nav-link\" [routerLink]=\"['/editing/addimgmain/model']\">Добавить модель</a>\r\n      </li>\r\n      <li class=\"nav-item\" [routerLinkActive]=\"['active']\">\r\n        <a class=\"nav-link\" [routerLink]=\"['/editing/addimgmain/modification']\">Добавить модификацию</a>\r\n      </li>\r\n      <li class=\"nav-item\" [routerLinkActive]=\"['active']\">\r\n        <a class=\"nav-link\" [routerLink]=\"['/editing/addimgmain/unit']\">Добавить агрегат</a>\r\n      </li>\r\n      <li class=\"nav-item\" [routerLinkActive]=\"['active']\">\r\n        <a class=\"nav-link\" [routerLink]=\"['/editing/addimgmain/detail']\">Добавить список разделов</a>\r\n      </li>\r\n      <li class=\"nav-item\" [routerLinkActive]=\"['active']\">\r\n        <a class=\"nav-link\" [routerLink]=\"['/editing/addimgmain/item']\">Добавить раздел</a>\r\n      </li>\r\n      <li class=\"nav-item\" [routerLinkActive]=\"['active']\">\r\n        <a class=\"nav-link\" [routerLink]=\"['/editing/addimgmain/itemdetail']\">Добавить составляющие раздела</a>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n  <div class=\"col-lg-8\">\r\n    <!-- Страницы добавления данных -->\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/modules/add-car/add-imgmain/add-imgmain.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/modules/add-car/add-imgmain/add-imgmain.component.ts ***!
  \**********************************************************************/
/*! exports provided: AddImgmainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddImgmainComponent", function() { return AddImgmainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AddImgmainComponent = /** @class */ (function () {
    function AddImgmainComponent() {
    }
    AddImgmainComponent.prototype.ngOnInit = function () {
    };
    AddImgmainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-imgmain',
            template: __webpack_require__(/*! ./add-imgmain.component.html */ "./src/app/modules/add-car/add-imgmain/add-imgmain.component.html"),
            styles: [__webpack_require__(/*! ./add-imgmain.component.css */ "./src/app/modules/add-car/add-imgmain/add-imgmain.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AddImgmainComponent);
    return AddImgmainComponent;
}());



/***/ }),

/***/ "./src/app/modules/add-car/add-imgmark/add-imgmark.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/modules/add-car/add-imgmark/add-imgmark.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-group {\r\n    margin-bottom: 5px;\r\n}\r\n\r\nsmall {\r\n    color: #d9534f;\r\n    margin-bottom: 7px;\r\n    display: block;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tb2R1bGVzL2FkZC1jYXIvYWRkLWltZ21hcmsvYWRkLWltZ21hcmsuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG1CQUFtQjtDQUN0Qjs7QUFFRDtJQUNJLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsZUFBZTtDQUNsQiIsImZpbGUiOiJhcHAvbW9kdWxlcy9hZGQtY2FyL2FkZC1pbWdtYXJrL2FkZC1pbWdtYXJrLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS1ncm91cCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbn1cclxuXHJcbnNtYWxsIHtcclxuICAgIGNvbG9yOiAjZDk1MzRmO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogN3B4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/modules/add-car/add-imgmark/add-imgmark.component.html":
/*!************************************************************************!*\
  !*** ./src/app/modules/add-car/add-imgmark/add-imgmark.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Вывод флеш-сщщбщений -->\r\n<div class=\"alert alert-{{message.type}}\" *ngIf=\"message\">{{message.text}}</div>\r\n<form #form=\"ngForm\" novalidate (ngSubmit)=\"addCar()\">\r\n  <!-- Блок внесения данных -->\r\n  <div class=\"form-group\">\r\n    <label>Внесите название марки автомобиля</label>\r\n    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"markName\" name=\"markName\" required #name=\"ngModel\"\r\n      [class.is-invalid]=\"name.invalid && name.touched\">\r\n    <small *ngIf=\"name.invalid && name.touched\">Заполните форму</small>\r\n  </div>\r\n  <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"form.form.invalid\">Добавить</button>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/modules/add-car/add-imgmark/add-imgmark.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/modules/add-car/add-imgmark/add-imgmark.component.ts ***!
  \**********************************************************************/
/*! exports provided: AddImgmarkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddImgmarkComponent", function() { return AddImgmarkComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_api_img_catalog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api-img-catalog.service */ "./src/app/services/api-img-catalog.service.ts");
/* harmony import */ var src_app_services_flash_message_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/flash-message.service */ "./src/app/services/flash-message.service.ts");




var AddImgmarkComponent = /** @class */ (function () {
    function AddImgmarkComponent(_apiImgCatalogServise, _flashMessagesService) {
        this._apiImgCatalogServise = _apiImgCatalogServise;
        this._flashMessagesService = _flashMessagesService;
    }
    AddImgmarkComponent.prototype.ngOnInit = function () {
    };
    // Создать новый объект машины, передать название марки, отправить на сервер, очистить форму, вывести сообщение об успехе
    AddImgmarkComponent.prototype.addCar = function () {
        var _this = this;
        var car = {
            markName: this.markName
        };
        this._apiImgCatalogServise.createCar(car)
            .subscribe(function (data) {
            _this._flashMessagesService.showMessage('Данные успешно добавлены', 'success', 3000).subscribe(function (msg) {
                _this.message = msg;
            });
        }, function (error) {
            _this._flashMessagesService.showMessage(error).subscribe(function (data) { return _this.message = data; });
        });
        this.markName = '';
    };
    AddImgmarkComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-imgmark',
            template: __webpack_require__(/*! ./add-imgmark.component.html */ "./src/app/modules/add-car/add-imgmark/add-imgmark.component.html"),
            styles: [__webpack_require__(/*! ./add-imgmark.component.css */ "./src/app/modules/add-car/add-imgmark/add-imgmark.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_api_img_catalog_service__WEBPACK_IMPORTED_MODULE_2__["ApiImgCatalogService"],
            src_app_services_flash_message_service__WEBPACK_IMPORTED_MODULE_3__["FlashMessageService"]])
    ], AddImgmarkComponent);
    return AddImgmarkComponent;
}());



/***/ }),

/***/ "./src/app/modules/add-car/add-imgmodel/add-imgmodel.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/modules/add-car/add-imgmodel/add-imgmodel.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "select {\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.form-group {\r\n    margin-bottom: 5px;\r\n}\r\n\r\nsmall {\r\n    color: #d9534f;\r\n    margin-bottom: 7px;\r\n    display: block;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tb2R1bGVzL2FkZC1jYXIvYWRkLWltZ21vZGVsL2FkZC1pbWdtb2RlbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksb0JBQW9CO0NBQ3ZCOztBQUVEO0lBQ0ksbUJBQW1CO0NBQ3RCOztBQUVEO0lBQ0ksZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixlQUFlO0NBQ2xCIiwiZmlsZSI6ImFwcC9tb2R1bGVzL2FkZC1jYXIvYWRkLWltZ21vZGVsL2FkZC1pbWdtb2RlbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsic2VsZWN0IHtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi5mb3JtLWdyb3VwIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxufVxyXG5cclxuc21hbGwge1xyXG4gICAgY29sb3I6ICNkOTUzNGY7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA3cHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/modules/add-car/add-imgmodel/add-imgmodel.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/modules/add-car/add-imgmodel/add-imgmodel.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Вывод флеш-сщщбщений -->\r\n<div class=\"alert alert-{{message.type}}\" *ngIf=\"message\">{{message.text}}</div>\r\n<form #form=\"ngForm\" novalidate (ngSubmit)=\"addModel()\">\r\n  <div class=\"form-group\">\r\n    <label>Марка</label>\r\n    <!-- Передача ID выбранной марки в компонент -->\r\n    <select (change)=\"passCarId($event)\" class=\"custom-select\" name=\"carItem\" ngModel required>\r\n      <option></option>\r\n      <option *ngFor=\"let carItem of markName\" [value]=\"carItem._id\">{{carItem.markName}}</option>\r\n    </select>\r\n  </div>\r\n  <!-- Блок добавления данных -->\r\n  <div class=\"form-group\">\r\n    <label>Внесите название модели автомобиля</label>\r\n    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"modelsName\" name=\"modelsName\" required #name=\"ngModel\"\r\n      [class.is-invalid]=\"name.invalid && name.touched\">\r\n    <small *ngIf=\"name.invalid && name.touched\">Заполните форму</small>\r\n  </div>\r\n  <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"form.form.invalid\">Добавить</button>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/modules/add-car/add-imgmodel/add-imgmodel.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/modules/add-car/add-imgmodel/add-imgmodel.component.ts ***!
  \************************************************************************/
/*! exports provided: AddImgmodelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddImgmodelComponent", function() { return AddImgmodelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_api_img_catalog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../services/api-img-catalog.service */ "./src/app/services/api-img-catalog.service.ts");
/* harmony import */ var src_app_services_flash_message_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/flash-message.service */ "./src/app/services/flash-message.service.ts");




var AddImgmodelComponent = /** @class */ (function () {
    function AddImgmodelComponent(_apiImgCatalogServce, _flashMessagesService) {
        this._apiImgCatalogServce = _apiImgCatalogServce;
        this._flashMessagesService = _flashMessagesService;
        this.markName = [];
    }
    AddImgmodelComponent.prototype.ngOnInit = function () {
        // Получение списка машин при загрузке страницы
        this.getCars();
    };
    // Получение списка машин
    AddImgmodelComponent.prototype.getCars = function () {
        var _this = this;
        this._apiImgCatalogServce.getCars()
            .subscribe(function (data) {
            _this.markName = data;
        }, function (error) {
            _this._flashMessagesService.showMessage(error).subscribe(function (data) { return _this.message = data; });
        });
    };
    // Получение Id выбранной машины.
    AddImgmodelComponent.prototype.passCarId = function (event) {
        this.carId = event.target.value;
    };
    // Создать новый объект модели, передать название модели, отправить на сервер, очистить форму, вывести сообщение об успехе или неудаче
    AddImgmodelComponent.prototype.addModel = function () {
        var _this = this;
        var model = {
            modelsName: this.modelsName
        };
        if (this.carId) {
            this._apiImgCatalogServce.createModel(this.carId, model)
                .subscribe(function (data) {
                _this._flashMessagesService.showMessage('Данные успешно добавлены', 'success', 3000).subscribe(function (msg) {
                    _this.message = msg;
                });
            }, function (error) {
                _this._flashMessagesService.showMessage(error).subscribe(function (data) { return _this.message = data; });
            });
            this.modelsName = '';
        }
        else {
            this._flashMessagesService.showMessage('Выберите данные автомобиля').subscribe(function (data) { return _this.message = data; });
        }
    };
    AddImgmodelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-imgmodel',
            template: __webpack_require__(/*! ./add-imgmodel.component.html */ "./src/app/modules/add-car/add-imgmodel/add-imgmodel.component.html"),
            styles: [__webpack_require__(/*! ./add-imgmodel.component.css */ "./src/app/modules/add-car/add-imgmodel/add-imgmodel.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_api_img_catalog_service__WEBPACK_IMPORTED_MODULE_2__["ApiImgCatalogService"],
            src_app_services_flash_message_service__WEBPACK_IMPORTED_MODULE_3__["FlashMessageService"]])
    ], AddImgmodelComponent);
    return AddImgmodelComponent;
}());



/***/ }),

/***/ "./src/app/modules/add-car/add-imgmodification/add-imgmodification.component.css":
/*!***************************************************************************************!*\
  !*** ./src/app/modules/add-car/add-imgmodification/add-imgmodification.component.css ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "select {\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.form-group {\r\n    margin-bottom: 5px;\r\n}\r\n\r\nsmall {\r\n    color: #d9534f;\r\n    margin-bottom: 7px;\r\n    display: block;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tb2R1bGVzL2FkZC1jYXIvYWRkLWltZ21vZGlmaWNhdGlvbi9hZGQtaW1nbW9kaWZpY2F0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxvQkFBb0I7Q0FDdkI7O0FBRUQ7SUFDSSxtQkFBbUI7Q0FDdEI7O0FBRUQ7SUFDSSxlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLGVBQWU7Q0FDbEIiLCJmaWxlIjoiYXBwL21vZHVsZXMvYWRkLWNhci9hZGQtaW1nbW9kaWZpY2F0aW9uL2FkZC1pbWdtb2RpZmljYXRpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInNlbGVjdCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4uZm9ybS1ncm91cCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbn1cclxuXHJcbnNtYWxsIHtcclxuICAgIGNvbG9yOiAjZDk1MzRmO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogN3B4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/modules/add-car/add-imgmodification/add-imgmodification.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/add-car/add-imgmodification/add-imgmodification.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Вывод флеш-сщщбщений -->\r\n<div class=\"alert alert-{{message.type}}\" *ngIf=\"message\">{{message.text}}</div>\r\n<form #form=\"ngForm\" novalidate (ngSubmit)=\"addModification()\">\r\n  <div class=\"form-group\">\r\n    <label>Марка</label>\r\n    <!-- Передача ID выбранной марки в компонент -->\r\n    <select (change)=\"passCarId($event)\" class=\"custom-select\" name=\"carItem\" ngModel required>\r\n      <option></option>\r\n      <option *ngFor=\"let carItem of markName\" [value]=\"carItem._id\">{{carItem.markName}}</option>\r\n    </select>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label>Модель</label>\r\n    <!-- Передача ID выбранной модели в компонент -->\r\n    <select (change)=\"passModelId($event)\" class=\"custom-select\" name=\"model\" ngModel required>\r\n      <option></option>\r\n      <option *ngFor=\"let model of modelName\" [value]=\"model._id\">{{model.modelsName}}</option>\r\n    </select>\r\n  </div>\r\n  <!-- Блок внесения данных -->\r\n  <div class=\"form-group\">\r\n    <label>Внесите модификацию автомобиля</label>\r\n    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"modificationlName\" name=\"modificationlName\" required #name=\"ngModel\"\r\n      [class.is-invalid]=\"name.invalid && name.touched\">\r\n    <small *ngIf=\"name.invalid && name.touched\">Заполните форму</small>\r\n  </div>\r\n  <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"form.form.invalid\">Добавить</button>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/modules/add-car/add-imgmodification/add-imgmodification.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/add-car/add-imgmodification/add-imgmodification.component.ts ***!
  \**************************************************************************************/
/*! exports provided: AddImgmodificationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddImgmodificationComponent", function() { return AddImgmodificationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_api_img_catalog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api-img-catalog.service */ "./src/app/services/api-img-catalog.service.ts");
/* harmony import */ var src_app_services_flash_message_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/flash-message.service */ "./src/app/services/flash-message.service.ts");




var AddImgmodificationComponent = /** @class */ (function () {
    function AddImgmodificationComponent(_apiImgCatalogService, _flashMessagesService) {
        this._apiImgCatalogService = _apiImgCatalogService;
        this._flashMessagesService = _flashMessagesService;
        this.markName = [];
        this.modelName = [];
    }
    AddImgmodificationComponent.prototype.ngOnInit = function () {
        // Получение списка машин при загрузке страницы
        this.getCars();
    };
    // Получение списка машин
    AddImgmodificationComponent.prototype.getCars = function () {
        var _this = this;
        this._apiImgCatalogService.getCars()
            .subscribe(function (data) {
            _this.markName = data;
        }, function (error) {
            _this._flashMessagesService.showMessage(error).subscribe(function (data) { return _this.message = data; });
        });
    };
    // Получение Id выбранной машины. Получение списка моделей
    AddImgmodificationComponent.prototype.passCarId = function (event) {
        var _this = this;
        this.carId = event.target.value;
        this._apiImgCatalogService.getModel(this.carId)
            .subscribe(function (data) {
            _this.modelName = data;
        }, function (error) {
            _this._flashMessagesService.showMessage(error).subscribe(function (data) { return _this.message = data; });
        });
    };
    // Получение Id выбранной модели.
    AddImgmodificationComponent.prototype.passModelId = function (event) {
        this.modelId = event.target.value;
    };
    // Создать новый объект модификации, передать название модификации,
    //  отправить на сервер, очистить форму, вывести сообщение об успехе или неудаче
    AddImgmodificationComponent.prototype.addModification = function () {
        var _this = this;
        var model = {
            modificationName: this.modificationlName
        };
        if (this.carId && this.modelId) {
            this._apiImgCatalogService.createModification(this.carId, this.modelId, model)
                .subscribe(function (data) {
                _this._flashMessagesService.showMessage('Данные успешно добавлены', 'success', 3000).subscribe(function (msg) {
                    _this.message = msg;
                });
            }, function (error) {
                _this._flashMessagesService.showMessage(error).subscribe(function (data) { return _this.message = data; });
            });
            this.modificationlName = '';
        }
        else {
            this._flashMessagesService.showMessage('Выберите данные автомобиля').subscribe(function (data) { return _this.message = data; });
        }
    };
    AddImgmodificationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-imgmodification',
            template: __webpack_require__(/*! ./add-imgmodification.component.html */ "./src/app/modules/add-car/add-imgmodification/add-imgmodification.component.html"),
            styles: [__webpack_require__(/*! ./add-imgmodification.component.css */ "./src/app/modules/add-car/add-imgmodification/add-imgmodification.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_api_img_catalog_service__WEBPACK_IMPORTED_MODULE_2__["ApiImgCatalogService"],
            src_app_services_flash_message_service__WEBPACK_IMPORTED_MODULE_3__["FlashMessageService"]])
    ], AddImgmodificationComponent);
    return AddImgmodificationComponent;
}());



/***/ }),

/***/ "./src/app/modules/add-car/add-imgunit/add-imgunit.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/modules/add-car/add-imgunit/add-imgunit.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "select {\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.form-group {\r\n    margin-bottom: 5px;\r\n}\r\n\r\nsmall {\r\n    color: #d9534f;\r\n    margin-bottom: 7px;\r\n    display: block;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tb2R1bGVzL2FkZC1jYXIvYWRkLWltZ3VuaXQvYWRkLWltZ3VuaXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG9CQUFvQjtDQUN2Qjs7QUFFRDtJQUNJLG1CQUFtQjtDQUN0Qjs7QUFFRDtJQUNJLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsZUFBZTtDQUNsQiIsImZpbGUiOiJhcHAvbW9kdWxlcy9hZGQtY2FyL2FkZC1pbWd1bml0L2FkZC1pbWd1bml0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJzZWxlY3Qge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLmZvcm0tZ3JvdXAge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG59XHJcblxyXG5zbWFsbCB7XHJcbiAgICBjb2xvcjogI2Q5NTM0ZjtcclxuICAgIG1hcmdpbi1ib3R0b206IDdweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/modules/add-car/add-imgunit/add-imgunit.component.html":
/*!************************************************************************!*\
  !*** ./src/app/modules/add-car/add-imgunit/add-imgunit.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Вывод флеш-сообщений -->\r\n<div class=\"alert alert-{{message.type}}\" *ngIf=\"message\">{{message.text}}</div>\r\n<form #form=\"ngForm\" novalidate (ngSubmit)=\"addUnit()\">\r\n  <div class=\"form-group\">\r\n    <label>Марка</label>\r\n    <!-- Передача ID выбранной марки в компонент -->\r\n    <select (change)=\"passCarId($event)\" class=\"custom-select\" name=\"carItem\" ngModel required>\r\n      <option></option>\r\n      <option *ngFor=\"let carItem of markName\" [value]=\"carItem._id\">{{carItem.markName}}</option>\r\n    </select>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label>Модель</label>\r\n    <!-- Передача ID выбранной модели в компонент -->\r\n    <select (change)=\"passModelId($event)\" class=\"custom-select\" name=\"model\" ngModel required>\r\n      <option></option>\r\n      <option *ngFor=\"let model of modelName\" [value]=\"model._id\">{{model.modelsName}}</option>\r\n    </select>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label>Модификация</label>\r\n    <!-- Передача ID выбранной модификации в компонент -->\r\n    <select (change)=\"passModificationId($event)\" class=\"custom-select\" name=\"modification\" ngModel required>\r\n      <option></option>\r\n      <option *ngFor=\"let modification of modifications\" [value]=\"modification._id\">{{modification.modificationName}}</option>\r\n    </select>\r\n  </div>\r\n  <!-- Блок внесения данных -->\r\n  <div class=\"form-group\">\r\n    <label>Внесите название агрегата автомобиля</label>\r\n    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"unitName\" name=\"unitlName\" required #name=\"ngModel\"\r\n      [class.is-invalid]=\"name.invalid && name.touched\">\r\n    <small *ngIf=\"name.invalid && name.touched\">Заполните форму</small>\r\n  </div>\r\n  <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"form.form.invalid\">Добавить</button>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/modules/add-car/add-imgunit/add-imgunit.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/modules/add-car/add-imgunit/add-imgunit.component.ts ***!
  \**********************************************************************/
/*! exports provided: AddImgunitComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddImgunitComponent", function() { return AddImgunitComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_api_img_catalog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../services/api-img-catalog.service */ "./src/app/services/api-img-catalog.service.ts");
/* harmony import */ var src_app_services_flash_message_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/flash-message.service */ "./src/app/services/flash-message.service.ts");




var AddImgunitComponent = /** @class */ (function () {
    function AddImgunitComponent(_apiImgCatalogService, _flashMessagesService) {
        this._apiImgCatalogService = _apiImgCatalogService;
        this._flashMessagesService = _flashMessagesService;
        this.markName = [];
        this.modelName = [];
        this.modifications = [];
    }
    AddImgunitComponent.prototype.ngOnInit = function () {
        // Получение списка машин при загрузке страницы
        this.getCars();
    };
    // Получение списка машин
    AddImgunitComponent.prototype.getCars = function () {
        var _this = this;
        this._apiImgCatalogService.getCars()
            .subscribe(function (data) {
            _this.markName = data;
        }, function (error) {
            _this._flashMessagesService.showMessage(error).subscribe(function (data) { return _this.message = data; });
        });
    };
    // Получение Id выбранной машины. Получение списка моделей
    AddImgunitComponent.prototype.passCarId = function (event) {
        var _this = this;
        this.carId = event.target.value;
        this._apiImgCatalogService.getModel(this.carId)
            .subscribe(function (data) {
            _this.modelName = data;
        }, function (error) {
            _this._flashMessagesService.showMessage(error).subscribe(function (data) { return _this.message = data; });
        });
    };
    // Получение Id выбранной модели. Получение списка модификаций
    AddImgunitComponent.prototype.passModelId = function (event) {
        var _this = this;
        this.modelId = event.target.value;
        this._apiImgCatalogService.getModification(this.carId, this.modelId)
            .subscribe(function (data) {
            _this.modifications = data;
        }, function (error) {
            _this._flashMessagesService.showMessage(error).subscribe(function (data) { return _this.message = data; });
        });
    };
    // Получение Id выбранной модификации.
    AddImgunitComponent.prototype.passModificationId = function (event) {
        this.unitId = event.target.value;
    };
    // Создать новый объект агрегата, передать название агрегата,
    //  отправить на сервер, очистить форму, вывести сообщение об успехе или неудаче
    AddImgunitComponent.prototype.addUnit = function () {
        var _this = this;
        var unit = {
            unitName: this.unitName
        };
        if (this.carId && this.modelId && this.unitId) {
            this._apiImgCatalogService.createUnit(this.carId, this.modelId, this.unitId, unit)
                .subscribe(function (data) {
                _this._flashMessagesService.showMessage('Данные успешно добавлены', 'success', 3000).subscribe(function (msg) {
                    _this.message = msg;
                });
            }, function (error) {
                _this._flashMessagesService.showMessage(error).subscribe(function (data) { return _this.message = data; });
            });
            this.unitName = '';
        }
        else {
            this._flashMessagesService.showMessage('Выберите данные автомобиля').subscribe(function (data) { return _this.message = data; });
        }
    };
    AddImgunitComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-imgunit',
            template: __webpack_require__(/*! ./add-imgunit.component.html */ "./src/app/modules/add-car/add-imgunit/add-imgunit.component.html"),
            styles: [__webpack_require__(/*! ./add-imgunit.component.css */ "./src/app/modules/add-car/add-imgunit/add-imgunit.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_api_img_catalog_service__WEBPACK_IMPORTED_MODULE_2__["ApiImgCatalogService"],
            src_app_services_flash_message_service__WEBPACK_IMPORTED_MODULE_3__["FlashMessageService"]])
    ], AddImgunitComponent);
    return AddImgunitComponent;
}());



/***/ }),

/***/ "./src/app/modules/add-car/add-main/add-main.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/modules/add-car/add-main/add-main.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvbW9kdWxlcy9hZGQtY2FyL2FkZC1tYWluL2FkZC1tYWluLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/modules/add-car/add-main/add-main.component.html":
/*!******************************************************************!*\
  !*** ./src/app/modules/add-car/add-main/add-main.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <!-- Колонка с роутами для добавления данных -->\r\n  <div class=\"col-lg-4\">\r\n    <ul class=\"nav nav-pills flex-column\">\r\n      <li class=\"nav-item\" [routerLinkActive]=\"['active']\">\r\n        <a class=\"nav-link\" [routerLink]=\"['/editing/addmain/mark']\">добавить марку</a>\r\n      </li>\r\n      <li class=\"nav-item\" [routerLinkActive]=\"['active']\">\r\n        <a class=\"nav-link\" [routerLink]=\"['/editing/addmain/model']\">Добавить модель</a>\r\n      </li>\r\n      <li class=\"nav-item\" [routerLinkActive]=\"['active']\">\r\n        <a class=\"nav-link\" [routerLink]=\"['/editing/addmain/modification']\">Добавить модификацию</a>\r\n      </li>\r\n      <li class=\"nav-item\" [routerLinkActive]=\"['active']\">\r\n        <a class=\"nav-link\" [routerLink]=\"['/editing/addmain/unit']\">Добавить агрегат</a>\r\n      </li>\r\n      <li class=\"nav-item\" [routerLinkActive]=\"['active']\">\r\n        <a class=\"nav-link\" [routerLink]=\"['/editing/addmain/detail']\">Добавить деталь</a>\r\n      </li>\r\n      <li class=\"nav-item\" [routerLinkActive]=\"['active']\">\r\n        <a class=\"nav-link\" [routerLink]=\"['/editing/addmain/item']\">Добавить составляющие детали</a>\r\n      </li>\r\n      <li class=\"nav-item\" [routerLinkActive]=\"['active']\">\r\n        <a class=\"nav-link\" [routerLink]=\"['/editing/addmain/analogue']\">Добавить аналог</a>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n  <div class=\"col-lg-8\">\r\n    <!-- Страницы добавления данных -->\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/modules/add-car/add-main/add-main.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/modules/add-car/add-main/add-main.component.ts ***!
  \****************************************************************/
/*! exports provided: AddMainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddMainComponent", function() { return AddMainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AddMainComponent = /** @class */ (function () {
    function AddMainComponent() {
    }
    AddMainComponent.prototype.ngOnInit = function () {
    };
    AddMainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-main',
            template: __webpack_require__(/*! ./add-main.component.html */ "./src/app/modules/add-car/add-main/add-main.component.html"),
            styles: [__webpack_require__(/*! ./add-main.component.css */ "./src/app/modules/add-car/add-main/add-main.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AddMainComponent);
    return AddMainComponent;
}());



/***/ }),

/***/ "./src/app/modules/add-car/add-model/add-model.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/modules/add-car/add-model/add-model.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "select {\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.form-group {\r\n    margin-bottom: 5px;\r\n}\r\n\r\nsmall {\r\n    color: #d9534f;\r\n    margin-bottom: 7px;\r\n    display: block;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tb2R1bGVzL2FkZC1jYXIvYWRkLW1vZGVsL2FkZC1tb2RlbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksb0JBQW9CO0NBQ3ZCOztBQUVEO0lBQ0ksbUJBQW1CO0NBQ3RCOztBQUVEO0lBQ0ksZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixlQUFlO0NBQ2xCIiwiZmlsZSI6ImFwcC9tb2R1bGVzL2FkZC1jYXIvYWRkLW1vZGVsL2FkZC1tb2RlbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsic2VsZWN0IHtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi5mb3JtLWdyb3VwIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxufVxyXG5cclxuc21hbGwge1xyXG4gICAgY29sb3I6ICNkOTUzNGY7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA3cHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/modules/add-car/add-model/add-model.component.html":
/*!********************************************************************!*\
  !*** ./src/app/modules/add-car/add-model/add-model.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Вывод флеш-сообщений -->\r\n<div class=\"alert alert-{{message.type}}\" *ngIf=\"message\">{{message.text}}</div>\r\n<form #form=\"ngForm\" novalidate (ngSubmit)=\"addModel()\">\r\n  <div class=\"form-group\">\r\n    <label>Марка</label>\r\n    <!-- Передача ID выбранной марки в компонент -->\r\n    <select (change)=\"passCarId($event)\" class=\"custom-select\" name=\"carItem\" ngModel required>\r\n      <option></option>\r\n      <option *ngFor=\"let carItem of markName\" [value]=\"carItem._id\">{{carItem.markName}}</option>\r\n    </select>\r\n  </div>\r\n  <!-- Блок внесения данных -->\r\n  <div class=\"form-group\">\r\n    <label>Внесите название модели автомобиля</label>\r\n    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"modelName\" name=\"modelName\" required #name=\"ngModel\"\r\n      [class.is-invalid]=\"name.invalid && name.touched\">\r\n    <small *ngIf=\"name.invalid && name.touched\">Заполните форму</small>\r\n  </div>\r\n  <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"form.form.invalid\">Добавить</button>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/modules/add-car/add-model/add-model.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/modules/add-car/add-model/add-model.component.ts ***!
  \******************************************************************/
/*! exports provided: AddModelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddModelComponent", function() { return AddModelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var src_app_services_flash_message_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/flash-message.service */ "./src/app/services/flash-message.service.ts");




var AddModelComponent = /** @class */ (function () {
    function AddModelComponent(_apiService, _flashMessagesService) {
        this._apiService = _apiService;
        this._flashMessagesService = _flashMessagesService;
        this.markName = [];
    }
    AddModelComponent.prototype.ngOnInit = function () {
        // Получение списка машин при загрузке страницы
        this.getCars();
    };
    // Получение списка машин
    AddModelComponent.prototype.getCars = function () {
        var _this = this;
        this._apiService.getCars()
            .subscribe(function (data) {
            _this.markName = data;
        }, function (error) {
            _this._flashMessagesService.showMessage(error).subscribe(function (data) { return _this.message = data; });
        });
    };
    // Получение Id выбранной машины.
    AddModelComponent.prototype.passCarId = function (event) {
        this.carId = event.target.value;
    };
    // Создать новый объект модели, передать название модели, отправить на сервер, очистить форму, вывести сообщение об успехе или неудаче
    AddModelComponent.prototype.addModel = function () {
        var _this = this;
        var model = {
            modelsName: this.modelName
        };
        if (this.carId) {
            this._apiService.createModel(this.carId, model)
                .subscribe(function (data) {
                _this._flashMessagesService.showMessage('Данные успешно добавлены', 'success', 3000).subscribe(function (msg) {
                    _this.message = msg;
                });
            }, function (error) {
                _this._flashMessagesService.showMessage(error).subscribe(function (data) { return _this.message = data; });
            });
            this.modelName = '';
        }
        else {
            this._flashMessagesService.showMessage('Выберите данные автомобиля').subscribe(function (data) { return _this.message = data; });
        }
    };
    AddModelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-model',
            template: __webpack_require__(/*! ./add-model.component.html */ "./src/app/modules/add-car/add-model/add-model.component.html"),
            styles: [__webpack_require__(/*! ./add-model.component.css */ "./src/app/modules/add-car/add-model/add-model.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"],
            src_app_services_flash_message_service__WEBPACK_IMPORTED_MODULE_3__["FlashMessageService"]])
    ], AddModelComponent);
    return AddModelComponent;
}());



/***/ }),

/***/ "./src/app/modules/add-car/add-modification/add-modification.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/add-car/add-modification/add-modification.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "select {\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.form-group {\r\n    margin-bottom: 5px;\r\n}\r\n\r\nsmall {\r\n    color: #d9534f;\r\n    margin-bottom: 7px;\r\n    display: block;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tb2R1bGVzL2FkZC1jYXIvYWRkLW1vZGlmaWNhdGlvbi9hZGQtbW9kaWZpY2F0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxvQkFBb0I7Q0FDdkI7O0FBRUQ7SUFDSSxtQkFBbUI7Q0FDdEI7O0FBRUQ7SUFDSSxlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLGVBQWU7Q0FDbEIiLCJmaWxlIjoiYXBwL21vZHVsZXMvYWRkLWNhci9hZGQtbW9kaWZpY2F0aW9uL2FkZC1tb2RpZmljYXRpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInNlbGVjdCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4uZm9ybS1ncm91cCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbn1cclxuXHJcbnNtYWxsIHtcclxuICAgIGNvbG9yOiAjZDk1MzRmO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogN3B4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/modules/add-car/add-modification/add-modification.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/add-car/add-modification/add-modification.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Вывод флеш-сообщений -->\r\n<div class=\"alert alert-{{message.type}}\" *ngIf=\"message\">{{message.text}}</div>\r\n<form #form=\"ngForm\" novalidate (ngSubmit)=\"addModification()\">\r\n  <div class=\"form-group\">\r\n    <label>Марка</label>\r\n    <!-- Передача ID выбранной марки в компонент -->\r\n    <select (change)=\"passCarId($event)\" class=\"custom-select\" name=\"carItem\" ngModel required>\r\n      <option></option>\r\n      <option *ngFor=\"let carItem of markName\" [value]=\"carItem._id\">{{carItem.markName}}</option>\r\n    </select>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label>Модель</label>\r\n    <!-- Передача ID выбранной модели в компонент -->\r\n    <select (change)=\"passModelId($event)\" class=\"custom-select\" name=\"model\" ngModel required>\r\n      <option></option>\r\n      <option *ngFor=\"let model of modelName\" [value]=\"model._id\">{{model.modelsName}}</option>\r\n    </select>\r\n  </div>\r\n  <!-- Блок внесения данных -->\r\n  <div class=\"form-group\">\r\n    <label>Внесите модификацию автомобиля</label>\r\n    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"modificationlName\" name=\"modificationlName\" required #name=\"ngModel\"\r\n      [class.is-invalid]=\"name.invalid && name.touched\">\r\n    <small *ngIf=\"name.invalid && name.touched\">Заполните форму</small>\r\n  </div>\r\n  <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"form.form.invalid\">Добавить</button>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/modules/add-car/add-modification/add-modification.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/modules/add-car/add-modification/add-modification.component.ts ***!
  \********************************************************************************/
/*! exports provided: AddModificationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddModificationComponent", function() { return AddModificationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var src_app_services_flash_message_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/flash-message.service */ "./src/app/services/flash-message.service.ts");




var AddModificationComponent = /** @class */ (function () {
    function AddModificationComponent(_apiService, _flashMessagesService) {
        this._apiService = _apiService;
        this._flashMessagesService = _flashMessagesService;
        this.markName = [];
        this.modelName = [];
    }
    AddModificationComponent.prototype.ngOnInit = function () {
        // Получение списка машин при загрузке страницы
        this.getCars();
    };
    // Получение списка машин
    AddModificationComponent.prototype.getCars = function () {
        var _this = this;
        this._apiService.getCars()
            .subscribe(function (data) {
            _this.markName = data;
        }, function (error) {
            _this._flashMessagesService.showMessage(error).subscribe(function (data) { return _this.message = data; });
        });
    };
    // Получение Id выбранной машины. Получение списка моделей
    AddModificationComponent.prototype.passCarId = function (event) {
        var _this = this;
        this.carId = event.target.value;
        this._apiService.getModelName(this.carId)
            .subscribe(function (data) {
            _this.modelName = data;
        }, function (error) {
            _this._flashMessagesService.showMessage(error).subscribe(function (data) { return _this.message = data; });
        });
    };
    // Получение Id выбранной модели.
    AddModificationComponent.prototype.passModelId = function (event) {
        this.modelId = event.target.value;
    };
    // Создать новый объект модификации, передать название модификации,
    //  отправить на сервер, очистить форму, вывести сообщение об успехе или неудаче
    AddModificationComponent.prototype.addModification = function () {
        var _this = this;
        var model = {
            modificationName: this.modificationlName
        };
        if (this.carId && this.modelId) {
            this._apiService.createModification(this.carId, this.modelId, model)
                .subscribe(function (data) {
                _this._flashMessagesService.showMessage('Данные успешно добавлены', 'success', 3000).subscribe(function (msg) {
                    _this.message = msg;
                });
            }, function (error) {
                _this._flashMessagesService.showMessage(error).subscribe(function (data) { return _this.message = data; });
            });
            this.modificationlName = '';
        }
        else {
            this._flashMessagesService.showMessage('Выберите данные автомобиля').subscribe(function (data) { return _this.message = data; });
        }
    };
    AddModificationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-modification',
            template: __webpack_require__(/*! ./add-modification.component.html */ "./src/app/modules/add-car/add-modification/add-modification.component.html"),
            styles: [__webpack_require__(/*! ./add-modification.component.css */ "./src/app/modules/add-car/add-modification/add-modification.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"],
            src_app_services_flash_message_service__WEBPACK_IMPORTED_MODULE_3__["FlashMessageService"]])
    ], AddModificationComponent);
    return AddModificationComponent;
}());



/***/ }),

/***/ "./src/app/modules/add-car/add-unit/add-unit.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/modules/add-car/add-unit/add-unit.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "select {\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.form-group {\r\n    margin-bottom: 5px;\r\n}\r\n\r\nsmall {\r\n    color: #d9534f;\r\n    margin-bottom: 7px;\r\n    display: block;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tb2R1bGVzL2FkZC1jYXIvYWRkLXVuaXQvYWRkLXVuaXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG9CQUFvQjtDQUN2Qjs7QUFFRDtJQUNJLG1CQUFtQjtDQUN0Qjs7QUFFRDtJQUNJLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsZUFBZTtDQUNsQiIsImZpbGUiOiJhcHAvbW9kdWxlcy9hZGQtY2FyL2FkZC11bml0L2FkZC11bml0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJzZWxlY3Qge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLmZvcm0tZ3JvdXAge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG59XHJcblxyXG5zbWFsbCB7XHJcbiAgICBjb2xvcjogI2Q5NTM0ZjtcclxuICAgIG1hcmdpbi1ib3R0b206IDdweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/modules/add-car/add-unit/add-unit.component.html":
/*!******************************************************************!*\
  !*** ./src/app/modules/add-car/add-unit/add-unit.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Вывод флеш-сообщений -->\r\n<div class=\"alert alert-{{message.type}}\" *ngIf=\"message\">{{message.text}}</div>\r\n<form #form=\"ngForm\" novalidate (ngSubmit)=\"addUnit()\">\r\n  <div class=\"form-group\">\r\n    <label>Марка</label>\r\n    <!-- Передача ID выбранной марки в компонент -->\r\n    <select (change)=\"passCarId($event)\" class=\"custom-select\" name=\"carItem\" ngModel required>\r\n      <option></option>\r\n      <option *ngFor=\"let carItem of markName\" [value]=\"carItem._id\">{{carItem.markName}}</option>\r\n    </select>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label>Модель</label>\r\n    <!-- Передача ID выбранной модели в компонент -->\r\n    <select (change)=\"passModelId($event)\" class=\"custom-select\" name=\"model\" ngModel required>\r\n      <option></option>\r\n      <option *ngFor=\"let model of modelName\" [value]=\"model._id\">{{model.modelsName}}</option>\r\n    </select>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label>Модификация</label>\r\n    <!-- Передача ID выбранной модификации в компонент -->\r\n    <select (change)=\"passModificationId($event)\" class=\"custom-select\" name=\"modification\" ngModel required>\r\n      <option></option>\r\n      <option *ngFor=\"let modification of modifications\" [value]=\"modification._id\">{{modification.modificationName}}</option>\r\n    </select>\r\n  </div>\r\n  <!-- Блок внесения данных -->\r\n  <div class=\"form-group\">\r\n    <label>Внесите название агрегата автомобиля</label>\r\n    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"unitName\" name=\"unitlName\" required #name=\"ngModel\"\r\n      [class.is-invalid]=\"name.invalid && name.touched\">\r\n    <small *ngIf=\"name.invalid && name.touched\">Заполните форму</small>\r\n  </div>\r\n  <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"form.form.invalid\">Добавить</button>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/modules/add-car/add-unit/add-unit.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/modules/add-car/add-unit/add-unit.component.ts ***!
  \****************************************************************/
/*! exports provided: AddUnitComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddUnitComponent", function() { return AddUnitComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var src_app_services_flash_message_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/flash-message.service */ "./src/app/services/flash-message.service.ts");




var AddUnitComponent = /** @class */ (function () {
    function AddUnitComponent(_apiService, _flashMessagesService) {
        this._apiService = _apiService;
        this._flashMessagesService = _flashMessagesService;
        this.markName = [];
        this.modelName = [];
        this.modifications = [];
    }
    AddUnitComponent.prototype.ngOnInit = function () {
        // Получение списка машин при загрузке страницы
        this.getCars();
    };
    // Получение списка машин
    AddUnitComponent.prototype.getCars = function () {
        var _this = this;
        this._apiService.getCars()
            .subscribe(function (data) {
            _this.markName = data;
        }, function (error) {
            _this._flashMessagesService.showMessage(error).subscribe(function (data) { return _this.message = data; });
        });
    };
    // Получение Id выбранной машины. Получение списка моделей
    AddUnitComponent.prototype.passCarId = function (event) {
        var _this = this;
        this.carId = event.target.value;
        this._apiService.getModelName(this.carId)
            .subscribe(function (data) {
            _this.modelName = data;
        }, function (error) {
            _this._flashMessagesService.showMessage(error).subscribe(function (data) { return _this.message = data; });
        });
    };
    // Получение Id выбранной модели. Получение списка модификаций
    AddUnitComponent.prototype.passModelId = function (event) {
        var _this = this;
        this.modelId = event.target.value;
        this._apiService.getModificationName(this.carId, this.modelId)
            .subscribe(function (data) {
            _this.modifications = data;
        }, function (error) {
            _this._flashMessagesService.showMessage(error).subscribe(function (data) { return _this.message = data; });
        });
    };
    // Получение Id выбранной модификации.
    AddUnitComponent.prototype.passModificationId = function (event) {
        this.unitId = event.target.value;
    };
    // Создать новый объект агрегата, передать название агрегата,
    //  отправить на сервер, очистить форму, вывести сообщение об успехе или неудаче
    AddUnitComponent.prototype.addUnit = function () {
        var _this = this;
        var unit = {
            unitName: this.unitName
        };
        if (this.carId && this.modelId && this.unitId) {
            this._apiService.createUnit(this.carId, this.modelId, this.unitId, unit)
                .subscribe(function (data) {
                _this._flashMessagesService.showMessage('Данные успешно добавлены', 'success', 3000).subscribe(function (msg) {
                    _this.message = msg;
                });
            }, function (error) {
                _this._flashMessagesService.showMessage(error).subscribe(function (data) { return _this.message = data; });
            });
            this.unitName = '';
        }
        else {
            this._flashMessagesService.showMessage('Выберите данные автомобиля').subscribe(function (data) { return _this.message = data; });
        }
    };
    AddUnitComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-unit',
            template: __webpack_require__(/*! ./add-unit.component.html */ "./src/app/modules/add-car/add-unit/add-unit.component.html"),
            styles: [__webpack_require__(/*! ./add-unit.component.css */ "./src/app/modules/add-car/add-unit/add-unit.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"],
            src_app_services_flash_message_service__WEBPACK_IMPORTED_MODULE_3__["FlashMessageService"]])
    ], AddUnitComponent);
    return AddUnitComponent;
}());



/***/ }),

/***/ "./src/app/modules/add-car/edit-detail-analogue/edit-detail-analogue.component.css":
/*!*****************************************************************************************!*\
  !*** ./src/app/modules/add-car/edit-detail-analogue/edit-detail-analogue.component.css ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input {\r\n    margin-bottom: 7px;\r\n}\r\n\r\nselect {\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.form-group {\r\n    margin-bottom: 5px;\r\n}\r\n\r\nsmall {\r\n    color: #d9534f;\r\n    margin-bottom: 7px;\r\n    display: block;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tb2R1bGVzL2FkZC1jYXIvZWRpdC1kZXRhaWwtYW5hbG9ndWUvZWRpdC1kZXRhaWwtYW5hbG9ndWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG1CQUFtQjtDQUN0Qjs7QUFFRDtJQUNJLG9CQUFvQjtDQUN2Qjs7QUFFRDtJQUNJLG1CQUFtQjtDQUN0Qjs7QUFFRDtJQUNJLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsZUFBZTtDQUNsQiIsImZpbGUiOiJhcHAvbW9kdWxlcy9hZGQtY2FyL2VkaXQtZGV0YWlsLWFuYWxvZ3VlL2VkaXQtZGV0YWlsLWFuYWxvZ3VlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbnB1dCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA3cHg7XHJcbn1cclxuXHJcbnNlbGVjdCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4uZm9ybS1ncm91cCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbn1cclxuXHJcbnNtYWxsIHtcclxuICAgIGNvbG9yOiAjZDk1MzRmO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogN3B4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/modules/add-car/edit-detail-analogue/edit-detail-analogue.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/add-car/edit-detail-analogue/edit-detail-analogue.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Вывод флеш-сообщений -->\r\n<div class=\"alert alert-{{message.type}}\" *ngIf=\"message\">{{message.text}}</div>\r\n<form #form=\"ngForm\" novalidate>\r\n  <div class=\"form-group\">\r\n    <label>Марка</label>\r\n    <!-- Передача ID выбранной марки в компонент -->\r\n    <select (change)=\"passCarId($event)\" class=\"custom-select\" name=\"carItem\" ngModel required>\r\n      <option></option>\r\n      <option *ngFor=\"let carItem of markName\" [value]=\"carItem._id\">{{carItem.markName}}</option>\r\n    </select>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label>Модель</label>\r\n    <!-- Передача ID выбранной модели в компонент -->\r\n    <select (change)=\"passModelId($event)\" class=\"custom-select\" name=\"model\" ngModel required>\r\n      <option></option>\r\n      <option *ngFor=\"let model of modelName\" [value]=\"model._id\">{{model.modelsName}}</option>\r\n    </select>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label>Модификация</label>\r\n    <!-- Передача ID выбранной модификации в компонент -->\r\n    <select (change)=\"passModificationId($event)\" class=\"custom-select\" name=\"modification\" ngModel required>\r\n      <option></option>\r\n      <option *ngFor=\"let modification of modifications\" [value]=\"modification._id\">{{modification.modificationName}}</option>\r\n    </select>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label>Агрегат</label>\r\n    <!-- Передача ID выбранного агрегата в компонент -->\r\n    <select (change)=\"passUnitId($event)\" class=\"custom-select\" name=\"unit\" ngModel required>\r\n      <option></option>\r\n      <option *ngFor=\"let unit of units\" [value]=\"unit._id\">{{unit.unitName}}</option>\r\n    </select>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label>Деталь</label>\r\n    <!-- Передача ID выбранной детали в компонент -->\r\n    <select (change)=\"passDetailId($event)\" class=\"custom-select\" name=\"detail\" ngModel required>\r\n      <option></option>\r\n      <option *ngFor=\"let detail of details\" [value]=\"detail._id\">{{detail.detailName}}</option>\r\n    </select>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label>Номер оригинальный</label>\r\n    <!-- Передача ID выбранных оригинальных номеров в компонент -->\r\n    <select (change)=\"passOriginalId($event)\" class=\"custom-select\" name=\"analogue\" ngModel required>\r\n      <option></option>\r\n      <option *ngFor=\"let analogue of analogues\" [value]=\"analogue._id\">{{analogue.originalNumber}}</option>\r\n    </select>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label>Фирма аналога</label>\r\n    <!-- Передача ID выбранных оригинальных номеров в компонент -->\r\n    <select (change)=\"passAnalogueId($event)\" class=\"custom-select\" name=\"an\" ngModel required>\r\n      <option></option>\r\n      <option *ngFor=\"let an of ans\" [value]=\"an._id\">{{an.analogueName}}</option>\r\n    </select>\r\n  </div>\r\n  <button class=\"btn btn-danger\" (click)=\"remove()\" [disabled]=\"!isConfirmed\">Удалить</button>\r\n  <!-- Блок добавления данных -->\r\n  <div class=\"form-group\">\r\n    <label>Внесите данные аналога</label>\r\n    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"analogueName\" name=\"analogueName\" required placeholder=\"Внесите название аналога\"\r\n      #name=\"ngModel\" [class.is-invalid]=\"name.invalid && name.touched\">\r\n    <small *ngIf=\"name.invalid && name.touched\">Заполните форму</small>\r\n    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"analogueNum\" name=\"analogueNum\" required placeholder=\"Внесите артикул аналога\"\r\n      #number=\"ngModel\" [class.is-invalid]=\"number.invalid && number.touched\">\r\n    <small *ngIf=\"number.invalid && number.touched\">Заполните форму</small>\r\n  </div>\r\n  <button class=\"btn btn-warning\" (click)=\"editAnalogue()\" [disabled]=\"form.form.invalid\">Редактировать</button>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/modules/add-car/edit-detail-analogue/edit-detail-analogue.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/add-car/edit-detail-analogue/edit-detail-analogue.component.ts ***!
  \****************************************************************************************/
/*! exports provided: EditDetailAnalogueComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditDetailAnalogueComponent", function() { return EditDetailAnalogueComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var src_app_services_flash_message_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/flash-message.service */ "./src/app/services/flash-message.service.ts");




var EditDetailAnalogueComponent = /** @class */ (function () {
    function EditDetailAnalogueComponent(_apiService, _flashMessagesService) {
        this._apiService = _apiService;
        this._flashMessagesService = _flashMessagesService;
        this.markName = [];
        this.modelName = [];
        this.modifications = [];
        this.units = [];
        this.details = [];
        this.analogues = [];
        this.ans = [];
        this.isConfirmed = false;
    }
    EditDetailAnalogueComponent.prototype.ngOnInit = function () {
        // Получение списка машин при загрузке страницы
        this.getCars();
    };
    // Получение списка машин
    EditDetailAnalogueComponent.prototype.getCars = function () {
        var _this = this;
        this._apiService.getCars()
            .subscribe(function (data) {
            _this.markName = data;
        }, function (error) {
            _this._flashMessagesService.showMessage(error).subscribe(function (data) { return _this.message = data; });
        });
    };
    // Получение Id выбранной машины. Получение списка моделей
    EditDetailAnalogueComponent.prototype.passCarId = function (event) {
        var _this = this;
        this.carId = event.target.value;
        this._apiService.getModelName(this.carId)
            .subscribe(function (data) {
            _this.modelName = data;
        }, function (error) {
            _this._flashMessagesService.showMessage(error).subscribe(function (data) { return _this.message = data; });
        });
    };
    // Получение Id выбранной модели. Получение списка модификаций
    EditDetailAnalogueComponent.prototype.passModelId = function (event) {
        var _this = this;
        this.modelId = event.target.value;
        this._apiService.getModificationName(this.carId, this.modelId)
            .subscribe(function (data) {
            _this.modifications = data;
        }, function (error) {
            _this._flashMessagesService.showMessage(error).subscribe(function (data) { return _this.message = data; });
        });
    };
    // Получение Id выбранной модификации. Получение списка агрегатов
    EditDetailAnalogueComponent.prototype.passModificationId = function (event) {
        var _this = this;
        this.unitId = event.target.value;
        this._apiService.getPartsList(this.carId, this.modelId, this.unitId)
            .subscribe(function (data) {
            _this.units = data;
        }, function (error) {
            _this._flashMessagesService.showMessage(error).subscribe(function (data) { return _this.message = data; });
        });
    };
    // Получение Id выбранного агрегата. Получение списка деталей
    EditDetailAnalogueComponent.prototype.passUnitId = function (event) {
        var _this = this;
        this.detailId = event.target.value;
        this._apiService.getDetailsItem(this.carId, this.modelId, this.unitId, this.detailId)
            .subscribe(function (data) {
            _this.details = data;
        }, function (error) {
            _this._flashMessagesService.showMessage(error).subscribe(function (data) { return _this.message = data; });
        });
    };
    // Получение Id детали. Получение списка составляющих детали.
    EditDetailAnalogueComponent.prototype.passDetailId = function (event) {
        var _this = this;
        this.itemId = event.target.value;
        this._apiService.getItem(this.carId, this.modelId, this.unitId, this.detailId, this.itemId)
            .subscribe(function (data) {
            _this.analogues = data;
        }, function (error) {
            _this._flashMessagesService.showMessage(error).subscribe(function (data) { return _this.message = data; });
        });
    };
    // Получение Id оригинального номера. Получение списка составляющих аналогов.
    EditDetailAnalogueComponent.prototype.passOriginalId = function (event) {
        var _this = this;
        this.originalId = event.target.value;
        this._apiService.getAnalogue(this.carId, this.modelId, this.unitId, this.detailId, this.itemId, this.originalId)
            .subscribe(function (data) {
            _this.ans = data;
        }, function (error) {
            _this._flashMessagesService.showMessage(error).subscribe(function (data) { return _this.message = data; });
        });
    };
    // Получение Id аналога
    EditDetailAnalogueComponent.prototype.passAnalogueId = function (event) {
        this.anId = event.target.value;
        this.isConfirmed = true;
    };
    // Создать новый объект для аналога, передать сервису,
    //  отправить на сервер, очистить форму, вывести сообщение об успехе или неудаче
    EditDetailAnalogueComponent.prototype.editAnalogue = function () {
        var _this = this;
        var analogue = {
            analogueName: this.analogueName,
            analogueNum: this.analogueNum
        };
        if (this.carId && this.modelId && this.unitId && this.detailId && this.itemId && this.originalId && this.anId) {
            this._apiService.editAnalogue(this.carId, this.modelId, this.unitId, this.detailId, this.itemId, this.originalId, this.anId, analogue)
                .subscribe(function (data) {
                _this._flashMessagesService.showMessage('Данные успешно добавлены', 'success', 3000).subscribe(function (msg) {
                    _this.message = msg;
                });
            }, function (error) {
                _this._flashMessagesService.showMessage(error).subscribe(function (data) { return _this.message = data; });
            });
            this.analogueName = '';
            this.analogueNum = '';
        }
        else {
            this._flashMessagesService.showMessage('Выберите данные автомобиля').subscribe(function (data) { return _this.message = data; });
        }
    };
    // Удаление аналога
    EditDetailAnalogueComponent.prototype.remove = function () {
        var _this = this;
        if (this.carId && this.modelId && this.unitId && this.detailId && this.itemId && this.originalId && this.anId) {
            this._apiService.removeAnalogue(this.carId, this.modelId, this.unitId, this.detailId, this.itemId, this.originalId, this.anId)
                .subscribe(function (data) {
                _this._flashMessagesService.showMessage('Данные успешно удалены', 'success', 3000).subscribe(function (msg) {
                    _this.message = msg;
                });
            }, function (error) {
                _this._flashMessagesService.showMessage(error).subscribe(function (data) { return _this.message = data; });
            });
        }
        else {
            this._flashMessagesService.showMessage('Выберите данные автомобиля').subscribe(function (data) { return _this.message = data; });
        }
    };
    EditDetailAnalogueComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-detail-analogue',
            template: __webpack_require__(/*! ./edit-detail-analogue.component.html */ "./src/app/modules/add-car/edit-detail-analogue/edit-detail-analogue.component.html"),
            styles: [__webpack_require__(/*! ./edit-detail-analogue.component.css */ "./src/app/modules/add-car/edit-detail-analogue/edit-detail-analogue.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"],
            src_app_services_flash_message_service__WEBPACK_IMPORTED_MODULE_3__["FlashMessageService"]])
    ], EditDetailAnalogueComponent);
    return EditDetailAnalogueComponent;
}());



/***/ }),

/***/ "./src/app/modules/add-car/edit-detail-item/edit-detail-item.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/add-car/edit-detail-item/edit-detail-item.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input {\r\n    margin-bottom: 7px;\r\n}\r\n\r\nselect {\r\n    margin-bottom: 10px;\r\n}\r\n\r\ntextarea {\r\n    margin-bottom: 7px;\r\n}\r\n\r\n.form-group {\r\n    margin-bottom: 5px;\r\n}\r\n\r\nsmall {\r\n    color: #d9534f;\r\n    margin-bottom: 7px;\r\n    display: block;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tb2R1bGVzL2FkZC1jYXIvZWRpdC1kZXRhaWwtaXRlbS9lZGl0LWRldGFpbC1pdGVtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQkFBbUI7Q0FDdEI7O0FBRUQ7SUFDSSxvQkFBb0I7Q0FDdkI7O0FBRUQ7SUFDSSxtQkFBbUI7Q0FDdEI7O0FBRUQ7SUFDSSxtQkFBbUI7Q0FDdEI7O0FBRUQ7SUFDSSxlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLGVBQWU7Q0FDbEIiLCJmaWxlIjoiYXBwL21vZHVsZXMvYWRkLWNhci9lZGl0LWRldGFpbC1pdGVtL2VkaXQtZGV0YWlsLWl0ZW0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImlucHV0IHtcclxuICAgIG1hcmdpbi1ib3R0b206IDdweDtcclxufVxyXG5cclxuc2VsZWN0IHtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbnRleHRhcmVhIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDdweDtcclxufVxyXG5cclxuLmZvcm0tZ3JvdXAge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG59XHJcblxyXG5zbWFsbCB7XHJcbiAgICBjb2xvcjogI2Q5NTM0ZjtcclxuICAgIG1hcmdpbi1ib3R0b206IDdweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/modules/add-car/edit-detail-item/edit-detail-item.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/add-car/edit-detail-item/edit-detail-item.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Вывод флеш-сообщений -->\r\n<div class=\"alert alert-{{message.type}}\" *ngIf=\"message\">{{message.text}}</div>\r\n<form #form=\"ngForm\" novalidate>\r\n  <div class=\"form-group\">\r\n    <label>Марка</label>\r\n    <!-- Передача ID выбранной марки в компонент -->\r\n    <select (change)=\"passCarId($event)\" class=\"custom-select\" name=\"carItem\" ngModel required>\r\n      <option></option>\r\n      <option *ngFor=\"let carItem of markName\" [value]=\"carItem._id\">{{carItem.markName}}</option>\r\n    </select>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label>Модель</label>\r\n    <!-- Передача ID выбранной модели в компонент -->\r\n    <select (change)=\"passModelId($event)\" class=\"custom-select\" name=\"model\" ngModel required>\r\n      <option></option>\r\n      <option *ngFor=\"let model of modelName\" [value]=\"model._id\">{{model.modelsName}}</option>\r\n    </select>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label>Модификация</label>\r\n    <!-- Передача ID выбранной модификации в компонент -->\r\n    <select (change)=\"passModificationId($event)\" class=\"custom-select\" name=\"modification\" ngModel required>\r\n      <option></option>\r\n      <option *ngFor=\"let modification of modifications\" [value]=\"modification._id\">{{modification.modificationName}}</option>\r\n    </select>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label>Агрегат</label>\r\n    <!-- Передача ID выбранного агрегата в компонент -->\r\n    <select (change)=\"passUnitId($event)\" class=\"custom-select\" name=\"unit\" ngModel required>\r\n      <option></option>\r\n      <option *ngFor=\"let unit of units\" [value]=\"unit._id\">{{unit.unitName}}</option>\r\n    </select>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label>Деталь</label>\r\n    <!-- Передача ID выбранной детали в компонент -->\r\n    <select (change)=\"passDetailId($event)\" class=\"custom-select\" name=\"detail\" ngModel required>\r\n      <option></option>\r\n      <option *ngFor=\"let detail of details\" [value]=\"detail._id\">{{detail.detailName}}</option>\r\n    </select>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label>Оригинальный номер</label>\r\n    <!-- Передача ID выбранных оригинальных номеров в компонент -->\r\n    <select (change)=\"passOriginalId($event)\" class=\"custom-select\" name=\"analogue\" ngModel required>\r\n      <option></option>\r\n      <option *ngFor=\"let analogue of analogues\" [value]=\"analogue._id\">{{analogue.originalNumber}}</option>\r\n    </select>\r\n  </div>\r\n  <button class=\"btn btn-danger\" (click)=\"remove()\" [disabled]=\"!isConfirmed\">Удалить</button>\r\n  <!-- Блок внесения данных -->\r\n  <div class=\"form-group\">\r\n    <label>Внесите новые данные для детали автомобиля</label>\r\n    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"originalNumber\" name=\"originalNumber\" required placeholder=\"Внесите оригинальные номера через запятую\"\r\n      #number=\"ngModel\" [class.is-invalid]=\"number.invalid && number.touched\">\r\n    <small *ngIf=\"number.invalid && number.touched\">Заполните форму</small>\r\n    <textarea type=\"text\" class=\"form-control\" [(ngModel)]=\"note\" name=\"note\" placeholder=\"Добавьте примечание\"></textarea>\r\n    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"picture\" name=\"picture\" placeholder=\"Внесите ссылку на изображение\">\r\n  </div>\r\n  <button class=\"btn btn-warning\" (click)=\"editItems()\" [disabled]=\"form.form.invalid\">Редактировать</button>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/modules/add-car/edit-detail-item/edit-detail-item.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/modules/add-car/edit-detail-item/edit-detail-item.component.ts ***!
  \********************************************************************************/
/*! exports provided: EditDetailItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditDetailItemComponent", function() { return EditDetailItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_flash_message_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/flash-message.service */ "./src/app/services/flash-message.service.ts");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../services/api.service */ "./src/app/services/api.service.ts");




var EditDetailItemComponent = /** @class */ (function () {
    function EditDetailItemComponent(_apiService, _flashMessagesService) {
        this._apiService = _apiService;
        this._flashMessagesService = _flashMessagesService;
        this.markName = [];
        this.modelName = [];
        this.modifications = [];
        this.units = [];
        this.details = [];
        this.originalNumber = [];
        this.analogues = [];
        this.isConfirmed = false;
    }
    EditDetailItemComponent.prototype.ngOnInit = function () {
        // Получение списка машин при загрузке страницы
        this.getCars();
    };
    // Получение списка машин
    EditDetailItemComponent.prototype.getCars = function () {
        var _this = this;
        this._apiService.getCars()
            .subscribe(function (data) {
            _this.markName = data;
        }, function (error) {
            _this._flashMessagesService.showMessage(error).subscribe(function (data) { return _this.message = data; });
        });
    };
    // Получение Id выбранной машины. Получение списка моделей
    EditDetailItemComponent.prototype.passCarId = function (event) {
        var _this = this;
        this.carId = event.target.value;
        this._apiService.getModelName(this.carId)
            .subscribe(function (data) {
            _this.modelName = data;
        }, function (error) {
            _this._flashMessagesService.showMessage(error).subscribe(function (data) { return _this.message = data; });
        });
    };
    // Получение Id выбранной модели. Получение списка модификаций
    EditDetailItemComponent.prototype.passModelId = function (event) {
        var _this = this;
        this.modelId = event.target.value;
        this._apiService.getModificationName(this.carId, this.modelId)
            .subscribe(function (data) {
            _this.modifications = data;
        }, function (error) {
            _this._flashMessagesService.showMessage(error).subscribe(function (data) { return _this.message = data; });
        });
    };
    // Получение Id выбранной модификации. Получение списка агрегатов
    EditDetailItemComponent.prototype.passModificationId = function (event) {
        var _this = this;
        this.unitId = event.target.value;
        this._apiService.getPartsList(this.carId, this.modelId, this.unitId)
            .subscribe(function (data) {
            _this.units = data;
        }, function (error) {
            _this._flashMessagesService.showMessage(error).subscribe(function (data) { return _this.message = data; });
        });
    };
    // Получение Id выбранного агрегата. Получение списка деталей
    EditDetailItemComponent.prototype.passUnitId = function (event) {
        var _this = this;
        this.detailId = event.target.value;
        this._apiService.getDetailsItem(this.carId, this.modelId, this.unitId, this.detailId)
            .subscribe(function (data) {
            _this.details = data;
        }, function (error) {
            _this._flashMessagesService.showMessage(error).subscribe(function (data) { return _this.message = data; });
        });
    };
    // Получение Id детали. Получение списка составляющих детали.
    EditDetailItemComponent.prototype.passDetailId = function (event) {
        var _this = this;
        this.itemId = event.target.value;
        this._apiService.getItem(this.carId, this.modelId, this.unitId, this.detailId, this.itemId)
            .subscribe(function (data) {
            _this.analogues = data;
        }, function (error) {
            _this._flashMessagesService.showMessage(error).subscribe(function (data) { return _this.message = data; });
        });
    };
    // Получение Id оригинального номера.
    EditDetailItemComponent.prototype.passOriginalId = function (event) {
        this.originalId = event.target.value;
        this.isConfirmed = true;
    };
    // Создать новый объект для дынных детали, передать сервису,
    //  отправить на сервер, очистить форму, вывести сообщение об успехе или неудаче
    EditDetailItemComponent.prototype.editItems = function () {
        var _this = this;
        var item = {
            originalNumber: this.originalNumber,
            note: this.note,
            picture: this.picture
        };
        if (this.carId && this.modelId && this.unitId && this.detailId && this.itemId && this.originalId) {
            this._apiService.editDetailItems(this.carId, this.modelId, this.unitId, this.detailId, this.itemId, this.originalId, item)
                .subscribe(function (data) {
                _this._flashMessagesService.showMessage('Данные успешно обновлены', 'success', 3000).subscribe(function (msg) {
                    _this.message = msg;
                });
            }, function (error) {
                _this._flashMessagesService.showMessage(error).subscribe(function (data) { return _this.message = data; });
            });
            this.originalNumber = [];
            this.note = '';
            this.picture = '';
        }
        else {
            this._flashMessagesService.showMessage('Выберите данные автомобиля').subscribe(function (data) { return _this.message = data; });
        }
    };
    // Удаление дынных детали
    EditDetailItemComponent.prototype.remove = function () {
        var _this = this;
        if (this.carId && this.modelId && this.unitId && this.detailId && this.itemId && this.originalId) {
            this._apiService.removeItem(this.carId, this.modelId, this.unitId, this.detailId, this.itemId, this.originalId)
                .subscribe(function (data) {
                _this._flashMessagesService.showMessage('Данные успешно удалены', 'success', 3000).subscribe(function (msg) {
                    _this.message = msg;
                });
            }, function (error) {
                _this._flashMessagesService.showMessage(error).subscribe(function (data) { return _this.message = data; });
            });
        }
        else {
            this._flashMessagesService.showMessage('Выберите данные автомобиля').subscribe(function (data) { return _this.message = data; });
        }
    };
    EditDetailItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-detail-item',
            template: __webpack_require__(/*! ./edit-detail-item.component.html */ "./src/app/modules/add-car/edit-detail-item/edit-detail-item.component.html"),
            styles: [__webpack_require__(/*! ./edit-detail-item.component.css */ "./src/app/modules/add-car/edit-detail-item/edit-detail-item.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"],
            src_app_services_flash_message_service__WEBPACK_IMPORTED_MODULE_2__["FlashMessageService"]])
    ], EditDetailItemComponent);
    return EditDetailItemComponent;
}());



/***/ }),

/***/ "./src/app/modules/add-car/edit-detail/edit-detail.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/modules/add-car/edit-detail/edit-detail.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input {\r\n    margin-bottom: 7px;\r\n}\r\n\r\nselect {\r\n    margin-bottom: 10px;\r\n}\r\n\r\ntextarea {\r\n    margin-bottom: 7px;\r\n}\r\n\r\n.form-group {\r\n    margin-bottom: 5px;\r\n}\r\n\r\nsmall {\r\n    color: #d9534f;\r\n    margin-bottom: 7px;\r\n    display: block;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tb2R1bGVzL2FkZC1jYXIvZWRpdC1kZXRhaWwvZWRpdC1kZXRhaWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG1CQUFtQjtDQUN0Qjs7QUFFRDtJQUNJLG9CQUFvQjtDQUN2Qjs7QUFFRDtJQUNJLG1CQUFtQjtDQUN0Qjs7QUFFRDtJQUNJLG1CQUFtQjtDQUN0Qjs7QUFFRDtJQUNJLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsZUFBZTtDQUNsQiIsImZpbGUiOiJhcHAvbW9kdWxlcy9hZGQtY2FyL2VkaXQtZGV0YWlsL2VkaXQtZGV0YWlsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbnB1dCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA3cHg7XHJcbn1cclxuXHJcbnNlbGVjdCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG50ZXh0YXJlYSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA3cHg7XHJcbn1cclxuXHJcbi5mb3JtLWdyb3VwIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxufVxyXG5cclxuc21hbGwge1xyXG4gICAgY29sb3I6ICNkOTUzNGY7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA3cHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/modules/add-car/edit-detail/edit-detail.component.html":
/*!************************************************************************!*\
  !*** ./src/app/modules/add-car/edit-detail/edit-detail.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Вывод флеш-сообщений -->\r\n<div class=\"alert alert-{{message.type}}\" *ngIf=\"message\">{{message.text}}</div>\r\n<form #form=\"ngForm\" novalidate>\r\n  <div class=\"form-group\">\r\n    <label>Марка</label>\r\n    <!-- Передача ID выбранной марки в компонент -->\r\n    <select (change)=\"passCarId($event)\" class=\"custom-select\" name=\"carItem\" ngModel required>\r\n      <option></option>\r\n      <option *ngFor=\"let carItem of markName\" [value]=\"carItem._id\">{{carItem.markName}}</option>\r\n    </select>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label>Модель</label>\r\n    <!-- Передача ID выбранной модели в компонент -->\r\n    <select (change)=\"passModelId($event)\" class=\"custom-select\" name=\"model\" ngModel required>\r\n      <option></option>\r\n      <option *ngFor=\"let model of modelName\" [value]=\"model._id\">{{model.modelsName}}</option>\r\n    </select>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label>Модификация</label>\r\n    <!-- Передача ID выбранной модификации в компонент -->\r\n    <select (change)=\"passModificationId($event)\" class=\"custom-select\" name=\"modification\" ngModel required>\r\n      <option></option>\r\n      <option *ngFor=\"let modification of modifications\" [value]=\"modification._id\">{{modification.modificationName}}</option>\r\n    </select>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label>Агрегат</label>\r\n    <!-- Передача ID выбранного агрегата в компонент -->\r\n    <select (change)=\"passUnitId($event)\" class=\"custom-select\" name=\"unit\" ngModel required>\r\n      <option></option>\r\n      <option *ngFor=\"let unit of units\" [value]=\"unit._id\">{{unit.unitName}}</option>\r\n    </select>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label>Раздел</label>\r\n    <!-- Передача ID выбранной детали в компонент -->\r\n    <select (change)=\"passDetailId($event)\" class=\"custom-select\" name=\"detail\" ngModel required>\r\n      <option></option>\r\n      <option *ngFor=\"let detail of details\" [value]=\"detail._id\">{{detail.detailName}}</option>\r\n    </select>\r\n  </div>\r\n  <button class=\"btn btn-danger\" (click)=\"remove()\" [disabled]=\"!isConfirmed\">Удалить</button>\r\n  <!-- Блок внесения данных -->\r\n  <div class=\"form-group\">\r\n    <label>Внесите новые данные для детали автомобиля</label>\r\n    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"detailName\" name=\"detailName\" required #name=\"ngModel\"\r\n      [class.is-invalid]=\"name.invalid && name.touched\">\r\n    <small *ngIf=\"name.invalid && name.touched\">Заполните форму</small>\r\n  </div>\r\n  <button class=\"btn btn-warning\" (click)=\"editDetail()\" [disabled]=\"form.form.invalid\">Редактировать</button>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/modules/add-car/edit-detail/edit-detail.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/modules/add-car/edit-detail/edit-detail.component.ts ***!
  \**********************************************************************/
/*! exports provided: EditDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditDetailComponent", function() { return EditDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_services_flash_message_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/flash-message.service */ "./src/app/services/flash-message.service.ts");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");




var EditDetailComponent = /** @class */ (function () {
    function EditDetailComponent(_apiService, _flashMessagesService) {
        this._apiService = _apiService;
        this._flashMessagesService = _flashMessagesService;
        this.markName = [];
        this.modelName = [];
        this.modifications = [];
        this.units = [];
        this.details = [];
        this.isConfirmed = false;
    }
    EditDetailComponent.prototype.ngOnInit = function () {
        // Получение списка машин при загрузке страницы
        this.getCars();
    };
    // Получение списка машин
    EditDetailComponent.prototype.getCars = function () {
        var _this = this;
        this._apiService.getCars()
            .subscribe(function (data) {
            _this.markName = data;
        }, function (error) {
            _this._flashMessagesService.showMessage(error).subscribe(function (data) { return _this.message = data; });
        });
    };
    // Получение Id выбранной машины. Получение списка моделей
    EditDetailComponent.prototype.passCarId = function (event) {
        var _this = this;
        this.carId = event.target.value;
        this._apiService.getModelName(this.carId)
            .subscribe(function (data) {
            _this.modelName = data;
        }, function (error) {
            _this._flashMessagesService.showMessage(error).subscribe(function (data) { return _this.message = data; });
        });
    };
    // Получение Id выбранной модели. Получение списка модификаций
    EditDetailComponent.prototype.passModelId = function (event) {
        var _this = this;
        this.modelId = event.target.value;
        this._apiService.getModificationName(this.carId, this.modelId)
            .subscribe(function (data) {
            _this.modifications = data;
        }, function (error) {
            _this._flashMessagesService.showMessage(error).subscribe(function (data) { return _this.message = data; });
        });
    };
    // Получение Id выбранной модификации. Получение списка агрегатов
    EditDetailComponent.prototype.passModificationId = function (event) {
        var _this = this;
        this.unitId = event.target.value;
        this._apiService.getPartsList(this.carId, this.modelId, this.unitId)
            .subscribe(function (data) {
            _this.units = data;
        }, function (error) {
            _this._flashMessagesService.showMessage(error).subscribe(function (data) { return _this.message = data; });
        });
    };
    // Получение Id выбранного агрегата. Получение списка деталей
    EditDetailComponent.prototype.passUnitId = function (event) {
        var _this = this;
        this.detailId = event.target.value;
        this._apiService.getDetailsItem(this.carId, this.modelId, this.unitId, this.detailId)
            .subscribe(function (data) {
            _this.details = data;
        }, function (error) {
            _this._flashMessagesService.showMessage(error).subscribe(function (data) { return _this.message = data; });
        });
    };
    // Получение Id детали. Получение списка составляющих детали.
    EditDetailComponent.prototype.passDetailId = function (event) {
        var _this = this;
        this.isConfirmed = true;
        this.itemId = event.target.value;
        this._apiService.getItem(this.carId, this.modelId, this.unitId, this.detailId, this.itemId)
            .subscribe(function (data) { }, function (error) {
            _this._flashMessagesService.showMessage(error).subscribe(function (data) { return _this.message = data; });
        });
    };
    // Создать новый объект для детали, передать сервису,
    //  отправить на сервер, очистить форму, вывести сообщение об успехе или неудаче
    EditDetailComponent.prototype.editDetail = function () {
        var _this = this;
        var detail = {
            detailName: this.detailName
        };
        if (this.carId && this.modelId && this.unitId && this.detailId && this.itemId) {
            this._apiService.editDetail(this.carId, this.modelId, this.unitId, this.detailId, this.itemId, detail)
                .subscribe(function (data) {
                _this._flashMessagesService.showMessage('Данные успешно обновлены', 'success', 3000).subscribe(function (msg) {
                    _this.message = msg;
                });
            }, function (error) {
                _this._flashMessagesService.showMessage(error).subscribe(function (data) { return _this.message = data; });
            });
            this.detailName = '';
        }
        else {
            this._flashMessagesService.showMessage('Выберите данные автомобиля').subscribe(function (data) { return _this.message = data; });
        }
    };
    // Удаление выбранной детали
    EditDetailComponent.prototype.remove = function () {
        var _this = this;
        if (this.carId && this.modelId && this.unitId && this.detailId && this.itemId) {
            this._apiService.removeDetail(this.carId, this.modelId, this.unitId, this.detailId, this.itemId)
                .subscribe(function (data) {
                _this._flashMessagesService.showMessage('Данные успешно удалены', 'success', 3000).subscribe(function (msg) {
                    _this.message = msg;
                });
            }, function (error) {
                _this._flashMessagesService.showMessage(error).subscribe(function (data) { return _this.message = data; });
            });
        }
        else {
            this._flashMessagesService.showMessage('Выберите данные автомобиля').subscribe(function (data) { return _this.message = data; });
        }
    };
    EditDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-edit-detail',
            template: __webpack_require__(/*! ./edit-detail.component.html */ "./src/app/modules/add-car/edit-detail/edit-detail.component.html"),
            styles: [__webpack_require__(/*! ./edit-detail.component.css */ "./src/app/modules/add-car/edit-detail/edit-detail.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"],
            src_app_services_flash_message_service__WEBPACK_IMPORTED_MODULE_1__["FlashMessageService"]])
    ], EditDetailComponent);
    return EditDetailComponent;
}());



/***/ }),

/***/ "./src/app/modules/add-car/edit-imgdetail/edit-imgdetail.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/add-car/edit-imgdetail/edit-imgdetail.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input {\r\n    margin-bottom: 7px;\r\n}\r\n\r\nselect {\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.form-group {\r\n    margin-bottom: 5px;\r\n}\r\n\r\nsmall {\r\n    color: #d9534f;\r\n    margin-bottom: 7px;\r\n    display: block;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tb2R1bGVzL2FkZC1jYXIvZWRpdC1pbWdkZXRhaWwvZWRpdC1pbWdkZXRhaWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG1CQUFtQjtDQUN0Qjs7QUFFRDtJQUNJLG9CQUFvQjtDQUN2Qjs7QUFFRDtJQUNJLG1CQUFtQjtDQUN0Qjs7QUFFRDtJQUNJLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsZUFBZTtDQUNsQiIsImZpbGUiOiJhcHAvbW9kdWxlcy9hZGQtY2FyL2VkaXQtaW1nZGV0YWlsL2VkaXQtaW1nZGV0YWlsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbnB1dCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA3cHg7XHJcbn1cclxuXHJcbnNlbGVjdCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4uZm9ybS1ncm91cCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbn1cclxuXHJcbnNtYWxsIHtcclxuICAgIGNvbG9yOiAjZDk1MzRmO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogN3B4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/modules/add-car/edit-imgdetail/edit-imgdetail.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/modules/add-car/edit-imgdetail/edit-imgdetail.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Вывод флеш-сообщений -->\r\n<div class=\"alert alert-{{message.type}}\" *ngIf=\"message\">{{message.text}}</div>\r\n<form #form=\"ngForm\" novalidate>\r\n  <div class=\"form-group\">\r\n    <label>Марка</label>\r\n    <!-- Передача ID выбранной марки в компонент -->\r\n    <select (change)=\"passCarId($event)\" class=\"custom-select\" name=\"carItem\" ngModel required>\r\n      <option></option>\r\n      <option *ngFor=\"let carItem of markName\" [value]=\"carItem._id\">{{carItem.markName}}</option>\r\n    </select>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label>Модель</label>\r\n    <!-- Передача ID выбранной модели в компонент -->\r\n    <select (change)=\"passModelId($event)\" class=\"custom-select\" name=\"model\" ngModel required>\r\n      <option></option>\r\n      <option *ngFor=\"let model of modelName\" [value]=\"model._id\">{{model.modelsName}}</option>\r\n    </select>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label>Модификация</label>\r\n    <!-- Передача ID выбранной модификации в компонент -->\r\n    <select (change)=\"passModificationId($event)\" class=\"custom-select\" name=\"modification\" ngModel required>\r\n      <option></option>\r\n      <option *ngFor=\"let modification of modifications\" [value]=\"modification._id\">{{modification.modificationName}}</option>\r\n    </select>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label>Агрегат</label>\r\n    <!-- Передача ID выбранного агрегата в компонент -->\r\n    <select (change)=\"passUnitId($event)\" class=\"custom-select\" name=\"unit\" ngModel required>\r\n      <option></option>\r\n      <option *ngFor=\"let unit of units\" [value]=\"unit._id\">{{unit.unitName}}</option>\r\n    </select>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label>Раздел</label>\r\n    <!-- Передача ID выбранного раздела в компонент -->\r\n    <select (change)=\"passDetailId($event)\" class=\"custom-select\" name=\"detail\" ngModel required>\r\n      <option></option>\r\n      <option *ngFor=\"let detail of details\" [value]=\"detail._id\">{{detail.detailName}}</option>\r\n    </select>\r\n  </div>\r\n  <button class=\"btn btn-danger\" (click)=\"remove()\" [disabled]=\"!isConfirmed\">Удалить</button>\r\n  <!-- Блок внесения данных -->\r\n  <div class=\"form-group\">\r\n    <p>Внесите новые данные для раздела</p>\r\n    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"detailName\" name=\"detailName\" required placeholder=\"Внесите новое название раздела\"\r\n      #name=\"ngModel\" [class.is-invalid]=\"name.invalid && name.touched\">\r\n    <small *ngIf=\"name.invalid && name.touched\">Заполните форму</small>\r\n    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"detailImage\" name=\"detailImage\" required placeholder=\"Внесите новую ссылку на схему\"\r\n      #link=\"ngModel\" [class.is-invalid]=\"link.invalid && link.touched\">\r\n    <small *ngIf=\"link.invalid && link.touched\">Заполните форму</small>\r\n  </div>\r\n  <button class=\"btn btn-warning\" (click)=\"editDetail()\" [disabled]=\"form.form.invalid\">Редактировать</button>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/modules/add-car/edit-imgdetail/edit-imgdetail.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/modules/add-car/edit-imgdetail/edit-imgdetail.component.ts ***!
  \****************************************************************************/
/*! exports provided: EditImgdetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditImgdetailComponent", function() { return EditImgdetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_services_flash_message_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/flash-message.service */ "./src/app/services/flash-message.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_api_img_catalog_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api-img-catalog.service */ "./src/app/services/api-img-catalog.service.ts");




var EditImgdetailComponent = /** @class */ (function () {
    function EditImgdetailComponent(_apiImgCatalogService, _flashMessagesService) {
        this._apiImgCatalogService = _apiImgCatalogService;
        this._flashMessagesService = _flashMessagesService;
        this.markName = [];
        this.modelName = [];
        this.modifications = [];
        this.units = [];
        this.details = [];
        this.isConfirmed = false;
    }
    EditImgdetailComponent.prototype.ngOnInit = function () {
        // Получение списка машин при загрузке страницы
        this.getCars();
    };
    // Получение списка машин
    EditImgdetailComponent.prototype.getCars = function () {
        var _this = this;
        this._apiImgCatalogService.getCars()
            .subscribe(function (data) {
            _this.markName = data;
        }, function (error) {
            _this._flashMessagesService.showMessage(error).subscribe(function (data) { return _this.message = data; });
        });
    };
    // Получение Id выбранной машины. Получение списка моделей
    EditImgdetailComponent.prototype.passCarId = function (event) {
        var _this = this;
        this.carId = event.target.value;
        this._apiImgCatalogService.getModel(this.carId)
            .subscribe(function (data) {
            _this.modelName = data;
        }, function (error) {
            _this._flashMessagesService.showMessage(error).subscribe(function (data) { return _this.message = data; });
        });
    };
    // Получение Id выбранной модели. Получение списка модификаций
    EditImgdetailComponent.prototype.passModelId = function (event) {
        var _this = this;
        this.modelId = event.target.value;
        this._apiImgCatalogService.getModification(this.carId, this.modelId)
            .subscribe(function (data) {
            _this.modifications = data;
        }, function (error) {
            _this._flashMessagesService.showMessage(error).subscribe(function (data) { return _this.message = data; });
        });
    };
    // Получение Id выбранной модификации. Получение списка агрегатов
    EditImgdetailComponent.prototype.passModificationId = function (event) {
        var _this = this;
        this.unitId = event.target.value;
        this._apiImgCatalogService.getUnit(this.carId, this.modelId, this.unitId)
            .subscribe(function (data) {
            _this.units = data;
        }, function (error) {
            _this._flashMessagesService.showMessage(error).subscribe(function (data) { return _this.message = data; });
        });
    };
    // Получение Id выбранного агрегата. Получение списка схем
    EditImgdetailComponent.prototype.passUnitId = function (event) {
        var _this = this;
        this.detailId = event.target.value;
        this._apiImgCatalogService.getDetail(this.carId, this.modelId, this.unitId, this.detailId)
            .subscribe(function (data) {
            _this.details = data;
        }, function (error) {
            _this._flashMessagesService.showMessage(error).subscribe(function (data) { return _this.message = data; });
        });
    };
    // Получение Id схемы. Получение списка составляющих схемы.
    EditImgdetailComponent.prototype.passDetailId = function (event) {
        var _this = this;
        this.isConfirmed = true;
        this.itemId = event.target.value;
        this._apiImgCatalogService.getItems(this.carId, this.modelId, this.unitId, this.detailId, this.itemId)
            .subscribe(function (data) { }, function (error) {
            _this._flashMessagesService.showMessage(error).subscribe(function (data) { return _this.message = data; });
        });
    };
    // Создать новый объект для составляющих схемы, передать сервису,
    //  отправить на сервер, очистить форму, вывести сообщение об успехе или неудаче
    EditImgdetailComponent.prototype.editDetail = function () {
        var _this = this;
        var detail = {
            detailName: this.detailName,
            detailImage: this.detailImage
        };
        if (this.carId && this.modelId && this.unitId && this.detailId && this.itemId) {
            this._apiImgCatalogService.editDetail(this.carId, this.modelId, this.unitId, this.detailId, this.itemId, detail)
                .subscribe(function (data) {
                _this._flashMessagesService.showMessage('Данные успешно обновлены', 'success', 3000).subscribe(function (msg) {
                    _this.message = msg;
                });
            }, function (error) {
                _this._flashMessagesService.showMessage(error).subscribe(function (data) { return _this.message = data; });
            });
            this.detailName = '';
            this.detailImage = '';
        }
        else {
            this._flashMessagesService.showMessage('Выберите данные автомобиля').subscribe(function (data) { return _this.message = data; });
        }
    };
    // Удаление составляющих схемы
    EditImgdetailComponent.prototype.remove = function () {
        var _this = this;
        if (this.carId && this.modelId && this.unitId && this.detailId && this.itemId) {
            this._apiImgCatalogService.removeDetail(this.carId, this.modelId, this.unitId, this.detailId, this.itemId)
                .subscribe(function (data) {
                _this._flashMessagesService.showMessage('Данные успешно удалены', 'success', 3000).subscribe(function (msg) {
                    _this.message = msg;
                });
            }, function (error) {
                _this._flashMessagesService.showMessage(error).subscribe(function (data) { return _this.message = data; });
            });
        }
        else {
            this._flashMessagesService.showMessage('Выберите данные автомобиля').subscribe(function (data) { return _this.message = data; });
        }
    };
    EditImgdetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-edit-imgdetail',
            template: __webpack_require__(/*! ./edit-imgdetail.component.html */ "./src/app/modules/add-car/edit-imgdetail/edit-imgdetail.component.html"),
            styles: [__webpack_require__(/*! ./edit-imgdetail.component.css */ "./src/app/modules/add-car/edit-imgdetail/edit-imgdetail.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_api_img_catalog_service__WEBPACK_IMPORTED_MODULE_3__["ApiImgCatalogService"],
            src_app_services_flash_message_service__WEBPACK_IMPORTED_MODULE_1__["FlashMessageService"]])
    ], EditImgdetailComponent);
    return EditImgdetailComponent;
}());



/***/ }),

/***/ "./src/app/modules/add-car/edit-imgitem/edit-imgitem.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/modules/add-car/edit-imgitem/edit-imgitem.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input {\r\n    margin-bottom: 7px;\r\n}\r\n\r\nselect {\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.form-group {\r\n    margin-bottom: 5px;\r\n}\r\n\r\nsmall {\r\n    color: #d9534f;\r\n    margin-bottom: 7px;\r\n    display: block;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tb2R1bGVzL2FkZC1jYXIvZWRpdC1pbWdpdGVtL2VkaXQtaW1naXRlbS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUJBQW1CO0NBQ3RCOztBQUVEO0lBQ0ksb0JBQW9CO0NBQ3ZCOztBQUVEO0lBQ0ksbUJBQW1CO0NBQ3RCOztBQUVEO0lBQ0ksZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixlQUFlO0NBQ2xCIiwiZmlsZSI6ImFwcC9tb2R1bGVzL2FkZC1jYXIvZWRpdC1pbWdpdGVtL2VkaXQtaW1naXRlbS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW5wdXQge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogN3B4O1xyXG59XHJcblxyXG5zZWxlY3Qge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLmZvcm0tZ3JvdXAge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG59XHJcblxyXG5zbWFsbCB7XHJcbiAgICBjb2xvcjogI2Q5NTM0ZjtcclxuICAgIG1hcmdpbi1ib3R0b206IDdweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/modules/add-car/edit-imgitem/edit-imgitem.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/modules/add-car/edit-imgitem/edit-imgitem.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Вывод флеш-сообщений -->\r\n<div class=\"alert alert-{{message.type}}\" *ngIf=\"message\">{{message.text}}</div>\r\n<form #form=\"ngForm\" novalidate>\r\n  <div class=\"form-group\">\r\n    <label>Марка</label>\r\n    <!-- Передача ID выбранной марки в компонент -->\r\n    <select (change)=\"passCarId($event)\" class=\"custom-select\" name=\"carItem\" ngModel required>\r\n      <option></option>\r\n      <option *ngFor=\"let carItem of markName\" [value]=\"carItem._id\">{{carItem.markName}}</option>\r\n    </select>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label>Модель</label>\r\n    <!-- Передача ID выбранной модели в компонент -->\r\n    <select (change)=\"passModelId($event)\" class=\"custom-select\" name=\"model\" ngModel required>\r\n      <option></option>\r\n      <option *ngFor=\"let model of modelName\" [value]=\"model._id\">{{model.modelsName}}</option>\r\n    </select>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label>Модификация</label>\r\n    <!-- Передача ID выбранной модификации в компонент -->\r\n    <select (change)=\"passModificationId($event)\" class=\"custom-select\" name=\"modification\" ngModel required>\r\n      <option></option>\r\n      <option *ngFor=\"let modification of modifications\" [value]=\"modification._id\">{{modification.modificationName}}</option>\r\n    </select>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label>Агрегат</label>\r\n    <!-- Передача ID выбранного агрегата в компонент -->\r\n    <select (change)=\"passUnitId($event)\" class=\"custom-select\" name=\"unit\" ngModel required>\r\n      <option></option>\r\n      <option *ngFor=\"let unit of units\" [value]=\"unit._id\">{{unit.unitName}}</option>\r\n    </select>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label>Раздел</label>\r\n    <!-- Передача ID выбранного раздела в компонент -->\r\n    <select (change)=\"passDetailId($event)\" class=\"custom-select\" name=\"detail\" ngModel required>\r\n      <option></option>\r\n      <option *ngFor=\"let detail of details\" [value]=\"detail._id\">{{detail.detailName}}</option>\r\n    </select>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label>Ссылка на главную схему</label>\r\n    <!-- Передача ID в компонент -->\r\n    <select (change)=\"passOriginalId($event)\" class=\"custom-select\" name=\"analogue\" ngModel required>\r\n      <option></option>\r\n      <option *ngFor=\"let analogue of analogues\" [value]=\"analogue._id\">{{analogue.itemImage}}</option>\r\n    </select>\r\n  </div>\r\n  <button class=\"btn btn-danger\" (click)=\"remove()\" [disabled]=\"!isConfirmed\">Удалить</button>\r\n  <!-- Блок добавления данных -->\r\n  <div class=\"form-group\">\r\n    <label>Внесите новую ссылку на главную схему</label>\r\n    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"itemImage\" name=\"itemImage\" required #name=\"ngModel\"\r\n      [class.is-invalid]=\"name.invalid && name.touched\">\r\n    <small *ngIf=\"name.invalid && name.touched\">Заполните форму</small>\r\n  </div>\r\n  <button class=\"btn btn-warning\" (click)=\"editItems()\" [disabled]=\"form.form.invalid\">Редактировать</button>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/modules/add-car/edit-imgitem/edit-imgitem.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/modules/add-car/edit-imgitem/edit-imgitem.component.ts ***!
  \************************************************************************/
/*! exports provided: EditImgitemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditImgitemComponent", function() { return EditImgitemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_services_flash_message_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/flash-message.service */ "./src/app/services/flash-message.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_api_img_catalog_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api-img-catalog.service */ "./src/app/services/api-img-catalog.service.ts");




var EditImgitemComponent = /** @class */ (function () {
    function EditImgitemComponent(_apiImgCatalogService, _flashMessagesService) {
        this._apiImgCatalogService = _apiImgCatalogService;
        this._flashMessagesService = _flashMessagesService;
        this.markName = [];
        this.modelName = [];
        this.modifications = [];
        this.units = [];
        this.details = [];
        this.analogues = [];
        this.isConfirmed = false;
    }
    EditImgitemComponent.prototype.ngOnInit = function () {
        // Получение списка машин при загрузке страницы
        this.getCars();
    };
    // Получение списка машин
    EditImgitemComponent.prototype.getCars = function () {
        var _this = this;
        this._apiImgCatalogService.getCars()
            .subscribe(function (data) {
            _this.markName = data;
        }, function (error) {
            _this._flashMessagesService.showMessage(error).subscribe(function (data) { return _this.message = data; });
        });
    };
    // Получение Id выбранной марки. Получение списка моделей
    EditImgitemComponent.prototype.passCarId = function (event) {
        var _this = this;
        this.carId = event.target.value;
        this._apiImgCatalogService.getModel(this.carId)
            .subscribe(function (data) {
            _this.modelName = data;
        }, function (error) {
            _this._flashMessagesService.showMessage(error).subscribe(function (data) { return _this.message = data; });
        });
    };
    // Получение Id выбранной модели. Получение списка модификаций
    EditImgitemComponent.prototype.passModelId = function (event) {
        var _this = this;
        this.modelId = event.target.value;
        this._apiImgCatalogService.getModification(this.carId, this.modelId)
            .subscribe(function (data) {
            _this.modifications = data;
        }, function (error) {
            _this._flashMessagesService.showMessage(error).subscribe(function (data) { return _this.message = data; });
        });
    };
    // Получение Id выбранной модификации. Получение списка агрегатов
    EditImgitemComponent.prototype.passModificationId = function (event) {
        var _this = this;
        this.unitId = event.target.value;
        this._apiImgCatalogService.getUnit(this.carId, this.modelId, this.unitId)
            .subscribe(function (data) {
            _this.units = data;
        }, function (error) {
            _this._flashMessagesService.showMessage(error).subscribe(function (data) { return _this.message = data; });
        });
    };
    // Получение Id выбранного агрегата. Получение списка разделов
    EditImgitemComponent.prototype.passUnitId = function (event) {
        var _this = this;
        this.detailId = event.target.value;
        this._apiImgCatalogService.getDetail(this.carId, this.modelId, this.unitId, this.detailId)
            .subscribe(function (data) {
            _this.details = data;
        }, function (error) {
            _this._flashMessagesService.showMessage(error).subscribe(function (data) { return _this.message = data; });
        });
    };
    // Получение Id раздела. Получение списка составляющих раздела.
    EditImgitemComponent.prototype.passDetailId = function (event) {
        var _this = this;
        this.itemId = event.target.value;
        this._apiImgCatalogService.getItems(this.carId, this.modelId, this.unitId, this.detailId, this.itemId)
            .subscribe(function (data) {
            _this.analogues = data;
        }, function (error) {
            _this._flashMessagesService.showMessage(error).subscribe(function (data) { return _this.message = data; });
        });
    };
    // Получение Id основной схемы раздела.
    EditImgitemComponent.prototype.passOriginalId = function (event) {
        this.originalId = event.target.value;
        this.isConfirmed = true;
    };
    // Создать новый объект для основной схемы раздела, передать сервису,
    //  отправить на сервер, очистить форму, вывести сообщение об успехе или неудаче
    EditImgitemComponent.prototype.editItems = function () {
        var _this = this;
        var item = {
            itemImage: this.itemImage
        };
        if (this.carId && this.modelId && this.unitId && this.detailId && this.itemId && this.originalId) {
            this._apiImgCatalogService.editDetailItems(this.carId, this.modelId, this.unitId, this.detailId, this.itemId, this.originalId, item)
                .subscribe(function (data) {
                _this._flashMessagesService.showMessage('Данные успешно обновлены', 'success', 3000).subscribe(function (msg) {
                    _this.message = msg;
                });
            }, function (error) {
                _this._flashMessagesService.showMessage(error).subscribe(function (data) { return _this.message = data; });
            });
            this.itemImage = '';
        }
        else {
            this._flashMessagesService.showMessage('Выберите данные автомобиля').subscribe(function (data) { return _this.message = data; });
        }
    };
    // Удаление дынных детали
    EditImgitemComponent.prototype.remove = function () {
        var _this = this;
        if (this.carId && this.modelId && this.unitId && this.detailId && this.itemId && this.originalId) {
            this._apiImgCatalogService.removeItem(this.carId, this.modelId, this.unitId, this.detailId, this.itemId, this.originalId)
                .subscribe(function (data) {
                _this._flashMessagesService.showMessage('Данные успешно удалены', 'success', 3000).subscribe(function (msg) {
                    _this.message = msg;
                });
            }, function (error) {
                _this._flashMessagesService.showMessage(error).subscribe(function (data) { return _this.message = data; });
            });
        }
        else {
            this._flashMessagesService.showMessage('Выберите данные автомобиля').subscribe(function (data) { return _this.message = data; });
        }
    };
    EditImgitemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-edit-imgitem',
            template: __webpack_require__(/*! ./edit-imgitem.component.html */ "./src/app/modules/add-car/edit-imgitem/edit-imgitem.component.html"),
            styles: [__webpack_require__(/*! ./edit-imgitem.component.css */ "./src/app/modules/add-car/edit-imgitem/edit-imgitem.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_api_img_catalog_service__WEBPACK_IMPORTED_MODULE_3__["ApiImgCatalogService"],
            src_app_services_flash_message_service__WEBPACK_IMPORTED_MODULE_1__["FlashMessageService"]])
    ], EditImgitemComponent);
    return EditImgitemComponent;
}());



/***/ }),

/***/ "./src/app/modules/add-car/edit-imgitemdetail/edit-imgitemdetail.component.css":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/add-car/edit-imgitemdetail/edit-imgitemdetail.component.css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input {\r\n    margin-bottom: 7px;\r\n}\r\n\r\nselect {\r\n    margin-bottom: 10px;\r\n}\r\n\r\ntextarea {\r\n    margin-bottom: 7px;\r\n}\r\n\r\n.form-group {\r\n    margin-bottom: 5px;\r\n}\r\n\r\nsmall {\r\n    color: #d9534f;\r\n    margin-bottom: 7px;\r\n    display: block;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tb2R1bGVzL2FkZC1jYXIvZWRpdC1pbWdpdGVtZGV0YWlsL2VkaXQtaW1naXRlbWRldGFpbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUJBQW1CO0NBQ3RCOztBQUVEO0lBQ0ksb0JBQW9CO0NBQ3ZCOztBQUVEO0lBQ0ksbUJBQW1CO0NBQ3RCOztBQUVEO0lBQ0ksbUJBQW1CO0NBQ3RCOztBQUVEO0lBQ0ksZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixlQUFlO0NBQ2xCIiwiZmlsZSI6ImFwcC9tb2R1bGVzL2FkZC1jYXIvZWRpdC1pbWdpdGVtZGV0YWlsL2VkaXQtaW1naXRlbWRldGFpbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW5wdXQge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogN3B4O1xyXG59XHJcblxyXG5zZWxlY3Qge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxudGV4dGFyZWEge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogN3B4O1xyXG59XHJcblxyXG4uZm9ybS1ncm91cCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbn1cclxuXHJcbnNtYWxsIHtcclxuICAgIGNvbG9yOiAjZDk1MzRmO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogN3B4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/modules/add-car/edit-imgitemdetail/edit-imgitemdetail.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/add-car/edit-imgitemdetail/edit-imgitemdetail.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Вывод флеш-сообщений -->\r\n<div class=\"alert alert-{{message.type}}\" *ngIf=\"message\">{{message.text}}</div>\r\n<form #form=\"ngForm\" novalidate>\r\n  <div class=\"form-group\">\r\n    <label>Марка</label>\r\n    <!-- Передача ID выбранной марки в компонент -->\r\n    <select (change)=\"passCarId($event)\" class=\"custom-select\" name=\"carItem\" ngModel required>\r\n      <option></option>\r\n      <option *ngFor=\"let carItem of markName\" [value]=\"carItem._id\">{{carItem.markName}}</option>\r\n    </select>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label>Модель</label>\r\n    <!-- Передача ID выбранной модели в компонент -->\r\n    <select (change)=\"passModelId($event)\" class=\"custom-select\" name=\"model\" ngModel required>\r\n      <option></option>\r\n      <option *ngFor=\"let model of modelName\" [value]=\"model._id\">{{model.modelsName}}</option>\r\n    </select>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label>Модификация</label>\r\n    <!-- Передача ID выбранной модификации в компонент -->\r\n    <select (change)=\"passModificationId($event)\" class=\"custom-select\" name=\"modification\" ngModel required>\r\n      <option></option>\r\n      <option *ngFor=\"let modification of modifications\" [value]=\"modification._id\">{{modification.modificationName}}</option>\r\n    </select>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label>Агрегат</label>\r\n    <!-- Передача ID выбранного агрегата в компонент -->\r\n    <select (change)=\"passUnitId($event)\" class=\"custom-select\" name=\"unit\" ngModel required>\r\n      <option></option>\r\n      <option *ngFor=\"let unit of units\" [value]=\"unit._id\">{{unit.unitName}}</option>\r\n    </select>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label>Раздел</label>\r\n    <!-- Передача ID выбранного раздела в компонент -->\r\n    <select (change)=\"passDetailId($event)\" class=\"custom-select\" name=\"detail\" ngModel required>\r\n      <option></option>\r\n      <option *ngFor=\"let detail of details\" [value]=\"detail._id\">{{detail.detailName}}</option>\r\n    </select>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label>Ссылка на основную схему раздела</label>\r\n    <!-- Передача ID основной схемы раздела в компонент -->\r\n    <select (change)=\"passOriginalId($event)\" class=\"custom-select\" name=\"analogue\" ngModel required>\r\n      <option></option>\r\n      <option *ngFor=\"let analogue of analogues\" [value]=\"analogue._id\">{{analogue.itemImage}}</option>\r\n    </select>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label>Название детали</label>\r\n    <!-- Передача ID выбранной детали в компонент -->\r\n    <select (change)=\"passAnalogueId($event)\" class=\"custom-select\" name=\"an\" ngModel required>\r\n      <option></option>\r\n      <option *ngFor=\"let an of ans\" [value]=\"an._id\">{{an.itemName}}</option>\r\n    </select>\r\n  </div>\r\n  <button class=\"btn btn-danger\" (click)=\"remove()\" [disabled]=\"!isConfirmed\">Удалить</button>\r\n  <!-- Блок внесения данных -->\r\n  <div class=\"form-group\">\r\n    <label>Внесите данные</label>\r\n    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"itemNumber\" name=\"itemNumber\" required placeholder=\"Внесите порядковый номер детали\"\r\n      #number=\"ngModel\" [class.is-invalid]=\"number.invalid && number.touched\">\r\n    <small *ngIf=\"number.invalid && number.touched\">Заполните форму</small>\r\n    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"itemName\" name=\"itemName\" required placeholder=\"Внесите название детали\"\r\n      #name=\"ngModel\" [class.is-invalid]=\"name.invalid && name.touched\">\r\n    <small *ngIf=\"name.invalid && name.touched\">Заполните форму</small>\r\n    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"itemArticle\" name=\"itemArticle\" required placeholder=\"Внесите артикулы через запятую\"\r\n      #article=\"ngModel\" [class.is-invalid]=\"article.invalid && article.touched\">\r\n    <small *ngIf=\"article.invalid && article.touched\">Заполните форму</small>\r\n    <textarea [(ngModel)]=\"itemNote\" name=\"itemNote\" class=\"form-control\" placeholder=\"Внесите примечание\"></textarea>\r\n  </div>\r\n  <button class=\"btn btn-warning\" (click)=\"editAnalogue()\" [disabled]=\"form.form.invalid\">Редактировать</button>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/modules/add-car/edit-imgitemdetail/edit-imgitemdetail.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/modules/add-car/edit-imgitemdetail/edit-imgitemdetail.component.ts ***!
  \************************************************************************************/
/*! exports provided: EditImgitemdetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditImgitemdetailComponent", function() { return EditImgitemdetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_services_flash_message_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/flash-message.service */ "./src/app/services/flash-message.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_api_img_catalog_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api-img-catalog.service */ "./src/app/services/api-img-catalog.service.ts");




var EditImgitemdetailComponent = /** @class */ (function () {
    function EditImgitemdetailComponent(_apiImgCatalogService, _flashMessagesService) {
        this._apiImgCatalogService = _apiImgCatalogService;
        this._flashMessagesService = _flashMessagesService;
        this.markName = [];
        this.modelName = [];
        this.modifications = [];
        this.units = [];
        this.details = [];
        this.analogues = [];
        this.ans = [];
        this.itemArticle = [];
        this.isConfirmed = false;
    }
    EditImgitemdetailComponent.prototype.ngOnInit = function () {
        // Получение списка машин при загрузке страницы
        this.getCars();
    };
    // Получение списка машин
    EditImgitemdetailComponent.prototype.getCars = function () {
        var _this = this;
        this._apiImgCatalogService.getCars()
            .subscribe(function (data) {
            _this.markName = data;
        }, function (error) {
            _this._flashMessagesService.showMessage(error).subscribe(function (data) { return _this.message = data; });
        });
    };
    // Получение Id выбранной машины. Получение списка моделей
    EditImgitemdetailComponent.prototype.passCarId = function (event) {
        var _this = this;
        this.carId = event.target.value;
        this._apiImgCatalogService.getModel(this.carId)
            .subscribe(function (data) {
            _this.modelName = data;
        }, function (error) {
            _this._flashMessagesService.showMessage(error).subscribe(function (data) { return _this.message = data; });
        });
    };
    // Получение Id выбранной модели. Получение списка модификаций
    EditImgitemdetailComponent.prototype.passModelId = function (event) {
        var _this = this;
        this.modelId = event.target.value;
        this._apiImgCatalogService.getModification(this.carId, this.modelId)
            .subscribe(function (data) {
            _this.modifications = data;
        }, function (error) {
            _this._flashMessagesService.showMessage(error).subscribe(function (data) { return _this.message = data; });
        });
    };
    // Получение Id выбранной модификации. Получение списка агрегатов
    EditImgitemdetailComponent.prototype.passModificationId = function (event) {
        var _this = this;
        this.unitId = event.target.value;
        this._apiImgCatalogService.getUnit(this.carId, this.modelId, this.unitId)
            .subscribe(function (data) {
            _this.units = data;
        }, function (error) {
            _this._flashMessagesService.showMessage(error).subscribe(function (data) { return _this.message = data; });
        });
    };
    // Получение Id выбранного агрегата. Получение списка разделов
    EditImgitemdetailComponent.prototype.passUnitId = function (event) {
        var _this = this;
        this.detailId = event.target.value;
        this._apiImgCatalogService.getDetail(this.carId, this.modelId, this.unitId, this.detailId)
            .subscribe(function (data) {
            _this.details = data;
        }, function (error) {
            _this._flashMessagesService.showMessage(error).subscribe(function (data) { return _this.message = data; });
        });
    };
    // Получение Id раздела. Получение списка составляющих раздела.
    EditImgitemdetailComponent.prototype.passDetailId = function (event) {
        var _this = this;
        this.itemId = event.target.value;
        this._apiImgCatalogService.getItems(this.carId, this.modelId, this.unitId, this.detailId, this.itemId)
            .subscribe(function (data) {
            _this.analogues = data;
        }, function (error) {
            _this._flashMessagesService.showMessage(error).subscribe(function (data) { return _this.message = data; });
        });
    };
    // Получение Id составляющих раздела. Получение списка деталей раздела.
    EditImgitemdetailComponent.prototype.passOriginalId = function (event) {
        var _this = this;
        this.originalId = event.target.value;
        this._apiImgCatalogService.getDetailItems(this.carId, this.modelId, this.unitId, this.detailId, this.itemId, this.originalId)
            .subscribe(function (data) {
            _this.ans = data;
        }, function (error) {
            _this._flashMessagesService.showMessage(error).subscribe(function (data) { return _this.message = data; });
        });
    };
    // Получение Id детали раздела
    EditImgitemdetailComponent.prototype.passAnalogueId = function (event) {
        this.anId = event.target.value;
        this.isConfirmed = true;
    };
    // Создать новый объект для детали раздела, передать сервису,
    //  отправить на сервер, очистить форму, вывести сообщение об успехе или неудаче
    EditImgitemdetailComponent.prototype.editAnalogue = function () {
        var _this = this;
        var analogue = {
            itemNumber: this.itemNumber,
            itemName: this.itemName,
            itemArticle: this.itemArticle,
            itemNote: this.itemNote,
        };
        if (this.carId && this.modelId && this.unitId && this.detailId && this.itemId && this.originalId && this.anId) {
            // tslint:disable-next-line:max-line-length
            this._apiImgCatalogService.editItems(this.carId, this.modelId, this.unitId, this.detailId, this.itemId, this.originalId, this.anId, analogue)
                .subscribe(function (data) {
                _this._flashMessagesService.showMessage('Данные успешно обновлены', 'success', 3000).subscribe(function (msg) {
                    _this.message = msg;
                });
            }, function (error) {
                _this._flashMessagesService.showMessage(error).subscribe(function (data) { return _this.message = data; });
            });
            this.itemNumber = null;
            this.itemName = '';
            this.itemArticle = [];
            this.itemNote = '';
        }
        else {
            this._flashMessagesService.showMessage('Выберите данные автомобиля').subscribe(function (data) { return _this.message = data; });
        }
    };
    // Удаление данных раздела
    EditImgitemdetailComponent.prototype.remove = function () {
        var _this = this;
        if (this.carId && this.modelId && this.unitId && this.detailId && this.itemId && this.originalId && this.anId) {
            this._apiImgCatalogService.removeItems(this.carId, this.modelId, this.unitId, this.detailId, this.itemId, this.originalId, this.anId)
                .subscribe(function (data) {
                _this._flashMessagesService.showMessage('Данные успешно удалены', 'success', 3000).subscribe(function (msg) {
                    _this.message = msg;
                });
            }, function (error) {
                _this._flashMessagesService.showMessage(error).subscribe(function (data) { return _this.message = data; });
            });
        }
        else {
            this._flashMessagesService.showMessage('Выберите данные автомобиля').subscribe(function (data) { return _this.message = data; });
        }
    };
    EditImgitemdetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-edit-imgitemdetail',
            template: __webpack_require__(/*! ./edit-imgitemdetail.component.html */ "./src/app/modules/add-car/edit-imgitemdetail/edit-imgitemdetail.component.html"),
            styles: [__webpack_require__(/*! ./edit-imgitemdetail.component.css */ "./src/app/modules/add-car/edit-imgitemdetail/edit-imgitemdetail.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_api_img_catalog_service__WEBPACK_IMPORTED_MODULE_3__["ApiImgCatalogService"],
            src_app_services_flash_message_service__WEBPACK_IMPORTED_MODULE_1__["FlashMessageService"]])
    ], EditImgitemdetailComponent);
    return EditImgitemdetailComponent;
}());



/***/ }),

/***/ "./src/app/modules/add-car/edit-imgmain/edit-imgmain.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/modules/add-car/edit-imgmain/edit-imgmain.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvbW9kdWxlcy9hZGQtY2FyL2VkaXQtaW1nbWFpbi9lZGl0LWltZ21haW4uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/add-car/edit-imgmain/edit-imgmain.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/modules/add-car/edit-imgmain/edit-imgmain.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <!-- Колонка с роутами для редактирования данных -->\r\n  <div class=\"col-lg-4\">\r\n    <ul class=\"nav nav-pills flex-column\">\r\n      <li class=\"nav-item\" [routerLinkActive]=\"['active']\">\r\n        <a class=\"nav-link\" [routerLink]=\"['/editing/editimgmain/mark']\">Редактировать марку</a>\r\n      </li>\r\n      <li class=\"nav-item\" [routerLinkActive]=\"['active']\">\r\n        <a class=\"nav-link\" [routerLink]=\"['/editing/editimgmain/model']\">Редактировать модель</a>\r\n      </li>\r\n      <li class=\"nav-item\" [routerLinkActive]=\"['active']\">\r\n        <a class=\"nav-link\" [routerLink]=\"['/editing/editimgmain/modification']\">Редактировать модификацию</a>\r\n      </li>\r\n      <li class=\"nav-item\" [routerLinkActive]=\"['active']\">\r\n        <a class=\"nav-link\" [routerLink]=\"['/editing/editimgmain/unit']\">Редактировать агрегат</a>\r\n      </li>\r\n      <li class=\"nav-item\" [routerLinkActive]=\"['active']\">\r\n        <a class=\"nav-link\" [routerLink]=\"['/editing/editimgmain/detail']\">Редактировать список разделов</a>\r\n      </li>\r\n      <li class=\"nav-item\" [routerLinkActive]=\"['active']\">\r\n        <a class=\"nav-link\" [routerLink]=\"['/editing/editimgmain/item']\">Редактировать раздел</a>\r\n      </li>\r\n      <li class=\"nav-item\" [routerLinkActive]=\"['active']\">\r\n        <a class=\"nav-link\" [routerLink]=\"['/editing/editimgmain/itemdetail']\">Редактировать составляющие раздела</a>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n  <div class=\"col-lg-8\">\r\n    <!-- Страницы редактирования данных -->\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/modules/add-car/edit-imgmain/edit-imgmain.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/modules/add-car/edit-imgmain/edit-imgmain.component.ts ***!
  \************************************************************************/
/*! exports provided: EditImgmainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditImgmainComponent", function() { return EditImgmainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var EditImgmainComponent = /** @class */ (function () {
    function EditImgmainComponent() {
    }
    EditImgmainComponent.prototype.ngOnInit = function () {
    };
    EditImgmainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-imgmain',
            template: __webpack_require__(/*! ./edit-imgmain.component.html */ "./src/app/modules/add-car/edit-imgmain/edit-imgmain.component.html"),
            styles: [__webpack_require__(/*! ./edit-imgmain.component.css */ "./src/app/modules/add-car/edit-imgmain/edit-imgmain.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], EditImgmainComponent);
    return EditImgmainComponent;
}());



/***/ }),

/***/ "./src/app/modules/add-car/edit-imgmark/edit-imgmark.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/modules/add-car/edit-imgmark/edit-imgmark.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "select {\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.form-group {\r\n    margin-bottom: 5px;\r\n}\r\n\r\nsmall {\r\n    color: #d9534f;\r\n    margin-bottom: 7px;\r\n    display: block;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tb2R1bGVzL2FkZC1jYXIvZWRpdC1pbWdtYXJrL2VkaXQtaW1nbWFyay5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksb0JBQW9CO0NBQ3ZCOztBQUVEO0lBQ0ksbUJBQW1CO0NBQ3RCOztBQUVEO0lBQ0ksZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixlQUFlO0NBQ2xCIiwiZmlsZSI6ImFwcC9tb2R1bGVzL2FkZC1jYXIvZWRpdC1pbWdtYXJrL2VkaXQtaW1nbWFyay5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsic2VsZWN0IHtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi5mb3JtLWdyb3VwIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxufVxyXG5cclxuc21hbGwge1xyXG4gICAgY29sb3I6ICNkOTUzNGY7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA3cHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/modules/add-car/edit-imgmark/edit-imgmark.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/modules/add-car/edit-imgmark/edit-imgmark.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Вывод флеш-сообщений -->\r\n<div class=\"alert alert-{{message.type}}\" *ngIf=\"message\">{{message.text}}</div>\r\n<form #form=\"ngForm\" novalidate>\r\n  <div class=\"form-group\">\r\n    <label>Марка</label>\r\n    <!-- Передача ID выбранной марки в компонент -->\r\n    <select (change)=\"passCarId($event)\" class=\"form-control\" required name=\"carItem\" ngModel>\r\n      <option></option>\r\n      <option *ngFor=\"let carItem of marksName\" [value]=\"carItem._id\">{{carItem.markName}}</option>\r\n    </select>\r\n  </div>\r\n  <button class=\"btn btn-danger\" (click)=\"remove()\" [disabled]=\"!isConfirmed\">Удалить</button>\r\n  <!-- Блок внесения данных -->\r\n  <div class=\"form-group\">\r\n    <label>Внесите новое название модели автомобиля</label>\r\n    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"markName\" name=\"markName\" required #name=\"ngModel\"\r\n      [class.is-invalid]=\"name.invalid && name.touched\">\r\n    <small *ngIf=\"name.invalid && name.touched\">Заполните форму</small>\r\n  </div>\r\n  <button class=\"btn btn-warning\" (click)=\"editMark()\" [disabled]=\"form.form.invalid\">Редактировать</button>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/modules/add-car/edit-imgmark/edit-imgmark.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/modules/add-car/edit-imgmark/edit-imgmark.component.ts ***!
  \************************************************************************/
/*! exports provided: EditImgmarkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditImgmarkComponent", function() { return EditImgmarkComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_services_flash_message_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/flash-message.service */ "./src/app/services/flash-message.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_api_img_catalog_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api-img-catalog.service */ "./src/app/services/api-img-catalog.service.ts");




var EditImgmarkComponent = /** @class */ (function () {
    function EditImgmarkComponent(_apiImgcatalogService, _flashMessagesService) {
        this._apiImgcatalogService = _apiImgcatalogService;
        this._flashMessagesService = _flashMessagesService;
        this.marksName = [];
        this.isConfirmed = false;
    }
    EditImgmarkComponent.prototype.ngOnInit = function () {
        // Получение списка машин при загрузке страницы
        this.getCars();
    };
    // Получение списка машин
    EditImgmarkComponent.prototype.getCars = function () {
        var _this = this;
        this._apiImgcatalogService.getCars()
            .subscribe(function (data) {
            _this.marksName = data;
        }, function (error) {
            _this._flashMessagesService.showMessage(error).subscribe(function (data) { return _this.message = data; });
        });
    };
    // Получение Id выбранной машины.
    EditImgmarkComponent.prototype.passCarId = function (event) {
        this.carId = event.target.value;
        this.isConfirmed = true;
    };
    // Создать новый объект марки, передать новое название марки, отправить на сервер,
    // очистить форму, вывести сообщение об успехе или неудаче
    EditImgmarkComponent.prototype.editMark = function () {
        var _this = this;
        var mark = {
            markName: this.markName
        };
        if (this.carId) {
            this._apiImgcatalogService.editMark(this.carId, mark)
                .subscribe(function (data) {
                _this._flashMessagesService.showMessage('Данные успешно обновлены', 'success', 3000).subscribe(function (msg) {
                    _this.message = msg;
                });
            }, function (error) {
                _this._flashMessagesService.showMessage(error).subscribe(function (data) { return _this.message = data; });
            });
            this.markName = '';
        }
        else {
            this._flashMessagesService.showMessage('Выберите данные автомобиля').subscribe(function (data) { return _this.message = data; });
        }
    };
    // Удаление выбранной марки
    EditImgmarkComponent.prototype.remove = function () {
        var _this = this;
        if (this.carId) {
            this._apiImgcatalogService.removeMark(this.carId)
                .subscribe(function (data) {
                _this._flashMessagesService.showMessage('Данные успешно удалены', 'success', 3000).subscribe(function (msg) {
                    _this.message = msg;
                });
            }, function (error) {
                _this._flashMessagesService.showMessage(error).subscribe(function (data) { return _this.message = data; });
            });
        }
        else {
            this._flashMessagesService.showMessage('Выберите данные автомобиля').subscribe(function (data) { return _this.message = data; });
        }
    };
    EditImgmarkComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-edit-imgmark',
            template: __webpack_require__(/*! ./edit-imgmark.component.html */ "./src/app/modules/add-car/edit-imgmark/edit-imgmark.component.html"),
            styles: [__webpack_require__(/*! ./edit-imgmark.component.css */ "./src/app/modules/add-car/edit-imgmark/edit-imgmark.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_api_img_catalog_service__WEBPACK_IMPORTED_MODULE_3__["ApiImgCatalogService"],
            src_app_services_flash_message_service__WEBPACK_IMPORTED_MODULE_1__["FlashMessageService"]])
    ], EditImgmarkComponent);
    return EditImgmarkComponent;
}());



/***/ }),

/***/ "./src/app/modules/add-car/edit-imgmodel/edit-imgmodel.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/modules/add-car/edit-imgmodel/edit-imgmodel.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "select {\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.form-group {\r\n    margin-bottom: 5px;\r\n}\r\n\r\nsmall {\r\n    color: #d9534f;\r\n    margin-bottom: 7px;\r\n    display: block;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tb2R1bGVzL2FkZC1jYXIvZWRpdC1pbWdtb2RlbC9lZGl0LWltZ21vZGVsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxvQkFBb0I7Q0FDdkI7O0FBRUQ7SUFDSSxtQkFBbUI7Q0FDdEI7O0FBRUQ7SUFDSSxlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLGVBQWU7Q0FDbEIiLCJmaWxlIjoiYXBwL21vZHVsZXMvYWRkLWNhci9lZGl0LWltZ21vZGVsL2VkaXQtaW1nbW9kZWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInNlbGVjdCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4uZm9ybS1ncm91cCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbn1cclxuXHJcbnNtYWxsIHtcclxuICAgIGNvbG9yOiAjZDk1MzRmO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogN3B4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/modules/add-car/edit-imgmodel/edit-imgmodel.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/modules/add-car/edit-imgmodel/edit-imgmodel.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Вывод флеш-сообщений -->\r\n<div class=\"alert alert-{{message.type}}\" *ngIf=\"message\">{{message.text}}</div>\r\n<form #form=\"ngForm\" novalidate>\r\n  <div class=\"form-group\">\r\n    <label>Марка</label>\r\n    <!-- Передача ID выбранной марки в компонент -->\r\n    <select (change)=\"passCarId($event)\" class=\"custom-select\" name=\"carItem\" ngModel required>\r\n      <option></option>\r\n      <option *ngFor=\"let carItem of markName\" [value]=\"carItem._id\">{{carItem.markName}}</option>\r\n    </select>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label>Модель</label>\r\n    <!-- Передача ID выбранной модели в компонент -->\r\n    <select (change)=\"passModelId($event)\" class=\"custom-select\" name=\"model\" ngModel required>\r\n      <option></option>\r\n      <option *ngFor=\"let model of modelsName\" [value]=\"model._id\">{{model.modelsName}}</option>\r\n    </select>\r\n  </div>\r\n  <button class=\"btn btn-danger\" (click)=\"remove()\" [disabled]=\"!isConfirmed\">Удалить</button>\r\n  <!-- Блок внесения данных -->\r\n  <div class=\"form-group\">\r\n    <p>Внесите новое название модели автомобиля</p>\r\n    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"modelName\" name=\"modelName\" required #name=\"ngModel\"\r\n      [class.is-invalid]=\"name.invalid && name.touched\">\r\n    <small *ngIf=\"name.invalid && name.touched\">Заполните форму</small>\r\n  </div>\r\n  <button class=\"btn btn-warning\" (click)=\"editModel()\" [disabled]=\"form.form.invalid\">Редактировать</button>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/modules/add-car/edit-imgmodel/edit-imgmodel.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/modules/add-car/edit-imgmodel/edit-imgmodel.component.ts ***!
  \**************************************************************************/
/*! exports provided: EditImgmodelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditImgmodelComponent", function() { return EditImgmodelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_services_flash_message_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/flash-message.service */ "./src/app/services/flash-message.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_api_img_catalog_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api-img-catalog.service */ "./src/app/services/api-img-catalog.service.ts");




var EditImgmodelComponent = /** @class */ (function () {
    function EditImgmodelComponent(_apiImgCatalogService, _flashMessagesService) {
        this._apiImgCatalogService = _apiImgCatalogService;
        this._flashMessagesService = _flashMessagesService;
        this.markName = [];
        this.modelsName = [];
        this.isConfirmed = false;
    }
    EditImgmodelComponent.prototype.ngOnInit = function () {
        // Получение списка машин при загрузке страницы
        this.getCars();
    };
    // Получение списка машин
    EditImgmodelComponent.prototype.getCars = function () {
        var _this = this;
        this._apiImgCatalogService.getCars()
            .subscribe(function (data) {
            _this.markName = data;
        }, function (error) {
            _this._flashMessagesService.showMessage(error).subscribe(function (data) { return _this.message = data; });
        });
    };
    // Получение Id выбранной машины. Получение списка моделей
    EditImgmodelComponent.prototype.passCarId = function (event) {
        var _this = this;
        this.carId = event.target.value;
        this._apiImgCatalogService.getModel(this.carId)
            .subscribe(function (data) {
            _this.modelsName = data;
        }, function (error) {
            _this._flashMessagesService.showMessage(error).subscribe(function (data) { return _this.message = data; });
        });
    };
    // Получение Id выбранной модели.
    EditImgmodelComponent.prototype.passModelId = function (event) {
        this.modelId = event.target.value;
        this.isConfirmed = true;
    };
    // Создать новый объект модели, передать название модели,
    //  отправить на сервер, очистить форму, вывести сообщение об успехе или неудаче
    EditImgmodelComponent.prototype.editModel = function () {
        var _this = this;
        var model = {
            modelsName: this.modelName
        };
        if (this.carId && this.modelId) {
            this._apiImgCatalogService.editModel(this.carId, this.modelId, model)
                .subscribe(function (data) {
                _this._flashMessagesService.showMessage('Данные успешно обновлены', 'success', 3000).subscribe(function (msg) {
                    _this.message = msg;
                });
            }, function (error) {
                _this._flashMessagesService.showMessage(error).subscribe(function (data) { return _this.message = data; });
            });
            this.modelName = '';
        }
        else {
            this._flashMessagesService.showMessage('Выберите данные автомобиля').subscribe(function (data) { return _this.message = data; });
        }
    };
    // Удаление выбранной модели
    EditImgmodelComponent.prototype.remove = function () {
        var _this = this;
        if (this.carId && this.modelId) {
            this._apiImgCatalogService.removeModel(this.carId, this.modelId)
                .subscribe(function (data) {
                _this._flashMessagesService.showMessage('Данные успешно удалены', 'success', 3000).subscribe(function (msg) {
                    _this.message = msg;
                });
            }, function (error) {
                _this._flashMessagesService.showMessage(error).subscribe(function (data) { return _this.message = data; });
            });
        }
        else {
            this._flashMessagesService.showMessage('Выберите данные автомобиля').subscribe(function (data) { return _this.message = data; });
        }
    };
    EditImgmodelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-edit-imgmodel',
            template: __webpack_require__(/*! ./edit-imgmodel.component.html */ "./src/app/modules/add-car/edit-imgmodel/edit-imgmodel.component.html"),
            styles: [__webpack_require__(/*! ./edit-imgmodel.component.css */ "./src/app/modules/add-car/edit-imgmodel/edit-imgmodel.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_api_img_catalog_service__WEBPACK_IMPORTED_MODULE_3__["ApiImgCatalogService"],
            src_app_services_flash_message_service__WEBPACK_IMPORTED_MODULE_1__["FlashMessageService"]])
    ], EditImgmodelComponent);
    return EditImgmodelComponent;
}());



/***/ }),

/***/ "./src/app/modules/add-car/edit-imgmodification/edit-imgmodification.component.css":
/*!*****************************************************************************************!*\
  !*** ./src/app/modules/add-car/edit-imgmodification/edit-imgmodification.component.css ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "select {\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.form-group {\r\n    margin-bottom: 5px;\r\n}\r\n\r\nsmall {\r\n    color: #d9534f;\r\n    margin-bottom: 7px;\r\n    display: block;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tb2R1bGVzL2FkZC1jYXIvZWRpdC1pbWdtb2RpZmljYXRpb24vZWRpdC1pbWdtb2RpZmljYXRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG9CQUFvQjtDQUN2Qjs7QUFFRDtJQUNJLG1CQUFtQjtDQUN0Qjs7QUFFRDtJQUNJLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsZUFBZTtDQUNsQiIsImZpbGUiOiJhcHAvbW9kdWxlcy9hZGQtY2FyL2VkaXQtaW1nbW9kaWZpY2F0aW9uL2VkaXQtaW1nbW9kaWZpY2F0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJzZWxlY3Qge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLmZvcm0tZ3JvdXAge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG59XHJcblxyXG5zbWFsbCB7XHJcbiAgICBjb2xvcjogI2Q5NTM0ZjtcclxuICAgIG1hcmdpbi1ib3R0b206IDdweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/modules/add-car/edit-imgmodification/edit-imgmodification.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/add-car/edit-imgmodification/edit-imgmodification.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Вывод флеш-сообщений -->\r\n<div class=\"alert alert-{{message.type}}\" *ngIf=\"message\">{{message.text}}</div>\r\n<form #form=\"ngForm\" novalidate>\r\n  <div class=\"form-group\">\r\n    <label>Марка</label>\r\n    <!-- Передача ID выбранной марки в компонент -->\r\n    <select (change)=\"passCarId($event)\" class=\"custom-select\" name=\"carItem\" ngModel required>\r\n      <option></option>\r\n      <option *ngFor=\"let carItem of markName\" [value]=\"carItem._id\">{{carItem.markName}}</option>\r\n    </select>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label>Модель</label>\r\n    <!-- Передача ID выбранной модели в компонент -->\r\n    <select (change)=\"passModelId($event)\" class=\"custom-select\" name=\"model\" ngModel required>\r\n      <option></option>\r\n      <option *ngFor=\"let model of modelName\" [value]=\"model._id\">{{model.modelsName}}</option>\r\n    </select>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label>Модификация</label>\r\n    <!-- Передача ID выбранной модификации в компонент -->\r\n    <select (change)=\"passModificationId($event)\" class=\"custom-select\" name=\"modification\" ngModel required>\r\n      <option></option>\r\n      <option *ngFor=\"let modification of modifications\" [value]=\"modification._id\">{{modification.modificationName}}</option>\r\n    </select>\r\n  </div>\r\n  <button class=\"btn btn-danger\" (click)=\"remove()\" [disabled]=\"!isConfirmed\">Удалить</button>\r\n  <!-- Блок добавления данных -->\r\n  <div class=\"form-group\">\r\n    <label>Внесите новое название модификации автомобиля</label>\r\n    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"modificationName\" name=\"modificationName\" required #name=\"ngModel\"\r\n      [class.is-invalid]=\"name.invalid && name.touched\">\r\n    <small *ngIf=\"name.invalid && name.touched\">Заполните форму</small>\r\n  </div>\r\n  <button class=\"btn btn-warning\" (click)=\"editModification()\" [disabled]=\"form.form.invalid\">Редактировать</button>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/modules/add-car/edit-imgmodification/edit-imgmodification.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/add-car/edit-imgmodification/edit-imgmodification.component.ts ***!
  \****************************************************************************************/
/*! exports provided: EditImgmodificationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditImgmodificationComponent", function() { return EditImgmodificationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_services_flash_message_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/flash-message.service */ "./src/app/services/flash-message.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_api_img_catalog_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api-img-catalog.service */ "./src/app/services/api-img-catalog.service.ts");




var EditImgmodificationComponent = /** @class */ (function () {
    function EditImgmodificationComponent(_apiImgCatalogService, _flashMessagesService) {
        this._apiImgCatalogService = _apiImgCatalogService;
        this._flashMessagesService = _flashMessagesService;
        this.markName = [];
        this.modelName = [];
        this.modifications = [];
        this.isConfirmed = false;
    }
    EditImgmodificationComponent.prototype.ngOnInit = function () {
        // Получение списка машин при загрузке страницы
        this.getCars();
    };
    // Получение списка машин
    EditImgmodificationComponent.prototype.getCars = function () {
        var _this = this;
        this._apiImgCatalogService.getCars()
            .subscribe(function (data) {
            _this.markName = data;
        }, function (error) {
            _this._flashMessagesService.showMessage(error).subscribe(function (data) { return _this.message = data; });
        });
    };
    // Получение Id выбранной машины. Получение списка моделей
    EditImgmodificationComponent.prototype.passCarId = function (event) {
        var _this = this;
        this.carId = event.target.value;
        this._apiImgCatalogService.getModel(this.carId)
            .subscribe(function (data) {
            _this.modelName = data;
        }, function (error) {
            _this._flashMessagesService.showMessage(error).subscribe(function (data) { return _this.message = data; });
        });
    };
    // Получение Id выбранной модели. Получение списка модификаций
    EditImgmodificationComponent.prototype.passModelId = function (event) {
        var _this = this;
        this.modelId = event.target.value;
        this._apiImgCatalogService.getModification(this.carId, this.modelId)
            .subscribe(function (data) {
            _this.modifications = data;
        }, function (error) {
            _this._flashMessagesService.showMessage(error).subscribe(function (data) { return _this.message = data; });
        });
    };
    // Получение Id выбранной модификации.
    EditImgmodificationComponent.prototype.passModificationId = function (event) {
        this.unitId = event.target.value;
        this.isConfirmed = true;
    };
    // Создать новый объект модификации, передать новое название модификации,
    //  отправить на сервер, очистить форму, вывести сообщение об успехе или неудаче
    EditImgmodificationComponent.prototype.editModification = function () {
        var _this = this;
        var modification = {
            modificationName: this.modificationName
        };
        if (this.carId && this.modelId && this.unitId) {
            this._apiImgCatalogService.editModification(this.carId, this.modelId, this.unitId, modification)
                .subscribe(function (data) {
                _this._flashMessagesService.showMessage('Данные успешно обновлены', 'success', 3000).subscribe(function (msg) {
                    _this.message = msg;
                });
            }, function (error) {
                _this._flashMessagesService.showMessage(error).subscribe(function (data) { return _this.message = data; });
            });
            this.modificationName = '';
        }
        else {
            this._flashMessagesService.showMessage('Выберите данные автомобиля').subscribe(function (data) { return _this.message = data; });
        }
    };
    // Удаление выбранной модификации
    EditImgmodificationComponent.prototype.remove = function () {
        var _this = this;
        if (this.carId && this.modelId && this.unitId) {
            this._apiImgCatalogService.removeModification(this.carId, this.modelId, this.unitId)
                .subscribe(function (data) {
                _this._flashMessagesService.showMessage('Данные успешно удалены', 'success', 3000).subscribe(function (msg) {
                    _this.message = msg;
                });
            }, function (error) {
                _this._flashMessagesService.showMessage(error).subscribe(function (data) { return _this.message = data; });
            });
        }
        else {
            this._flashMessagesService.showMessage('Выберите данные автомобиля').subscribe(function (data) { return _this.message = data; });
        }
    };
    EditImgmodificationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-edit-imgmodification',
            template: __webpack_require__(/*! ./edit-imgmodification.component.html */ "./src/app/modules/add-car/edit-imgmodification/edit-imgmodification.component.html"),
            styles: [__webpack_require__(/*! ./edit-imgmodification.component.css */ "./src/app/modules/add-car/edit-imgmodification/edit-imgmodification.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_api_img_catalog_service__WEBPACK_IMPORTED_MODULE_3__["ApiImgCatalogService"],
            src_app_services_flash_message_service__WEBPACK_IMPORTED_MODULE_1__["FlashMessageService"]])
    ], EditImgmodificationComponent);
    return EditImgmodificationComponent;
}());



/***/ }),

/***/ "./src/app/modules/add-car/edit-imgunit/edit-imgunit.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/modules/add-car/edit-imgunit/edit-imgunit.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "select {\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.form-group {\r\n    margin-bottom: 5px;\r\n}\r\n\r\nsmall {\r\n    color: #d9534f;\r\n    margin-bottom: 7px;\r\n    display: block;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tb2R1bGVzL2FkZC1jYXIvZWRpdC1pbWd1bml0L2VkaXQtaW1ndW5pdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksb0JBQW9CO0NBQ3ZCOztBQUVEO0lBQ0ksbUJBQW1CO0NBQ3RCOztBQUVEO0lBQ0ksZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixlQUFlO0NBQ2xCIiwiZmlsZSI6ImFwcC9tb2R1bGVzL2FkZC1jYXIvZWRpdC1pbWd1bml0L2VkaXQtaW1ndW5pdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsic2VsZWN0IHtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi5mb3JtLWdyb3VwIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxufVxyXG5cclxuc21hbGwge1xyXG4gICAgY29sb3I6ICNkOTUzNGY7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA3cHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/modules/add-car/edit-imgunit/edit-imgunit.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/modules/add-car/edit-imgunit/edit-imgunit.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Вывод флеш-сообщений -->\r\n<div class=\"alert alert-{{message.type}}\" *ngIf=\"message\">{{message.text}}</div>\r\n<form #form=\"ngForm\" novalidate>\r\n  <div class=\"form-group\">\r\n    <label>Марка</label>\r\n    <!-- Передача ID выбранной марки в компонент -->\r\n    <select (change)=\"passCarId($event)\" class=\"custom-select\" name=\"carItem\" ngModel required>\r\n      <option></option>\r\n      <option *ngFor=\"let carItem of markName\" [value]=\"carItem._id\">{{carItem.markName}}</option>\r\n    </select>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label>Модель</label>\r\n    <!-- Передача ID выбранной модели в компонент -->\r\n    <select (change)=\"passModelId($event)\" class=\"custom-select\" name=\"model\" ngModel required>\r\n      <option></option>\r\n      <option *ngFor=\"let model of modelName\" [value]=\"model._id\">{{model.modelsName}}</option>\r\n    </select>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label>Модификация</label>\r\n    <!-- Передача ID выбранной модификации в компонент -->\r\n    <select (change)=\"passModificationId($event)\" class=\"custom-select\" name=\"modification\" ngModel required>\r\n      <option></option>\r\n      <option *ngFor=\"let modification of modifications\" [value]=\"modification._id\">{{modification.modificationName}}</option>\r\n    </select>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label>Агрегат</label>\r\n    <!-- Передача ID выбранного агрегата в компонент -->\r\n    <select (change)=\"passUnitId($event)\" class=\"custom-select\" name=\"unit\" ngModel required>\r\n      <option></option>\r\n      <option *ngFor=\"let unit of units\" [value]=\"unit._id\">{{unit.unitName}}</option>\r\n    </select>\r\n  </div>\r\n  <button class=\"btn btn-danger\" (click)=\"remove()\" [disabled]=\"!isConfirmed\">Удалить</button>\r\n  <!-- Блок добавления данных -->\r\n  <div class=\"form-group\">\r\n    <label>Внесите новое название агрегата автомобиля</label>\r\n    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"unitName\" name=\"unitName\" required #name=\"ngModel\"\r\n      [class.is-invalid]=\"name.invalid && name.touched\">\r\n    <small *ngIf=\"name.invalid && name.touched\">Заполните форму</small>\r\n  </div>\r\n  <button class=\"btn btn-warning\" (click)=\"editUnit()\" [disabled]=\"form.form.invalid\">Редактировать</button>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/modules/add-car/edit-imgunit/edit-imgunit.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/modules/add-car/edit-imgunit/edit-imgunit.component.ts ***!
  \************************************************************************/
/*! exports provided: EditImgunitComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditImgunitComponent", function() { return EditImgunitComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_services_flash_message_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/flash-message.service */ "./src/app/services/flash-message.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_api_img_catalog_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api-img-catalog.service */ "./src/app/services/api-img-catalog.service.ts");




var EditImgunitComponent = /** @class */ (function () {
    function EditImgunitComponent(_apiImgCatalogService, _flashMessagesService) {
        this._apiImgCatalogService = _apiImgCatalogService;
        this._flashMessagesService = _flashMessagesService;
        this.markName = [];
        this.modelName = [];
        this.modifications = [];
        this.units = [];
        this.isConfirmed = false;
    }
    EditImgunitComponent.prototype.ngOnInit = function () {
        // Получение списка машин при загрузке страницы
        this.getCars();
    };
    // Получение списка машин
    EditImgunitComponent.prototype.getCars = function () {
        var _this = this;
        this._apiImgCatalogService.getCars()
            .subscribe(function (data) {
            _this.markName = data;
        }, function (error) {
            _this._flashMessagesService.showMessage(error).subscribe(function (data) { return _this.message = data; });
        });
    };
    // Получение Id выбранной машины. Получение списка моделей
    EditImgunitComponent.prototype.passCarId = function (event) {
        var _this = this;
        this.carId = event.target.value;
        this._apiImgCatalogService.getModel(this.carId)
            .subscribe(function (data) {
            _this.modelName = data;
        }, function (error) {
            _this._flashMessagesService.showMessage(error).subscribe(function (data) { return _this.message = data; });
        });
    };
    // Получение Id выбранной модели. Получение списка модификаций
    EditImgunitComponent.prototype.passModelId = function (event) {
        var _this = this;
        this.modelId = event.target.value;
        this._apiImgCatalogService.getModification(this.carId, this.modelId)
            .subscribe(function (data) {
            _this.modifications = data;
        }, function (error) {
            _this._flashMessagesService.showMessage(error).subscribe(function (data) { return _this.message = data; });
        });
    };
    // Получение Id выбранной модификации. Получение списка агрегатов
    EditImgunitComponent.prototype.passModificationId = function (event) {
        var _this = this;
        this.unitId = event.target.value;
        this._apiImgCatalogService.getUnit(this.carId, this.modelId, this.unitId)
            .subscribe(function (data) {
            _this.units = data;
        }, function (error) {
            _this._flashMessagesService.showMessage(error).subscribe(function (data) { return _this.message = data; });
        });
    };
    // Получение Id выбранного агрегата.
    EditImgunitComponent.prototype.passUnitId = function (event) {
        this.detailId = event.target.value;
        this.isConfirmed = true;
    };
    // Создать новый объект агрегата, передать новое название агрегата,
    //  отправить на сервер, очистить форму, вывести сообщение об успехе или неудаче
    EditImgunitComponent.prototype.editUnit = function () {
        var _this = this;
        var unit = {
            unitName: this.unitName
        };
        if (this.carId && this.modelId && this.unitId && this.detailId) {
            this._apiImgCatalogService.editUnit(this.carId, this.modelId, this.unitId, this.detailId, unit)
                .subscribe(function (data) {
                _this._flashMessagesService.showMessage('Данные успешно обновлены', 'success', 3000).subscribe(function (msg) {
                    _this.message = msg;
                });
            }, function (error) {
                _this._flashMessagesService.showMessage(error).subscribe(function (data) { return _this.message = data; });
            });
            this.unitName = '';
        }
        else {
            this._flashMessagesService.showMessage('Выберите данные автомобиля').subscribe(function (data) { return _this.message = data; });
        }
    };
    // Удаление выбраннго агрегата
    EditImgunitComponent.prototype.remove = function () {
        var _this = this;
        if (this.carId && this.modelId && this.unitId && this.detailId) {
            this._apiImgCatalogService.removeUnit(this.carId, this.modelId, this.unitId, this.detailId)
                .subscribe(function (data) {
                _this._flashMessagesService.showMessage('Данные успешно удалены', 'success', 3000).subscribe(function (msg) {
                    _this.message = msg;
                });
            }, function (error) {
                _this._flashMessagesService.showMessage(error).subscribe(function (data) { return _this.message = data; });
            });
        }
        else {
            this._flashMessagesService.showMessage('Выберите данные автомобиля').subscribe(function (data) { return _this.message = data; });
        }
    };
    EditImgunitComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-edit-imgunit',
            template: __webpack_require__(/*! ./edit-imgunit.component.html */ "./src/app/modules/add-car/edit-imgunit/edit-imgunit.component.html"),
            styles: [__webpack_require__(/*! ./edit-imgunit.component.css */ "./src/app/modules/add-car/edit-imgunit/edit-imgunit.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_api_img_catalog_service__WEBPACK_IMPORTED_MODULE_3__["ApiImgCatalogService"],
            src_app_services_flash_message_service__WEBPACK_IMPORTED_MODULE_1__["FlashMessageService"]])
    ], EditImgunitComponent);
    return EditImgunitComponent;
}());



/***/ }),

/***/ "./src/app/modules/add-car/edit-main/edit-main.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/modules/add-car/edit-main/edit-main.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvbW9kdWxlcy9hZGQtY2FyL2VkaXQtbWFpbi9lZGl0LW1haW4uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/add-car/edit-main/edit-main.component.html":
/*!********************************************************************!*\
  !*** ./src/app/modules/add-car/edit-main/edit-main.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <!-- Колонка с роутами для редактирования данных -->\r\n    <div class=\"col-lg-4\">\r\n        <ul class=\"nav nav-pills flex-column\">\r\n            <li class=\"nav-item\" [routerLinkActive]=\"['active']\">\r\n                <a class=\"nav-link\" [routerLink]=\"['/editing/editmain/mark']\">Редактировать марку</a>\r\n            </li>\r\n            <li class=\"nav-item\" [routerLinkActive]=\"['active']\">\r\n                <a class=\"nav-link\" [routerLink]=\"['/editing/editmain/model']\">Редактировать модель</a>\r\n            </li>\r\n            <li class=\"nav-item\" [routerLinkActive]=\"['active']\">\r\n                <a class=\"nav-link\" [routerLink]=\"['/editing/editmain/modification']\">Редактировать модификацию</a>\r\n            </li>\r\n            <li class=\"nav-item\" [routerLinkActive]=\"['active']\">\r\n                <a class=\"nav-link\" [routerLink]=\"['/editing/editmain/unit']\">Редактировать агрегат</a>\r\n            </li>\r\n            <li class=\"nav-item\" [routerLinkActive]=\"['active']\">\r\n                <a class=\"nav-link\" [routerLink]=\"['/editing/editmain/detail']\">Редактировать деталь</a>\r\n            </li>\r\n            <li class=\"nav-item\" [routerLinkActive]=\"['active']\">\r\n                <a class=\"nav-link\" [routerLink]=\"['/editing/editmain/item']\">Редактировать составляющие детали</a>\r\n            </li>\r\n            <li class=\"nav-item\" [routerLinkActive]=\"['active']\">\r\n                <a class=\"nav-link\" [routerLink]=\"['/editing/editmain/analogue']\">Редактировать аналог</a>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n    <div class=\"col-lg-8\">\r\n        <!-- Страницы редактирования данных -->\r\n        <router-outlet></router-outlet>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/modules/add-car/edit-main/edit-main.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/modules/add-car/edit-main/edit-main.component.ts ***!
  \******************************************************************/
/*! exports provided: EditMainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditMainComponent", function() { return EditMainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var EditMainComponent = /** @class */ (function () {
    function EditMainComponent() {
    }
    EditMainComponent.prototype.ngOnInit = function () {
    };
    EditMainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-main',
            template: __webpack_require__(/*! ./edit-main.component.html */ "./src/app/modules/add-car/edit-main/edit-main.component.html"),
            styles: [__webpack_require__(/*! ./edit-main.component.css */ "./src/app/modules/add-car/edit-main/edit-main.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], EditMainComponent);
    return EditMainComponent;
}());



/***/ }),

/***/ "./src/app/modules/add-car/edit-mark/edit-mark.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/modules/add-car/edit-mark/edit-mark.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "select {\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.form-group {\r\n    margin-bottom: 5px;\r\n}\r\n\r\nsmall {\r\n    color: #d9534f;\r\n    margin-bottom: 7px;\r\n    display: block;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tb2R1bGVzL2FkZC1jYXIvZWRpdC1tYXJrL2VkaXQtbWFyay5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksb0JBQW9CO0NBQ3ZCOztBQUVEO0lBQ0ksbUJBQW1CO0NBQ3RCOztBQUVEO0lBQ0ksZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixlQUFlO0NBQ2xCIiwiZmlsZSI6ImFwcC9tb2R1bGVzL2FkZC1jYXIvZWRpdC1tYXJrL2VkaXQtbWFyay5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsic2VsZWN0IHtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi5mb3JtLWdyb3VwIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxufVxyXG5cclxuc21hbGwge1xyXG4gICAgY29sb3I6ICNkOTUzNGY7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA3cHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/modules/add-car/edit-mark/edit-mark.component.html":
/*!********************************************************************!*\
  !*** ./src/app/modules/add-car/edit-mark/edit-mark.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Вывод флеш-сообщений -->\r\n<div class=\"alert alert-{{message.type}}\" *ngIf=\"message\">{{message.text}}</div>\r\n<form #form=\"ngForm\" novalidate>\r\n  <div class=\"form-group\">\r\n    <label>Марка</label>\r\n    <!-- Передача ID выбранной марки в компонент -->\r\n    <select (change)=\"passCarId($event)\" class=\"custom-select\" required name=\"carItem\" ngModel>\r\n      <option></option>\r\n      <option *ngFor=\"let carItem of marksName\" [value]=\"carItem._id\">{{carItem.markName}}</option>\r\n    </select>\r\n  </div>\r\n  <button class=\"btn btn-danger\" (click)=\"remove()\" [disabled]=\"!isConfirmed\">Удалить</button>\r\n  <!-- Блок добавления данных -->\r\n  <div class=\"form-group\">\r\n    <label>Внесите новое название модели автомобиля</label>\r\n    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"markName\" name=\"markName\" required #name=\"ngModel\"\r\n      [class.is-invalid]=\"name.invalid && name.touched\">\r\n    <small *ngIf=\"name.invalid && name.touched\">Заполните форму</small>\r\n  </div>\r\n  <button class=\"btn btn-warning\" (click)=\"editMark()\" [disabled]=\"form.form.invalid\">Редактировать</button>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/modules/add-car/edit-mark/edit-mark.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/modules/add-car/edit-mark/edit-mark.component.ts ***!
  \******************************************************************/
/*! exports provided: EditMarkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditMarkComponent", function() { return EditMarkComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_services_flash_message_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/flash-message.service */ "./src/app/services/flash-message.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../services/api.service */ "./src/app/services/api.service.ts");




var EditMarkComponent = /** @class */ (function () {
    function EditMarkComponent(_apiService, _flashMessagesService) {
        this._apiService = _apiService;
        this._flashMessagesService = _flashMessagesService;
        this.marksName = [];
        this.isConfirmed = false;
    }
    EditMarkComponent.prototype.ngOnInit = function () {
        // Получение списка машин при загрузке страницы
        this.getCars();
    };
    // Получение списка машин
    EditMarkComponent.prototype.getCars = function () {
        var _this = this;
        this._apiService.getCars()
            .subscribe(function (data) {
            _this.marksName = data;
        }, function (error) {
            _this._flashMessagesService.showMessage(error).subscribe(function (data) { return _this.message = data; });
        });
    };
    // Получение Id выбранной машины.
    EditMarkComponent.prototype.passCarId = function (event) {
        this.carId = event.target.value;
        this.isConfirmed = true;
    };
    // Создать новый объект марки, передать новое название марки, отправить на сервер,
    // очистить форму, вывести сообщение об успехе или неудаче
    EditMarkComponent.prototype.editMark = function () {
        var _this = this;
        var mark = {
            markName: this.markName
        };
        if (this.carId) {
            this._apiService.editMark(this.carId, mark)
                .subscribe(function (data) {
                _this._flashMessagesService.showMessage('Данные успешно обновлены', 'success', 3000).subscribe(function (msg) {
                    _this.message = msg;
                });
            }, function (error) {
                _this._flashMessagesService.showMessage(error).subscribe(function (data) { return _this.message = data; });
            });
            this.markName = '';
        }
        else {
            this._flashMessagesService.showMessage('Выберите данные автомобиля').subscribe(function (data) { return _this.message = data; });
        }
    };
    // Удаление выбранной марки
    EditMarkComponent.prototype.remove = function () {
        var _this = this;
        if (this.carId) {
            this._apiService.removeMark(this.carId)
                .subscribe(function (data) {
                _this._flashMessagesService.showMessage('Данные успешно удалены', 'success', 3000).subscribe(function (msg) {
                    _this.message = msg;
                });
            }, function (error) {
                _this._flashMessagesService.showMessage(error).subscribe(function (data) { return _this.message = data; });
            });
        }
        else {
            this._flashMessagesService.showMessage('Выберите данные автомобиля').subscribe(function (data) { return _this.message = data; });
        }
    };
    EditMarkComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-edit-mark',
            template: __webpack_require__(/*! ./edit-mark.component.html */ "./src/app/modules/add-car/edit-mark/edit-mark.component.html"),
            styles: [__webpack_require__(/*! ./edit-mark.component.css */ "./src/app/modules/add-car/edit-mark/edit-mark.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"],
            src_app_services_flash_message_service__WEBPACK_IMPORTED_MODULE_1__["FlashMessageService"]])
    ], EditMarkComponent);
    return EditMarkComponent;
}());



/***/ }),

/***/ "./src/app/modules/add-car/edit-model/edit-model.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/modules/add-car/edit-model/edit-model.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "select {\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.form-group {\r\n    margin-bottom: 5px;\r\n}\r\n\r\nsmall {\r\n    color: #d9534f;\r\n    margin-bottom: 7px;\r\n    display: block;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tb2R1bGVzL2FkZC1jYXIvZWRpdC1tb2RlbC9lZGl0LW1vZGVsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxvQkFBb0I7Q0FDdkI7O0FBRUQ7SUFDSSxtQkFBbUI7Q0FDdEI7O0FBRUQ7SUFDSSxlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLGVBQWU7Q0FDbEIiLCJmaWxlIjoiYXBwL21vZHVsZXMvYWRkLWNhci9lZGl0LW1vZGVsL2VkaXQtbW9kZWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInNlbGVjdCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4uZm9ybS1ncm91cCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbn1cclxuXHJcbnNtYWxsIHtcclxuICAgIGNvbG9yOiAjZDk1MzRmO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogN3B4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/modules/add-car/edit-model/edit-model.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/modules/add-car/edit-model/edit-model.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Вывод флеш-сообщений -->\r\n<div class=\"alert alert-{{message.type}}\" *ngIf=\"message\">{{message.text}}</div>\r\n<form #form=\"ngForm\" novalidate>\r\n  <div class=\"form-group\">\r\n    <label>Марка</label>\r\n    <!-- Передача ID выбранной марки в компонент -->\r\n    <select (change)=\"passCarId($event)\" class=\"custom-select\" name=\"carItem\" ngModel required>\r\n      <option></option>\r\n      <option *ngFor=\"let carItem of markName\" [value]=\"carItem._id\">{{carItem.markName}}</option>\r\n    </select>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label>Модель</label>\r\n    <!-- Передача ID выбранной модели в компонент -->\r\n    <select (change)=\"passModelId($event)\" class=\"custom-select\" name=\"model\" ngModel required>\r\n      <option></option>\r\n      <option *ngFor=\"let model of modelsName\" [value]=\"model._id\">{{model.modelsName}}</option>\r\n    </select>\r\n  </div>\r\n  <button class=\"btn btn-danger\" (click)=\"remove()\" [disabled]=\"!isConfirmed\">Удалить</button>\r\n  <!-- Блок добавления данных -->\r\n  <div class=\"form-group\">\r\n    <label>Внесите новое название модели автомобиля</label>\r\n    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"modelName\" name=\"modelName\" required #name=\"ngModel\"\r\n      [class.is-invalid]=\"name.invalid && name.touched\">\r\n    <small *ngIf=\"name.invalid && name.touched\">Заполните форму</small>\r\n  </div>\r\n  <button class=\"btn btn-warning\" (click)=\"editModel()\" [disabled]=\"form.form.invalid\">Редактировать</button>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/modules/add-car/edit-model/edit-model.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/modules/add-car/edit-model/edit-model.component.ts ***!
  \********************************************************************/
/*! exports provided: EditModelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditModelComponent", function() { return EditModelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_services_flash_message_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/flash-message.service */ "./src/app/services/flash-message.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../services/api.service */ "./src/app/services/api.service.ts");




var EditModelComponent = /** @class */ (function () {
    function EditModelComponent(_apiService, _flashMessagesService) {
        this._apiService = _apiService;
        this._flashMessagesService = _flashMessagesService;
        this.markName = [];
        this.modelsName = [];
        this.isConfirmed = false;
    }
    EditModelComponent.prototype.ngOnInit = function () {
        // Получение списка машин при загрузке страницы
        this.getCars();
    };
    // Получение списка машин
    EditModelComponent.prototype.getCars = function () {
        var _this = this;
        this._apiService.getCars()
            .subscribe(function (data) {
            _this.markName = data;
        }, function (error) {
            _this._flashMessagesService.showMessage(error).subscribe(function (data) { return _this.message = data; });
        });
    };
    // Получение Id выбранной машины. Получение списка моделей
    EditModelComponent.prototype.passCarId = function (event) {
        var _this = this;
        this.carId = event.target.value;
        this._apiService.getModelName(this.carId)
            .subscribe(function (data) {
            _this.modelsName = data;
        }, function (error) {
            _this._flashMessagesService.showMessage(error).subscribe(function (data) { return _this.message = data; });
        });
    };
    // Получение Id выбранной модели.
    EditModelComponent.prototype.passModelId = function (event) {
        this.modelId = event.target.value;
        this.isConfirmed = true;
    };
    // Создать новый объект модели, передать название модели,
    //  отправить на сервер, очистить форму, вывести сообщение об успехе или неудаче
    EditModelComponent.prototype.editModel = function () {
        var _this = this;
        var model = {
            modelsName: this.modelName
        };
        if (this.carId && this.modelId) {
            this._apiService.editModel(this.carId, this.modelId, model)
                .subscribe(function (data) {
                _this._flashMessagesService.showMessage('Данные успешно обновлены', 'success', 3000).subscribe(function (msg) {
                    _this.message = msg;
                });
            }, function (error) {
                _this._flashMessagesService.showMessage(error).subscribe(function (data) { return _this.message = data; });
            });
            this.modelName = '';
        }
        else {
            this._flashMessagesService.showMessage('Выберите данные автомобиля').subscribe(function (data) { return _this.message = data; });
        }
    };
    // Удаление выбранной модели
    EditModelComponent.prototype.remove = function () {
        var _this = this;
        if (this.carId && this.modelId) {
            this._apiService.removeModel(this.carId, this.modelId)
                .subscribe(function (data) {
                _this._flashMessagesService.showMessage('Данные успешно удалены', 'success', 3000).subscribe(function (msg) {
                    _this.message = msg;
                });
            }, function (error) {
                _this._flashMessagesService.showMessage(error).subscribe(function (data) { return _this.message = data; });
            });
        }
        else {
            this._flashMessagesService.showMessage('Выберите данные автомобиля').subscribe(function (data) { return _this.message = data; });
        }
    };
    EditModelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-edit-model',
            template: __webpack_require__(/*! ./edit-model.component.html */ "./src/app/modules/add-car/edit-model/edit-model.component.html"),
            styles: [__webpack_require__(/*! ./edit-model.component.css */ "./src/app/modules/add-car/edit-model/edit-model.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"],
            src_app_services_flash_message_service__WEBPACK_IMPORTED_MODULE_1__["FlashMessageService"]])
    ], EditModelComponent);
    return EditModelComponent;
}());



/***/ }),

/***/ "./src/app/modules/add-car/edit-modification/edit-modification.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/add-car/edit-modification/edit-modification.component.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "select {\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.form-group {\r\n    margin-bottom: 5px;\r\n}\r\n\r\nsmall {\r\n    color: #d9534f;\r\n    margin-bottom: 7px;\r\n    display: block;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tb2R1bGVzL2FkZC1jYXIvZWRpdC1tb2RpZmljYXRpb24vZWRpdC1tb2RpZmljYXRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG9CQUFvQjtDQUN2Qjs7QUFFRDtJQUNJLG1CQUFtQjtDQUN0Qjs7QUFFRDtJQUNJLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsZUFBZTtDQUNsQiIsImZpbGUiOiJhcHAvbW9kdWxlcy9hZGQtY2FyL2VkaXQtbW9kaWZpY2F0aW9uL2VkaXQtbW9kaWZpY2F0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJzZWxlY3Qge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLmZvcm0tZ3JvdXAge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG59XHJcblxyXG5zbWFsbCB7XHJcbiAgICBjb2xvcjogI2Q5NTM0ZjtcclxuICAgIG1hcmdpbi1ib3R0b206IDdweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/modules/add-car/edit-modification/edit-modification.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/modules/add-car/edit-modification/edit-modification.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Вывод флеш-сообщений -->\r\n<div class=\"alert alert-{{message.type}}\" *ngIf=\"message\">{{message.text}}</div>\r\n<form #form=\"ngForm\" novalidate>\r\n  <div class=\"form-group\">\r\n    <label>Марка</label>\r\n    <!-- Передача ID выбранной марки в компонент -->\r\n    <select (change)=\"passCarId($event)\" class=\"custom-select\" name=\"carItem\" ngModel required>\r\n      <option></option>\r\n      <option *ngFor=\"let carItem of markName\" [value]=\"carItem._id\">{{carItem.markName}}</option>\r\n    </select>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label>Модель</label>\r\n    <!-- Передача ID выбранной модели в компонент -->\r\n    <select (change)=\"passModelId($event)\" class=\"custom-select\" name=\"model\" ngModel required>\r\n      <option></option>\r\n      <option *ngFor=\"let model of modelName\" [value]=\"model._id\">{{model.modelsName}}</option>\r\n    </select>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label>Модификация</label>\r\n    <!-- Передача ID выбранной модификации в компонент -->\r\n    <select (change)=\"passModificationId($event)\" class=\"custom-select\" name=\"modification\" ngModel required>\r\n      <option></option>\r\n      <option *ngFor=\"let modification of modifications\" [value]=\"modification._id\">{{modification.modificationName}}</option>\r\n    </select>\r\n  </div>\r\n  <button class=\"btn btn-danger\" (click)=\"remove()\" [disabled]=\"!isConfirmed\">Удалить</button>\r\n  <!-- Блок добавления данных -->\r\n  <div class=\"form-group\">\r\n    <label>Внесите новое название модификации автомобиля</label>\r\n    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"modificationName\" name=\"modificationName\" required #name=\"ngModel\"\r\n      [class.is-invalid]=\"name.invalid && name.touched\">\r\n    <small *ngIf=\"name.invalid && name.touched\">Заполните форму</small>\r\n  </div>\r\n  <button class=\"btn btn-warning\" (click)=\"editModification()\" [disabled]=\"form.form.invalid\">Редактировать</button>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/modules/add-car/edit-modification/edit-modification.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/add-car/edit-modification/edit-modification.component.ts ***!
  \**********************************************************************************/
/*! exports provided: EditModificationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditModificationComponent", function() { return EditModificationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_services_flash_message_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/flash-message.service */ "./src/app/services/flash-message.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../services/api.service */ "./src/app/services/api.service.ts");




var EditModificationComponent = /** @class */ (function () {
    function EditModificationComponent(_apiService, _flashMessagesService) {
        this._apiService = _apiService;
        this._flashMessagesService = _flashMessagesService;
        this.markName = [];
        this.modelName = [];
        this.modifications = [];
        this.isConfirmed = false;
    }
    EditModificationComponent.prototype.ngOnInit = function () {
        // Получение списка машин при загрузке страницы
        this.getCars();
    };
    // Получение списка машин
    EditModificationComponent.prototype.getCars = function () {
        var _this = this;
        this._apiService.getCars()
            .subscribe(function (data) {
            _this.markName = data;
        }, function (error) {
            _this._flashMessagesService.showMessage(error).subscribe(function (data) { return _this.message = data; });
        });
    };
    // Получение Id выбранной машины. Получение списка моделей
    EditModificationComponent.prototype.passCarId = function (event) {
        var _this = this;
        this.carId = event.target.value;
        this._apiService.getModelName(this.carId)
            .subscribe(function (data) {
            _this.modelName = data;
        }, function (error) {
            _this._flashMessagesService.showMessage(error).subscribe(function (data) { return _this.message = data; });
        });
    };
    // Получение Id выбранной модели. Получение списка модификаций
    EditModificationComponent.prototype.passModelId = function (event) {
        var _this = this;
        this.modelId = event.target.value;
        this._apiService.getModificationName(this.carId, this.modelId)
            .subscribe(function (data) {
            _this.modifications = data;
        }, function (error) {
            _this._flashMessagesService.showMessage(error).subscribe(function (data) { return _this.message = data; });
        });
    };
    // Получение Id выбранной модификации.
    EditModificationComponent.prototype.passModificationId = function (event) {
        this.unitId = event.target.value;
        this.isConfirmed = true;
    };
    // Создать новый объект модификации, передать новое название модификации,
    //  отправить на сервер, очистить форму, вывести сообщение об успехе или неудаче
    EditModificationComponent.prototype.editModification = function () {
        var _this = this;
        var modification = {
            modificationName: this.modificationName
        };
        if (this.carId && this.modelId && this.unitId) {
            this._apiService.editModification(this.carId, this.modelId, this.unitId, modification)
                .subscribe(function (data) {
                _this._flashMessagesService.showMessage('Данные успешно обновлены', 'success', 3000).subscribe(function (msg) {
                    _this.message = msg;
                });
            }, function (error) {
                _this._flashMessagesService.showMessage(error).subscribe(function (data) { return _this.message = data; });
            });
            this.modificationName = '';
        }
        else {
            this._flashMessagesService.showMessage('Выберите данные автомобиля').subscribe(function (data) { return _this.message = data; });
        }
    };
    // Удаление выбранной модификации
    EditModificationComponent.prototype.remove = function () {
        var _this = this;
        if (this.carId && this.modelId && this.unitId) {
            this._apiService.removeModification(this.carId, this.modelId, this.unitId)
                .subscribe(function (data) {
                _this._flashMessagesService.showMessage('Данные успешно удалены', 'success', 3000).subscribe(function (msg) {
                    _this.message = msg;
                });
            }, function (error) {
                _this._flashMessagesService.showMessage(error).subscribe(function (data) { return _this.message = data; });
            });
        }
        else {
            this._flashMessagesService.showMessage('Выберите данные автомобиля').subscribe(function (data) { return _this.message = data; });
        }
    };
    EditModificationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-edit-modification',
            template: __webpack_require__(/*! ./edit-modification.component.html */ "./src/app/modules/add-car/edit-modification/edit-modification.component.html"),
            styles: [__webpack_require__(/*! ./edit-modification.component.css */ "./src/app/modules/add-car/edit-modification/edit-modification.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"],
            src_app_services_flash_message_service__WEBPACK_IMPORTED_MODULE_1__["FlashMessageService"]])
    ], EditModificationComponent);
    return EditModificationComponent;
}());



/***/ }),

/***/ "./src/app/modules/add-car/edit-unit/edit-unit.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/modules/add-car/edit-unit/edit-unit.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "select {\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.form-group {\r\n    margin-bottom: 5px;\r\n}\r\n\r\nsmall {\r\n    color: #d9534f;\r\n    margin-bottom: 7px;\r\n    display: block;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tb2R1bGVzL2FkZC1jYXIvZWRpdC11bml0L2VkaXQtdW5pdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksb0JBQW9CO0NBQ3ZCOztBQUVEO0lBQ0ksbUJBQW1CO0NBQ3RCOztBQUVEO0lBQ0ksZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixlQUFlO0NBQ2xCIiwiZmlsZSI6ImFwcC9tb2R1bGVzL2FkZC1jYXIvZWRpdC11bml0L2VkaXQtdW5pdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsic2VsZWN0IHtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi5mb3JtLWdyb3VwIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxufVxyXG5cclxuc21hbGwge1xyXG4gICAgY29sb3I6ICNkOTUzNGY7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA3cHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/modules/add-car/edit-unit/edit-unit.component.html":
/*!********************************************************************!*\
  !*** ./src/app/modules/add-car/edit-unit/edit-unit.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Вывод флеш-сообщений -->\r\n<div class=\"alert alert-{{message.type}}\" *ngIf=\"message\">{{message.text}}</div>\r\n<form #form=\"ngForm\" novalidate>\r\n  <div class=\"form-group\">\r\n    <label>Марка</label>\r\n    <!-- Передача ID выбранной марки в компонент -->\r\n    <select (change)=\"passCarId($event)\" class=\"custom-select\" name=\"carItem\" ngModel required>\r\n      <option></option>\r\n      <option *ngFor=\"let carItem of markName\" [value]=\"carItem._id\">{{carItem.markName}}</option>\r\n    </select>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label>Модель</label>\r\n    <!-- Передача ID выбранной модели в компонент -->\r\n    <select (change)=\"passModelId($event)\" class=\"custom-select\" name=\"model\" ngModel required>\r\n      <option></option>\r\n      <option *ngFor=\"let model of modelName\" [value]=\"model._id\">{{model.modelsName}}</option>\r\n    </select>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label>Модификация</label>\r\n    <!-- Передача ID выбранной модификации в компонент -->\r\n    <select (change)=\"passModificationId($event)\" class=\"custom-select\" name=\"modification\" ngModel required>\r\n      <option></option>\r\n      <option *ngFor=\"let modification of modifications\" [value]=\"modification._id\">{{modification.modificationName}}</option>\r\n    </select>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label>Агрегат</label>\r\n    <!-- Передача ID выбранного агрегата в компонент -->\r\n    <select (change)=\"passUnitId($event)\" class=\"custom-select\" name=\"unit\" ngModel required>\r\n      <option></option>\r\n      <option *ngFor=\"let unit of units\" [value]=\"unit._id\">{{unit.unitName}}</option>\r\n    </select>\r\n  </div>\r\n  <button class=\"btn btn-danger\" (click)=\"remove()\" [disabled]=\"!isConfirmed\">Удалить</button>\r\n  <!-- Блок добавления данных -->\r\n  <div class=\"form-group\">\r\n    <label>Внесите новое название агрегата автомобиля</label>\r\n    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"unitName\" name=\"unitName\" required #name=\"ngModel\"\r\n      [class.is-invalid]=\"name.invalid && name.touched\">\r\n    <small *ngIf=\"name.invalid && name.touched\">Заполните форму</small>\r\n  </div>\r\n  <button class=\"btn btn-warning\" (click)=\"editUnit()\" [disabled]=\"form.form.invalid\">Редактировать</button>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/modules/add-car/edit-unit/edit-unit.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/modules/add-car/edit-unit/edit-unit.component.ts ***!
  \******************************************************************/
/*! exports provided: EditUnitComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditUnitComponent", function() { return EditUnitComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_services_flash_message_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/flash-message.service */ "./src/app/services/flash-message.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../services/api.service */ "./src/app/services/api.service.ts");




var EditUnitComponent = /** @class */ (function () {
    function EditUnitComponent(_apiService, _flashMessagesService) {
        this._apiService = _apiService;
        this._flashMessagesService = _flashMessagesService;
        this.markName = [];
        this.modelName = [];
        this.modifications = [];
        this.units = [];
        this.isConfirmed = false;
    }
    EditUnitComponent.prototype.ngOnInit = function () {
        // Получение списка машин при загрузке страницы
        this.getCars();
    };
    // Получение списка машин
    EditUnitComponent.prototype.getCars = function () {
        var _this = this;
        this._apiService.getCars()
            .subscribe(function (data) {
            _this.markName = data;
        }, function (error) {
            _this._flashMessagesService.showMessage(error).subscribe(function (data) { return _this.message = data; });
        });
    };
    // Получение Id выбранной машины. Получение списка моделей
    EditUnitComponent.prototype.passCarId = function (event) {
        var _this = this;
        this.carId = event.target.value;
        this._apiService.getModelName(this.carId)
            .subscribe(function (data) {
            _this.modelName = data;
        }, function (error) {
            _this._flashMessagesService.showMessage(error).subscribe(function (data) { return _this.message = data; });
        });
    };
    // Получение Id выбранной модели. Получение списка модификаций
    EditUnitComponent.prototype.passModelId = function (event) {
        var _this = this;
        this.modelId = event.target.value;
        this._apiService.getModificationName(this.carId, this.modelId)
            .subscribe(function (data) {
            _this.modifications = data;
        }, function (error) {
            _this._flashMessagesService.showMessage(error).subscribe(function (data) { return _this.message = data; });
        });
    };
    // Получение Id выбранной модификации. Получение списка агрегатов
    EditUnitComponent.prototype.passModificationId = function (event) {
        var _this = this;
        this.unitId = event.target.value;
        this._apiService.getPartsList(this.carId, this.modelId, this.unitId)
            .subscribe(function (data) {
            _this.units = data;
        }, function (error) {
            _this._flashMessagesService.showMessage(error).subscribe(function (data) { return _this.message = data; });
        });
    };
    // Получение Id выбранного агрегата.
    EditUnitComponent.prototype.passUnitId = function (event) {
        this.detailId = event.target.value;
        this.isConfirmed = true;
    };
    // Создать новый объект агрегата, передать новое название агрегата,
    //  отправить на сервер, очистить форму, вывести сообщение об успехе или неудаче
    EditUnitComponent.prototype.editUnit = function () {
        var _this = this;
        var unit = {
            unitName: this.unitName
        };
        if (this.carId && this.modelId && this.unitId && this.detailId) {
            this._apiService.editUnit(this.carId, this.modelId, this.unitId, this.detailId, unit)
                .subscribe(function (data) {
                _this._flashMessagesService.showMessage('Данные успешно обновлены', 'success', 3000).subscribe(function (msg) {
                    _this.message = msg;
                });
            }, function (error) {
                _this._flashMessagesService.showMessage(error).subscribe(function (data) { return _this.message = data; });
            });
            this.unitName = '';
        }
        else {
            this._flashMessagesService.showMessage('Выберите данные автомобиля').subscribe(function (data) { return _this.message = data; });
        }
    };
    // Удаление выбраннго агрегата
    EditUnitComponent.prototype.remove = function () {
        var _this = this;
        if (this.carId && this.modelId && this.unitId && this.detailId) {
            this._apiService.removeUnit(this.carId, this.modelId, this.unitId, this.detailId)
                .subscribe(function (data) {
                _this._flashMessagesService.showMessage('Данные успешно удалены', 'success', 3000).subscribe(function (msg) {
                    _this.message = msg;
                });
            }, function (error) {
                _this._flashMessagesService.showMessage(error).subscribe(function (data) { return _this.message = data; });
            });
        }
        else {
            this._flashMessagesService.showMessage('Выберите данные автомобиля').subscribe(function (data) { return _this.message = data; });
        }
    };
    EditUnitComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-edit-unit',
            template: __webpack_require__(/*! ./edit-unit.component.html */ "./src/app/modules/add-car/edit-unit/edit-unit.component.html"),
            styles: [__webpack_require__(/*! ./edit-unit.component.css */ "./src/app/modules/add-car/edit-unit/edit-unit.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"],
            src_app_services_flash_message_service__WEBPACK_IMPORTED_MODULE_1__["FlashMessageService"]])
    ], EditUnitComponent);
    return EditUnitComponent;
}());



/***/ })

}]);
//# sourceMappingURL=modules-add-car-add-car-module.js.map