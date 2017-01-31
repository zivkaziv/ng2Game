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
var board_class_1 = require("../logic/board.class");
var core_1 = require("@angular/core");
/**
 * Created by ziv on 29/01/2017.
 */
var GameService = (function () {
    function GameService() {
        this.initNewGame();
    }
    GameService.prototype.initNewGame = function (boardSize, numberOfMines) {
        if (boardSize === void 0) { boardSize = 10; }
        if (numberOfMines === void 0) { numberOfMines = 5; }
        this.boardSize = boardSize;
        this.numberOfMines = numberOfMines;
        this.board = new board_class_1.Board(this.boardSize, this.numberOfMines);
        this.score = 0;
        this.stepsCounter = 0;
        this.isEnded = false;
        this.board.initBoard();
    };
    GameService.prototype.moveUp = function () {
        if (this.canPlay()) {
            if (this.board.moveUp()) {
                this.handleValidMove();
            }
            else {
                this.handleInValidMove();
            }
        }
    };
    GameService.prototype.moveDown = function () {
        if (this.canPlay()) {
            if (this.board.moveDown()) {
                this.handleValidMove();
            }
            else {
                this.handleInValidMove();
            }
        }
    };
    GameService.prototype.moveLeft = function () {
        if (this.canPlay()) {
            if (this.board.moveLeft()) {
                this.handleValidMove();
            }
            else {
                this.handleInValidMove();
            }
        }
    };
    GameService.prototype.moveRight = function () {
        if (this.canPlay()) {
            if (this.board.moveRight()) {
                this.handleValidMove();
            }
            else {
                this.handleInValidMove();
            }
        }
    };
    GameService.prototype.handleValidMove = function () {
        this.score += 10;
        this.stepsCounter++;
    };
    GameService.prototype.handleInValidMove = function () {
        this.isEnded = true;
    };
    GameService.prototype.canPlay = function () {
        return !this.isEnded;
    };
    GameService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], GameService);
    return GameService;
}());
exports.GameService = GameService;
//# sourceMappingURL=game.service.js.map