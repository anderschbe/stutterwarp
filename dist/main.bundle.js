webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-data class=\"row\"></app-data>\r\n<app-visualization class=\"column text-center\"></app-visualization>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "app-data {\n  padding-left: 2rem;\n  padding-right: 2rem; }\n\napp-visualization {\n  padding-left: 2rem;\n  padding-right: 2rem; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'stutterwarp calculator';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_flex_layout__ = __webpack_require__("../../../flex-layout/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__data_center_center_component__ = __webpack_require__("../../../../../src/app/data/center/center.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__data_data_component__ = __webpack_require__("../../../../../src/app/data/data.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__data_start_start_component__ = __webpack_require__("../../../../../src/app/data/start/start.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__data_stop_stop_component__ = __webpack_require__("../../../../../src/app/data/stop/stop.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__stellarbodies_details_stellarbody_detail_component__ = __webpack_require__("../../../../../src/app/stellarbodies/details/stellarbody-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__stellarbodies_stellarbodies_component__ = __webpack_require__("../../../../../src/app/stellarbodies/stellarbodies.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__stellarbodies_utils_stellarbody_service__ = __webpack_require__("../../../../../src/app/stellarbodies/utils/stellarbody.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__visualization_visualization_component__ = __webpack_require__("../../../../../src/app/visualization/visualization.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__data_center_center_component__["a" /* CenterComponent */],
            __WEBPACK_IMPORTED_MODULE_7__data_data_component__["a" /* DataComponent */],
            __WEBPACK_IMPORTED_MODULE_8__data_start_start_component__["a" /* StartComponent */],
            __WEBPACK_IMPORTED_MODULE_11__stellarbodies_stellarbodies_component__["a" /* StellarBodiesComponent */],
            __WEBPACK_IMPORTED_MODULE_10__stellarbodies_details_stellarbody_detail_component__["a" /* StellarBodyDetailComponent */],
            __WEBPACK_IMPORTED_MODULE_9__data_stop_stop_component__["a" /* StopComponent */],
            __WEBPACK_IMPORTED_MODULE_13__visualization_visualization_component__["a" /* VisualizationComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_flex_layout__["a" /* FlexLayoutModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot()
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_12__stellarbodies_utils_stellarbody_service__["a" /* StellarBodyService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/data/center/center.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>{{title}}</h1>\r\n  <label for=\"distance\">Distance (in m)</label>\r\n  <input type=\"text\" id=\"distance\" [(ngModel)]=\"distance\" (keyup.enter)=\"onEnter()\" required> \r\n<button type=\"button\" class=\"btn btn-success\">>></button>\r\n<button type=\"button\" class=\"btn btn-info\">></button>\r\n<button type=\"button\" class=\"btn btn-danger\">x</button>"

/***/ }),

/***/ "../../../../../src/app/data/center/center.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CenterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CenterComponent = (function () {
    function CenterComponent() {
        this.eventDistance = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* EventEmitter */]();
        this.title = 'Stutterwarp Calculator';
    }
    CenterComponent.prototype.onEnter = function () {
        this.eventDistance.next(Number(this.distance));
    };
    return CenterComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* EventEmitter */]) === "function" && _a || Object)
], CenterComponent.prototype, "eventDistance", void 0);
CenterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Component */])({
        selector: 'app-center',
        template: __webpack_require__("../../../../../src/app/data/center/center.component.html"),
    })
], CenterComponent);

var _a;
//# sourceMappingURL=center.component.js.map

/***/ }),

/***/ "../../../../../src/app/data/data.component.html":
/***/ (function(module, exports) {

module.exports = "<app-start class=\"col-2\"></app-start>\r\n<app-center class=\"col text-center\" (eventDistance)=\"receiveDistance($event)\"></app-center>\r\n<app-stop class=\"col-2\"></app-stop>\r\n"

/***/ }),

