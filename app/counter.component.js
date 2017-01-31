"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var CounterComponent = (function () {
    function CounterComponent() {
        var _this = this;
        this.value = 0;
        this.on10 = new core_1.EventEmitter();
        setInterval(function (x) {
            _this.value++;
        }, 1000);
    }
    Object.defineProperty(CounterComponent.prototype, "border", {
        get: function () {
            return this.value / 10 + "px solid red";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CounterComponent.prototype, "init", {
        set: function (val) {
            this.value = val.val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CounterComponent.prototype, "step", {
        get: function () { return this._step; },
        set: function (value) { this._step = value; },
        enumerable: true,
        configurable: true
    });
    CounterComponent.prototype.up = function () {
        this.value += this.step;
        if (this.value > 110) {
            this.on10.emit(this.value);
        }
    };
    CounterComponent.prototype.down = function () { };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], CounterComponent.prototype, "on10", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], CounterComponent.prototype, "todos", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], CounterComponent.prototype, "init", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], CounterComponent.prototype, "step", null);
    CounterComponent = __decorate([
        core_1.Component({
            selector: 'ngCounter',
            styles: ["\n        .test{\n            background-color: yellow;\n        }\n    "],
            template: "\n<div class=\"aa\" [class.test]=\"value % 2 === 0\">\n    <button (click)=\"down()\">Down</button>\n    <span [style.border]=\"border\">{{value}}</span>\n    <button (click)=\"up()\">Up</button>\n</div>\n" }), 
        __metadata('design:paramtypes', [])
    ], CounterComponent);
    return CounterComponent;
}());
exports.CounterComponent = CounterComponent;
//# sourceMappingURL=counter.component.js.map