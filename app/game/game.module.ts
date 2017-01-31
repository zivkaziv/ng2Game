import { NgModule } from '@angular/core';
import {ScoreComponent} from "./ui/score.component";
import {BoardComponent} from "./ui/board.component";
import {GameComponent} from "./ui/game.component";
import {ControlsComponent} from "./ui/controls.component";
import {CellComponent} from "./ui/cell.component";
import {CommonModule} from "@angular/common";
import {GameService} from "./services/game.service";
import {MaterialModule} from "@angular/material";


@NgModule({
    declarations: [
        // components
        ScoreComponent,
        BoardComponent,
        GameComponent,
        ControlsComponent,
        CellComponent,
    ],
    providers: [
        GameService
    ],
    imports: [
        CommonModule,
        MaterialModule
    ],
    exports: [
        GameComponent
    ],


})
export class GameModule { }