/***/ "../../../../../src/app/data/data.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/data/data.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__stellarbodies_utils_stellarbody_service__ = __webpack_require__("../../../../../src/app/stellarbodies/utils/stellarbody.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DataComponent = (function () {
    function DataComponent(stellarBodyService) {
        this.stellarBodyService = stellarBodyService;
    }
    DataComponent.prototype.receiveDistance = function (distance) {
        this.stellarBodyService.sendDistance(distance);
    };
    return DataComponent;
}());
DataComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Component */])({
        selector: 'app-data',
        template: __webpack_require__("../../../../../src/app/data/data.component.html"),
        styles: [__webpack_require__("../../../../../src/app/data/data.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__stellarbodies_utils_stellarbody_service__["a" /* StellarBodyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__stellarbodies_utils_stellarbody_service__["a" /* StellarBodyService */]) === "function" && _a || Object])
], DataComponent);

var _a;
//# sourceMappingURL=data.component.js.map

/***/ }),

/***/ "../../../../../src/app/data/start/start.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <app-stellarbodies class=\"row\" [title]=\"title\" (eventStellarBody)=\"receiveStellarBody($event)\" (eventOrbit)=\"receiveOrbit($event)\"></app-stellarbodies>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/data/start/start.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__stellarbodies_utils_stellarbody_service__ = __webpack_require__("../../../../../src/app/stellarbodies/utils/stellarbody.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StartComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StartComponent = (function () {
    function StartComponent(stellarBodyService) {
        this.stellarBodyService = stellarBodyService;
        this.title = 'start';
    }
    StartComponent.prototype.receiveStellarBody = function (stellarBody) {
        this.stellarBodyService.sendStart(stellarBody);
    };
    StartComponent.prototype.receiveOrbit = function (orbit) {
        this.stellarBodyService.sendStartOrbit(orbit);
    };
    return StartComponent;
}());
StartComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Component */])({
        selector: 'app-start',
        template: __webpack_require__("../../../../../src/app/data/start/start.component.html"),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__stellarbodies_utils_stellarbody_service__["a" /* StellarBodyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__stellarbodies_utils_stellarbody_service__["a" /* StellarBodyService */]) === "function" && _a || Object])
], StartComponent);

var _a;
//# sourceMappingURL=start.component.js.map

/***/ }),

/***/ "../../../../../src/app/data/stop/stop.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <app-stellarbodies [title]=\"title\" (eventStellarBody)=\"receiveStellarBody($event)\" (eventOrbit)=\"receiveOrbit($event)\"></app-stellarbodies>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/data/stop/stop.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__stellarbodies_utils_stellarbody_service__ = __webpack_require__("../../../../../src/app/stellarbodies/utils/stellarbody.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StopComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StopComponent = (function () {
    function StopComponent(stellarBodyService) {
        this.stellarBodyService = stellarBodyService;
        this.title = 'stop';
    }
    StopComponent.prototype.receiveStellarBody = function (stellarBody) {
        this.stellarBodyService.sendStop(stellarBody);
    };
    StopComponent.prototype.receiveOrbit = function (orbit) {
        this.stellarBodyService.sendStopOrbit(orbit);
    };
    return StopComponent;
}());
StopComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Component */])({
        selector: 'app-stop',
        template: __webpack_require__("../../../../../src/app/data/stop/stop.component.html"),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__stellarbodies_utils_stellarbody_service__["a" /* StellarBodyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__stellarbodies_utils_stellarbody_service__["a" /* StellarBodyService */]) === "function" && _a || Object])
], StopComponent);

var _a;
//# sourceMappingURL=stop.component.js.map

/***/ }),

