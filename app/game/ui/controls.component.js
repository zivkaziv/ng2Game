/**
 * Created by ziv on 30/01/2017.
 */
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
var game_service_1 = require("../services/game.service");
var ControlsComponent = (function () {
    function ControlsComponent(gameBl) {
        this.gameBl = gameBl;
    }
    ControlsComponent.prototype.moveDown = function () {
        this.gameBl.moveDown();
    };
    ControlsComponent.prototype.moveUp = function () {
        this.gameBl.moveUp();
    };
    ControlsComponent.prototype.moveLeft = function () {
        this.gameBl.moveLeft();
    };
    ControlsComponent.prototype.moveRight = function () {
        this.gameBl.moveRight();
    };
    ControlsComponent.prototype.onKeyPressed = function (key) {
        console.log(key);
    };
    ControlsComponent = __decorate([
        core_1.Component({
            selector: 'controls',
            styles: ["\n    .controls-container{\n        text-align: center;\n    }\n    \n    .controls-container img:hover{\n        cursor: pointer;\n    }\n"],
            template: "\n<div class=\"controls-container\">\n    <div class=\"first-line\">\n        <img (click)=\"moveUp()\" src=\"app/game/assets/arrow_up.png\"/>\n    </div>\n    <div class=\"second-line\">\n            <img (click)=\"moveLeft()\"  src=\"app/game/assets/arrow_left.png\"/>\n            <img (click)=\"moveDown()\"  src=\"app/game/assets/arrow_down.png\"/>\n            <img (click)=\"moveRight()\" src=\"app/game/assets/arrow_right.png\"/>\n    </div>\n</div>\n" }), 
        __metadata('design:paramtypes', [game_service_1.GameService])
    ], ControlsComponent);
    return ControlsComponent;
}());
exports.ControlsComponent = ControlsComponent;
//# sourceMappingURL=controls.component.js.map