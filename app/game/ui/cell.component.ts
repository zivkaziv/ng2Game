/**
 * Created by ziv on 30/01/2017.
 */

import {Component, Input} from "@angular/core";
import {ICell} from "../logic/interface/cell.interface";
import {Cell} from "../logic/cell.class";

@Component({
  selector: 'cell',
  styles : [`
    .cell-container{
        border: 1px black solid;
        border-top: none;
        width: 50px;
        height: 50px;
    }
   
    .cell-container img{
        height: 45px;
        width: 45px;
    }
    
`],
  template: `
<div class="cell-container" [ngSwitch]="cell.state">
    <!--CLEAR-->
    <div class="clear" *ngSwitchCase="2"></div>
    <!--MINE-->
    <div class="mine" *ngSwitchCase="0">
          <img src="app/game/assets/mine.png"/>
    </div>
    <!--CURRENT-->
    <div class="current" *ngSwitchCase="3">
        <img src="app/game/assets/player.png"/>
    </div>
     <!--VISITED-->
    <div class="visited" *ngSwitchCase="1">
        <img src="app/game/assets/visited.png"/>
    </div>
  <!--{{cell.state}}-->
</div>
`})
export class CellComponent {
  @Input('cell') cell:Cell;
}
