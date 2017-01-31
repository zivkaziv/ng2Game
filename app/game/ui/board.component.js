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
var BoardComponent = (function () {
    function BoardComponent(gameBl) {
        this.gameBl = gameBl;
    }
    Object.defineProperty(BoardComponent.prototype, "boardCells", {
        get: function () {
            return this.gameBl.board.getCells();
        },
        enumerable: true,
        configurable: true
    });
    BoardComponent = __decorate([
        core_1.Component({
            selector: 'board',
            styles: ["\n    .board-layout{\n        border-top: 1px black solid;\n        display: inline-block;\n    }\n    \n    .row-layout{\n        display: flex;\n    }\n    \n"],
            template: "\n<div>\n    <div class=\"board-layout\">\n        <ng-container  *ngFor=\"let row of boardCells; let i = index\">\n          <div class=\"row-layout\">\n            <ng-container *ngFor=\"let cell of row; let j = index\">\n                <cell [cell]=\"cell\"></cell>\n            </ng-container>\n          </div>\n        </ng-container>\n    </div>\n</div>\n" }), 
        __metadata('design:paramtypes', [game_service_1.GameService])
    ], BoardComponent);
    return BoardComponent;
}());
exports.BoardComponent = BoardComponent;
//# sourceMappingURL=board.component.js.map