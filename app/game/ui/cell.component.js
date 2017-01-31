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
var cell_class_1 = require("../logic/cell.class");
var CellComponent = (function () {
    function CellComponent() {
    }
    __decorate([
        core_1.Input('cell'), 
        __metadata('design:type', cell_class_1.Cell)
    ], CellComponent.prototype, "cell", void 0);
    CellComponent = __decorate([
        core_1.Component({
            selector: 'cell',
            styles: ["\n    .cell-container{\n        border: 1px black solid;\n        border-top: none;\n        width: 50px;\n        height: 50px;\n    }\n   \n    .cell-container img{\n        height: 45px;\n        width: 45px;\n    }\n    \n"],
            template: "\n<div class=\"cell-container\" [ngSwitch]=\"cell.state\">\n    <!--CLEAR-->\n    <div class=\"clear\" *ngSwitchCase=\"2\"></div>\n    <!--MINE-->\n    <div class=\"mine\" *ngSwitchCase=\"0\">\n          <img src=\"app/game/assets/mine.png\"/>\n    </div>\n    <!--CURRENT-->\n    <div class=\"current\" *ngSwitchCase=\"3\">\n        <img src=\"app/game/assets/player.png\"/>\n    </div>\n     <!--VISITED-->\n    <div class=\"visited\" *ngSwitchCase=\"1\">\n        <img src=\"app/game/assets/visited.png\"/>\n    </div>\n  <!--{{cell.state}}-->\n</div>\n" }), 
        __metadata('design:paramtypes', [])
    ], CellComponent);
    return CellComponent;
}());
exports.CellComponent = CellComponent;
//# sourceMappingURL=cell.component.js.map