/***/ "../../../../../src/app/stellarbodies/details/stellarbody-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"stellarBody\">\r\n  <div><label>mass: </label>{{stellarBody.mass.toPrecision(3)}} kg</div>\r\n  <div><label>parent: </label>{{ParentName}}</div>\r\n  <div><label>parentDistance: </label>{{stellarBody.parentDistance.toPrecision(3)}} m</div>\r\n  <div><label>radius: </label>{{stellarBody.radius.toPrecision(3)}} m</div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/stellarbodies/details/stellarbody-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_stellarbody__ = __webpack_require__("../../../../../src/app/stellarbodies/utils/stellarbody.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_stellarbody___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__utils_stellarbody__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StellarBodyDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StellarBodyDetailComponent = (function () {
    function StellarBodyDetailComponent() {
    }
    return StellarBodyDetailComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__utils_stellarbody__["StellarBody"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__utils_stellarbody__["StellarBody"]) === "function" && _a || Object)
], StellarBodyDetailComponent.prototype, "stellarBody", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", String)
], StellarBodyDetailComponent.prototype, "ParentName", void 0);
StellarBodyDetailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Component */])({
        selector: 'app-stellarbody-detail',
        template: __webpack_require__("../../../../../src/app/stellarbodies/details/stellarbody-detail.component.html"),
    })
], StellarBodyDetailComponent);

var _a;
//# sourceMappingURL=stellarbody-detail.component.js.map

/***/ }),

/***/ "../../../../../src/app/stellarbodies/stellarbodies.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"form-control\">\r\n  <label for=\"stellarBody\">StellarBody</label> \r\n  <input id=\"typeahead-basic\" type=\"text\" [(ngModel)]=\"model\" [ngbTypeahead]=\"searchText\" (selectItem)=\"selectStellarBody($event)\"/>\r\n  <label for=\"orbit\">Orbit (in m)</label>\r\n  <input type=\"text\" id=\"orbit\" [(ngModel)]=\"orbit\" (keyup.enter)=\"onEnter()\" required> \r\n</div>\r\n<app-stellarbody-detail *ngIf=\"selectedStellarBody\" [stellarBody]=\"selectedStellarBody\" [ParentName]=\"selectedStellarBodyParentName\"></app-stellarbody-detail>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/stellarbodies/stellarbodies.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/stellarbodies/stellarbodies.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_stellarbody_service__ = __webpack_require__("../../../../../src/app/stellarbodies/utils/stellarbody.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StellarBodiesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


var StellarBodiesComponent = (function () {
    function StellarBodiesComponent(stellarBodyService) {
        var _this = this;
        this.stellarBodyService = stellarBodyService;
        this.eventStellarBody = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* EventEmitter */]();
        this.eventOrbit = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* EventEmitter */]();
        this.searchText = function (text$) {
            return text$
                .debounceTime(100)
                .distinctUntilChanged()
                .map(function (term) { return term.length < 2 ? []
                : _this.stellarBodies.map(function (v) { return v.name; }).filter(function (v) { return v.toLowerCase().indexOf(term.toLowerCase()) > -1; }).slice(0, 10); });
        };
    }
    StellarBodiesComponent.prototype.getStellarBodies = function () {
        var _this = this;
        this.stellarBodyService.getStellarBodies().then(function (obj) { return _this.stellarBodies = obj; });
    };
    StellarBodiesComponent.prototype.selectStellarBody = function (event) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.stellarBodyService.getStellarBodyByName(event.item)];
                    case 1:
                        _a.selectedStellarBody = _c.sent();
                        this.eventStellarBody.next(this.selectedStellarBody);
                        _b = this;
                        return [4 /*yield*/, this.stellarBodyService.getStellarBodyById(this.selectedStellarBody.parent)];
                    case 2:
                        _b.selectedStellarBodyParentName = (_c.sent()).name;
                        return [2 /*return*/];
                }
            });
        });
    };
    StellarBodiesComponent.prototype.onEnter = function () {
        this.eventOrbit.next(Number(this.orbit));
    };
    StellarBodiesComponent.prototype.ngOnInit = function () {
        this.getStellarBodies();
    };
    return StellarBodiesComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* EventEmitter */]) === "function" && _a || Object)
], StellarBodiesComponent.prototype, "eventStellarBody", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Output */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* EventEmitter */]) === "function" && _b || Object)
], StellarBodiesComponent.prototype, "eventOrbit", void 0);
StellarBodiesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Component */])({
        selector: 'app-stellarbodies',
        template: __webpack_require__("../../../../../src/app/stellarbodies/stellarbodies.component.html"),
        styles: [__webpack_require__("../../../../../src/app/stellarbodies/stellarbodies.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__utils_stellarbody_service__["a" /* StellarBodyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__utils_stellarbody_service__["a" /* StellarBodyService */]) === "function" && _c || Object])
], StellarBodiesComponent);

var _a, _b, _c;
//# sourceMappingURL=stellarbodies.component.js.map

/***/ }),

