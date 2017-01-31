/**
 * Created by ziv on 29/01/2017.
 */
"use strict";
(function (CellState) {
    CellState[CellState["MINE"] = 0] = "MINE";
    CellState[CellState["VISITED"] = 1] = "VISITED";
    CellState[CellState["CLEAR"] = 2] = "CLEAR";
    CellState[CellState["CURRENT_LOCATION"] = 3] = "CURRENT_LOCATION";
})(exports.CellState || (exports.CellState = {}));
var CellState = exports.CellState;
//# sourceMappingURL=cellState.enum.js.map