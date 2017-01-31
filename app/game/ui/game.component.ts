/**
 * Created by ziv on 30/01/2017.
 */

import {Component} from "@angular/core";
import {GameService} from "../services/game.service";

@Component({
  selector: 'game', 
  styles : [`
    .game-layout{
        margin-bottom: 50px;
    }
    .header{
        text-align: center;
        margin-bottom: 10px;
    }
    
    .score-container{
        text-align: center;
    }
    
    .board-container{
        text-align: center;
    }
    
    .controls-container{
        
    }
    
    .footer-failure{
        margin-top: 40px;
    }
    
    .main-screen-layout{
        display: flex;
        flex-direction: row-reverse;
        justify-content: space-around;
        margin-top: 35px;
    }
    
    .left-part-container{
       display: flex;
       flex-direction: column;
         display: inline-flex;
        flex-direction: column;
        text-align: center;
    }
`],
  template: `
<div class="game-layout">
  <div class="header">
    <h1>אייל גולן קורא לך</h1>
    <div>ילדים, עזרו לאייל גולן להימנע מלפגוש ילדות או את אבא שלו</div>
    <div>.שניהם עלולים לגרום לו להפסיק לשיר</div>
  </div>
  <div class="score-container">
    <score></score>
  </div>
  
  <div class="main-screen-layout">
    <div class="board-container">
      <board></board>
    </div>
    
    <div class="left-part-container">
      <div class="controls-container">
        <controls></controls>
      </div>
      <div class= "footer-failure"[hidden]="!isEnded">
            אוווף, באסה... זה לא הסתדר הפעם
            <button md-button (click)="initNewGame()">נסה שוב</button>
      </div>
      </div>
    </div>
</div>
`})
export class GameComponent {
  constructor(private gameBl:GameService){}

  get isEnded(){
    return this.gameBl.isEnded;
  }

  initNewGame(){
    this.gameBl.initNewGame();
  }
}