/***/ "../../../../../src/app/stellarbodies/utils/gravector.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Gravector; });
var Gravector = (function () {
    function Gravector(id, distance, grav) {
        this.id = id;
        this.distance = distance;
        this.grav = grav;
    }
    return Gravector;
}());

//# sourceMappingURL=gravector.js.map

/***/ }),

/***/ "../../../../../src/app/stellarbodies/utils/jump.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Jump; });
var Jump = (function () {
    function Jump(gravector, range, efficiency) {
        this.gravector = gravector;
        this.range = range;
        this.efficiency = efficiency;
    }
    return Jump;
}());

//# sourceMappingURL=jump.js.map

/***/ }),

/***/ "../../../../../src/app/stellarbodies/utils/mock-stellarbodies.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return STELLAR_BODIES; });
var STELLAR_BODIES = [
    { id: 0, name: '42', mass: 3E+52, parent: 0, parentDistance: 4.4E+26, radius: 4.4E+26 },
    { id: 1, name: 'Milky Way', mass: 1E+42, parent: 0, parentDistance: 4.4E+26, radius: 1.5E+11 },
    { id: 2, name: 'Sol', mass: 2E+30, parent: 1, parentDistance: 2.5E+20, radius: 7E+8 },
    { id: 3, name: 'Terra', mass: 5.974E+24, parent: 2, parentDistance: 1.496E+11, radius: 6.374E+6 },
    { id: 4, name: 'Luna', mass: 7E+22, parent: 3, parentDistance: 3.844E+8, radius: 1.738E+6 },
    { id: 5, name: 'Mars', mass: 6E+23, parent: 2, parentDistance: 2.28E+11, radius: 3.386E+6 },
    { id: 6, name: 'Ceres', mass: 9.393E+20, parent: 2, parentDistance: 4.1394E+11, radius: 4.64E+5 },
    { id: 7, name: 'Pallas', mass: 2.34E+20, parent: 2, parentDistance: 4.1595E+11, radius: 2.28E+5 },
    { id: 8, name: 'Allotrope', mass: 5E+14, parent: 2, parentDistance: 6E+12, radius: 2E+3 },
    { id: 9, name: 'Deep Space', mass: 10, parent: 2, parentDistance: (1E+17), radius: 1 }
];
//# sourceMappingURL=mock-stellarbodies.js.map

/***/ }),

