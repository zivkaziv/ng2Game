import {IBoard} from "./board.interface";
/**
 * Created by ziv on 29/01/2017.
 */

export interface IGame{
    score:number;
    stepsCounter:number;
    board: IBoard;
    initNewGame();
    moveUp();
    moveDown();
    moveLeft();
    moveRight();
}