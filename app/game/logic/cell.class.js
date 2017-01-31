"use strict";
var cellState_enum_1 = require("./cellState.enum");
/**
 * Created by ziv on 29/01/2017.
 */
var Cell = (function () {
    function Cell(y, x, state) {
        if (state === void 0) { state = cellState_enum_1.CellState.CLEAR; }
        this.y = y;
        this.x = x;
        this.state = state;
    }
    Cell.prototype.isValidState = function () {
        return this.state === cellState_enum_1.CellState.CLEAR || this.state === cellState_enum_1.CellState.CURRENT_LOCATION;
    };
    Cell.prototype.setMine = function () {
        this.state = cellState_enum_1.CellState.MINE;
    };
    Cell.prototype.setCurrent = function () {
        this.state = cellState_enum_1.CellState.CURRENT_LOCATION;
    };
    Cell.prototype.setVisit = function () {
        this.state = cellState_enum_1.CellState.VISITED;
    };
    return Cell;
}());
exports.Cell = Cell;
//# sourceMappingURL=cell.class.js.map