/***/ "../../../../../src/app/stellarbodies/utils/stellarbody.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mock_stellarbodies__ = __webpack_require__("../../../../../src/app/stellarbodies/utils/mock-stellarbodies.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StellarBodyService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var StellarBodyService = (function () {
    function StellarBodyService() {
        this.start = new __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__["Subject"]();
        this.startOrbit = new __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__["Subject"]();
        this.stop = new __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__["Subject"]();
        this.stopOrbit = new __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__["Subject"]();
        this.distance = new __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__["Subject"]();
    }
    StellarBodyService.prototype.getStellarBodies = function () {
        return Promise.resolve(__WEBPACK_IMPORTED_MODULE_1__mock_stellarbodies__["a" /* STELLAR_BODIES */]);
    };
    StellarBodyService.prototype.getStellarBodyById = function (sid) {
        return Promise.resolve(__WEBPACK_IMPORTED_MODULE_1__mock_stellarbodies__["a" /* STELLAR_BODIES */].find(function (myObj) { return myObj.id === sid; }));
    };
    StellarBodyService.prototype.getStellarBodyByName = function (name) {
        return Promise.resolve(__WEBPACK_IMPORTED_MODULE_1__mock_stellarbodies__["a" /* STELLAR_BODIES */].find(function (myObj) { return myObj.name === name; }));
    };
    StellarBodyService.prototype.sendStart = function (stellarBody) {
        this.start.next(stellarBody);
    };
    StellarBodyService.prototype.getStart = function () {
        return this.start.asObservable();
    };
    StellarBodyService.prototype.sendStartOrbit = function (orbit) {
        this.startOrbit.next(orbit);
    };
    StellarBodyService.prototype.getStartOrbit = function () {
        return this.startOrbit.asObservable();
    };
    StellarBodyService.prototype.sendStop = function (stellarBody) {
        this.stop.next(stellarBody);
    };
    StellarBodyService.prototype.getStop = function () {
        return this.stop.asObservable();
    };
    StellarBodyService.prototype.sendStopOrbit = function (orbit) {
        this.stopOrbit.next(orbit);
    };
    StellarBodyService.prototype.getStopOrbit = function () {
        return this.stopOrbit.asObservable();
    };
    StellarBodyService.prototype.sendDistance = function (distance) {
        this.distance.next(distance);
    };
    StellarBodyService.prototype.getDistance = function () {
        return this.distance.asObservable();
    };
    return StellarBodyService;
}());
StellarBodyService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["c" /* Injectable */])()
], StellarBodyService);

//# sourceMappingURL=stellarbody.service.js.map

/***/ }),

/***/ "../../../../../src/app/stellarbodies/utils/stellarbody.ts":
/***/ (function(module, exports) {

//# sourceMappingURL=stellarbody.js.map

/***/ }),

/***/ "../../../../../src/app/visualization/visualization.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>Distance {{start.name}} (Orbit: {{startOrbit.toPrecision(3)}}) to {{stop.name}}(Orbit: {{stopOrbit.toPrecision(3)}}): {{distanceStartStop.toPrecision(3)}} m</h3>\r\n<div *ngIf=\"grav\">{{grav.toPrecision(3)}} m/s²\r\n    <li *ngFor=\"let gravector of gravectors\">\r\n        <b> {{gravector.grav.toPrecision(3)}} m/s² </b>           \r\n    </li>\r\n <li *ngFor=\"let jump of jumps\">\r\n    <b> {{jumps.indexOf(jump)}}: {{jump.range}} m</b>      \r\n</li> "

/***/ }),

