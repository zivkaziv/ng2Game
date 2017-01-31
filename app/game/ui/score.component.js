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
var ScoreComponent = (function () {
    function ScoreComponent(gameBl) {
        this.gameBl = gameBl;
    }
    Object.defineProperty(ScoreComponent.prototype, "score", {
        get: function () {
            return this.gameBl.score;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ScoreComponent.prototype, "steps", {
        get: function () {
            return this.gameBl.stepsCounter;
        },
        enumerable: true,
        configurable: true
    });
    ScoreComponent = __decorate([
        core_1.Component({
            selector: 'score',
            styles: ["\n    div{\n        font-size: 18px;\n    }\n"],
            template: "\n<div>\n    <div class=\"steps-container\">\u05E2\u05E9\u05D9\u05EA\u05DD \u05DB\u05D1\u05E8 <b>{{steps}}</b> \u05E6\u05E2\u05D3\u05D9\u05DD \u05E0\u05DB\u05D5\u05E0\u05D9\u05DD</div>\n    <div class=\"score-container\">\u05D4\u05E8\u05D5\u05D5\u05D7\u05EA\u05DD \u05E2\u05D3 \u05DB\u05D4 <b>{{score}}</b> \u05E0\u05E7\u05D5\u05D3\u05D5\u05EA \u05D1\u05DE\u05D3\u05D3 \u05D0\u05DE\u05D5\u05DF \u05D4\u05E6\u05D9\u05D1\u05D5\u05E8</div>\n</div>\n" }), 
        __metadata('design:paramtypes', [game_service_1.GameService])
    ], ScoreComponent);
    return ScoreComponent;
}());
exports.ScoreComponent = ScoreComponent;
//# sourceMappingURL=score.component.js.map