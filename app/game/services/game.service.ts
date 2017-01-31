import {IGame} from "../logic/interface/game.interface";
import {IBoard} from "../logic/interface/board.interface";
import {Board} from "../logic/board.class";
import {Injectable} from "@angular/core";

/**
 * Created by ziv on 29/01/2017.
 */

@Injectable()
export class GameService implements IGame{
    score: number;
    stepsCounter: number;
    isEnded:boolean;
    board: IBoard;
    boardSize:number;
    numberOfMines:number;

    constructor(){
        this.initNewGame();
    }

    initNewGame(boardSize:number = 10,numberOfMines = 5) {
        this.boardSize = boardSize;
        this.numberOfMines = numberOfMines;
        this.board = new Board(this.boardSize,this.numberOfMines);
        this.score = 0;
        this.stepsCounter = 0;
        this.isEnded = false;
        this.board.initBoard();
    }

    moveUp() {
        if(this.canPlay()) {
            if (this.board.moveUp()) {
                this.handleValidMove();
            } else {
                this.handleInValidMove();
            }
        }
    }

    moveDown() {
        if(this.canPlay()) {
            if (this.board.moveDown()) {
                this.handleValidMove();
            } else {
                this.handleInValidMove();
            }
        }
    }

    moveLeft() {
        if(this.canPlay()) {
            if (this.board.moveLeft()) {
                this.handleValidMove();
            } else {
                this.handleInValidMove();
            }
        }
    }

    moveRight() {
        if(this.canPlay()) {
            if (this.board.moveRight()) {
                this.handleValidMove();
            } else {
                this.handleInValidMove();
            }
        }
    }

    handleValidMove(){
        this.score += 10;
        this.stepsCounter++;
    }

    handleInValidMove(){
        this.isEnded = true;
    }

    canPlay(){
        return !this.isEnded;
    }
}