/***/ "../../../../../src/app/visualization/visualization.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/visualization/visualization.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__stellarbodies_utils_gravector__ = __webpack_require__("../../../../../src/app/stellarbodies/utils/gravector.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__stellarbodies_utils_stellarbody_service__ = __webpack_require__("../../../../../src/app/stellarbodies/utils/stellarbody.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__stellarbodies_utils_jump__ = __webpack_require__("../../../../../src/app/stellarbodies/utils/jump.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VisualizationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var VisualizationComponent = (function () {
    function VisualizationComponent(stellarBodyService) {
        var _this = this;
        this.stellarBodyService = stellarBodyService;
        this.title = 'Stutterwarp Calculator';
        this.jumps = [];
        this.initiate = false;
        this.startSubscription = this.stellarBodyService.getStart().subscribe(function (obj) {
            _this.start = obj;
            if (_this.stop !== undefined) {
                _this.initData();
            }
        });
        this.stopSubscription = this.stellarBodyService.getStop().subscribe(function (obj) {
            _this.stop = obj;
            if (_this.start !== undefined) {
                _this.initData();
            }
        });
        this.startOrbitSubscription = this.stellarBodyService.getStartOrbit().subscribe(function (obj) {
            _this.startOrbit = obj;
            if (_this.stop !== undefined && _this.start !== undefined) {
                _this.initData();
            }
        });
        this.stopOrbitSubscription = this.stellarBodyService.getStopOrbit().subscribe(function (obj) {
            _this.stopOrbit = obj;
            if (_this.stop !== undefined && _this.start !== undefined) {
                _this.initData();
            }
        });
        this.distanceSubscription = this.stellarBodyService.getDistance().subscribe(function (obj) {
            _this.distanceStartStop = obj;
            _this.initData();
        });
    }
    VisualizationComponent.prototype.ngOnDestroy = function () {
        this.startSubscription.unsubscribe();
        this.startSubscription.unsubscribe();
        this.startOrbitSubscription.unsubscribe();
        this.stopOrbitSubscription.unsubscribe();
        this.distanceSubscription.unsubscribe();
    };
    VisualizationComponent.prototype.initData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var stellarBody, distance, tempDistance;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.startOrbit = (this.startOrbit === undefined) ? 0 : this.startOrbit;
                        this.stopOrbit = (this.stopOrbit === undefined) ? 0 : this.stopOrbit;
                        this.distanceStartStop = (this.distanceStartStop === undefined) ? 1E+17 : this.distanceStartStop;
                        this.gravectors = [];
                        this.jumps = [];
                        stellarBody = this.start;
                        distance = stellarBody.radius + this.startOrbit;
                        _a.label = 1;
                    case 1:
                        if (!(stellarBody.id !== 0)) return [3 /*break*/, 3];
                        tempDistance = stellarBody.parentDistance;
                        return [4 /*yield*/, this.calcGravector(stellarBody, distance)];
                    case 2:
                        stellarBody = _a.sent();
                        distance = tempDistance;
                        return [3 /*break*/, 1];
                    case 3: return [4 /*yield*/, this.calcGravector(stellarBody, distance)];
                    case 4:
                        _a.sent(); // Universe
                        return [4 /*yield*/, this.calcGravector(this.stop, this.distanceStartStop)];
                    case 5:
                        _a.sent(); // stop.stellarBody
                        this.grav = this.maxGrav(this.gravectors);
                        this.range = this.calcJump(this.gravectors, 1);
                        return [2 /*return*/];
                }
            });
        });
    };
    VisualizationComponent.prototype.maxGrav = function (arrGrav) {
        return this.gravectors.sort(function (a, b) { return (a.grav < b.grav) ? 1 : -1; })[0].grav;
    };
    VisualizationComponent.prototype.calcGravector = function (stellarBody, distance) {
        this.gravectors.push(new __WEBPACK_IMPORTED_MODULE_2__stellarbodies_utils_gravector__["a" /* Gravector */](stellarBody.id, stellarBody.radius, __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].conG * stellarBody.mass / Math.pow(distance, 2)));
        return this.stellarBodyService.getStellarBodyById(stellarBody.parent);
    };
    VisualizationComponent.prototype.calcJump = function (gravector, efficiency) {
        var result = new __WEBPACK_IMPORTED_MODULE_4__stellarbodies_utils_jump__["a" /* Jump */](gravector, efficiency / Math.pow(this.maxGrav(gravector), 0.5), efficiency);
        this.jumps.push(result);
        return result.range;
    };
    VisualizationComponent.prototype.continuousJump = function () {
        while (this.currentDistance > 0) {
        }
    };
    return VisualizationComponent;
}());
VisualizationComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Component */])({
        selector: 'app-visualization',
        template: __webpack_require__("../../../../../src/app/visualization/visualization.component.html"),
        styles: [__webpack_require__("../../../../../src/app/visualization/visualization.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__stellarbodies_utils_stellarbody_service__["a" /* StellarBodyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__stellarbodies_utils_stellarbody_service__["a" /* StellarBodyService */]) === "function" && _a || Object])
], VisualizationComponent);

var _a;
//# sourceMappingURL=visualization.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false,
    conG: 6.67408E-11,
    conC: 299792458,
    conL: 1.61622938E-35
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map