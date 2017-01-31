/**
 * Created by ziv on 30/01/2017.
 */

import {Component} from "@angular/core";
import {GameService} from "../services/game.service";

@Component({
  selector: 'board', 
  styles : [`
    .board-layout{
        border-top: 1px black solid;
        display: inline-block;
    }
    
    .row-layout{
        display: flex;
    }
    
`],
  template: `
<div>
    <div class="board-layout">
        <ng-container  *ngFor="let row of boardCells; let i = index">
          <div class="row-layout">
            <ng-container *ngFor="let cell of row; let j = index">
                <cell [cell]="cell"></cell>
            </ng-container>
          </div>
        </ng-container>
    </div>
</div>
`})
export class BoardComponent {
  constructor(private gameBl:GameService){}

  get boardCells(){
    return this.gameBl.board.getCells();
  }

}