/**
 * Created by ziv on 30/01/2017.
 */

import {Component} from "@angular/core";
import {GameService} from "../services/game.service";

@Component({
  selector: 'score',
  styles : [`
    div{
        font-size: 18px;
    }
`],
  template: `
<div>
    <div class="steps-container">עשיתם כבר <b>{{steps}}</b> צעדים נכונים</div>
    <div class="score-container">הרווחתם עד כה <b>{{score}}</b> נקודות במדד אמון הציבור</div>
</div>
`})
export class ScoreComponent {
  constructor(private gameBl:GameService){}

  get score():number{
    return this.gameBl.score;
  }

  get steps():number{
    return this.gameBl.stepsCounter;
  }

}