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
var core_1 = require('@angular/core');
var score_component_1 = require("./ui/score.component");
var board_component_1 = require("./ui/board.component");
var game_component_1 = require("./ui/game.component");
var controls_component_1 = require("./ui/controls.component");
var cell_component_1 = require("./ui/cell.component");
var common_1 = require("@angular/common");
var game_service_1 = require("./services/game.service");
var material_1 = require("@angular/material");
var GameModule = (function () {
    function GameModule() {
    }
    GameModule = __decorate([
        core_1.NgModule({
            declarations: [
                // components
                score_component_1.ScoreComponent,
                board_component_1.BoardComponent,
                game_component_1.GameComponent,
                controls_component_1.ControlsComponent,
                cell_component_1.CellComponent,
            ],
            providers: [
                game_service_1.GameService
            ],
            imports: [
                common_1.CommonModule,
                material_1.MaterialModule
            ],
            exports: [
                game_component_1.GameComponent
            ],
        }), 
        __metadata('design:paramtypes', [])
    ], GameModule);
    return GameModule;
}());
exports.GameModule = GameModule;
//# sourceMappingURL=game.module.js.map