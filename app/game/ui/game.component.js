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
var GameComponent = (function () {
    function GameComponent(gameBl) {
        this.gameBl = gameBl;
    }
    Object.defineProperty(GameComponent.prototype, "isEnded", {
        get: function () {
            return this.gameBl.isEnded;
        },
        enumerable: true,
        configurable: true
    });
    GameComponent.prototype.initNewGame = function () {
        this.gameBl.initNewGame();
    };
    GameComponent = __decorate([
        core_1.Component({
            selector: 'game',
            styles: ["\n    .game-layout{\n        margin-bottom: 50px;\n    }\n    .header{\n        text-align: center;\n        margin-bottom: 10px;\n    }\n    \n    .score-container{\n        text-align: center;\n    }\n    \n    .board-container{\n        text-align: center;\n    }\n    \n    .controls-container{\n        \n    }\n    \n    .footer-failure{\n        margin-top: 40px;\n    }\n    \n    .main-screen-layout{\n        display: flex;\n        flex-direction: row-reverse;\n        justify-content: space-around;\n        margin-top: 35px;\n    }\n    \n    .left-part-container{\n       display: flex;\n       flex-direction: column;\n         display: inline-flex;\n        flex-direction: column;\n        text-align: center;\n    }\n"],
            template: "\n<div class=\"game-layout\">\n  <div class=\"header\">\n    <h1>\u05D0\u05D9\u05D9\u05DC \u05D2\u05D5\u05DC\u05DF \u05E7\u05D5\u05E8\u05D0 \u05DC\u05DA</h1>\n    <div>\u05D9\u05DC\u05D3\u05D9\u05DD, \u05E2\u05D6\u05E8\u05D5 \u05DC\u05D0\u05D9\u05D9\u05DC \u05D2\u05D5\u05DC\u05DF \u05DC\u05D4\u05D9\u05DE\u05E0\u05E2 \u05DE\u05DC\u05E4\u05D2\u05D5\u05E9 \u05D9\u05DC\u05D3\u05D5\u05EA \u05D0\u05D5 \u05D0\u05EA \u05D0\u05D1\u05D0 \u05E9\u05DC\u05D5</div>\n    <div>.\u05E9\u05E0\u05D9\u05D4\u05DD \u05E2\u05DC\u05D5\u05DC\u05D9\u05DD \u05DC\u05D2\u05E8\u05D5\u05DD \u05DC\u05D5 \u05DC\u05D4\u05E4\u05E1\u05D9\u05E7 \u05DC\u05E9\u05D9\u05E8</div>\n  </div>\n  <div class=\"score-container\">\n    <score></score>\n  </div>\n  \n  <div class=\"main-screen-layout\">\n    <div class=\"board-container\">\n      <board></board>\n    </div>\n    \n    <div class=\"left-part-container\">\n      <div class=\"controls-container\">\n        <controls></controls>\n      </div>\n      <div class= \"footer-failure\"[hidden]=\"!isEnded\">\n            \u05D0\u05D5\u05D5\u05D5\u05E3, \u05D1\u05D0\u05E1\u05D4... \u05D6\u05D4 \u05DC\u05D0 \u05D4\u05E1\u05EA\u05D3\u05E8 \u05D4\u05E4\u05E2\u05DD\n            <button md-button (click)=\"initNewGame()\">\u05E0\u05E1\u05D4 \u05E9\u05D5\u05D1</button>\n      </div>\n      </div>\n    </div>\n</div>\n" }), 
        __metadata('design:paramtypes', [game_service_1.GameService])
    ], GameComponent);
    return GameComponent;
}());
exports.GameComponent = GameComponent;
//# sourceMappingURL=game.component.js.map