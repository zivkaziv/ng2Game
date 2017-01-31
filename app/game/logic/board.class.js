"use strict";
var cell_class_1 = require("./cell.class");
/**
 * Created by ziv on 29/01/2017.
 */
var Board = (function () {
    function Board(boardSize, numberOfMines) {
        this.boardSize = boardSize;
        this.numberOfMines = numberOfMines;
        this.initBoard();
    }
    Board.prototype.initBoard = function () {
        this.cells = [];
        for (var rowsIndex = 0; rowsIndex < this.boardSize; rowsIndex++) {
            this.cells[rowsIndex] = [];
            for (var columnsIndex = 0; columnsIndex < this.boardSize; columnsIndex++) {
                this.cells[rowsIndex][columnsIndex] = new cell_class_1.Cell(rowsIndex, columnsIndex);
            }
        }
        this.setMines();
        this.setPlayer();
    };
    Board.prototype.setMines = function () {
        for (var mineNumber = 0; mineNumber < this.numberOfMines; mineNumber++) {
            //pick number between 0 to the size of the board
            var rowIndex = Math.floor(Math.random() * (this.boardSize - 1)) + 0;
            var columnIndex = Math.floor(Math.random() * (this.boardSize - 1)) + 0;
            this.cells[columnIndex][rowIndex].setMine();
        }
    };
    Board.prototype.setPlayer = function () {
        var middle = (this.boardSize / 2) - 1;
        this.cells[middle][middle].setCurrent();
        this.currentX = middle;
        this.currentY = middle;
        this.saveLocation();
    };
    Board.prototype.moveUp = function () {
        if (this.currentY > 0) {
            this.saveLocation();
            this.currentY--;
        }
        else {
            return false;
        }
        return this.isValidMove();
    };
    Board.prototype.moveDown = function () {
        if (this.currentY < this.boardSize - 1) {
            this.saveLocation();
            this.currentY++;
        }
        else {
            return false;
        }
        return this.isValidMove();
    };
    Board.prototype.moveLeft = function () {
        if (this.currentX > 0) {
            this.saveLocation();
            this.currentX--;
        }
        else {
            return false;
        }
        return this.isValidMove();
    };
    Board.prototype.moveRight = function () {
        if (this.currentX < this.boardSize - 1) {
            this.saveLocation();
            this.currentX++;
        }
        else {
            return false;
        }
        return this.isValidMove();
    };
    Board.prototype.isValidMove = function () {
        var isValid = true;
        if (!this.cells[this.currentY][this.currentX].isValidState()) {
            isValid = false;
        }
        if (isValid) {
            this.cells[this.prevLocationY][this.prevLocationX].setVisit();
            this.cells[this.currentY][this.currentX].setCurrent();
        }
        return isValid;
    };
    Board.prototype.getCells = function () {
        return this.cells;
    };
    Board.prototype.saveLocation = function () {
        this.prevLocationX = this.currentX;
        this.prevLocationY = this.currentY;
    };
    return Board;
}());
exports.Board = Board;
//# sourceMappingURL=board.class.js.map