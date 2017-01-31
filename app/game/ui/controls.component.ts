/**
 * Created by ziv on 30/01/2017.
 */

import {Component} from "@angular/core";
import {GameService} from "../services/game.service";

@Component({
  selector: 'controls',
  styles : [`
    .controls-container{
        text-align: center;
    }
    
    .controls-container img:hover{
        cursor: pointer;
    }
`],
  template: `
<div class="controls-container">
    <div class="first-line">
        <img (click)="moveUp()" src="app/game/assets/arrow_up.png"/>
    </div>
    <div class="second-line">
            <img (click)="moveLeft()"  src="app/game/assets/arrow_left.png"/>
            <img (click)="moveDown()"  src="app/game/assets/arrow_down.png"/>
            <img (click)="moveRight()" src="app/game/assets/arrow_right.png"/>
    </div>
</div>
`})
export class ControlsComponent {
  constructor(private gameBl:GameService){}

  moveDown(){
    this.gameBl.moveDown();
  }

  moveUp(){
    this.gameBl.moveUp();
  }

  moveLeft(){
    this.gameBl.moveLeft();
  }

  moveRight(){
    this.gameBl.moveRight();
  }

  onKeyPressed(key){
    console.log(key);
  }



}