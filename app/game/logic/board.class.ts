import {IBoard} from "./interface/board.interface";
import {ICell} from "./interface/cell.interface";
import {Cell} from "./cell.class";
/**
 * Created by ziv on 29/01/2017.
 */

export class Board implements IBoard{
    cells:ICell[][];
    currentX:number;
    currentY:number;
    prevLocationX:number;
    prevLocationY:number;

    constructor(public boardSize:number,public numberOfMines:number){
        this.initBoard();
    }

    initBoard() {
        this.cells = [];
        for(let rowsIndex = 0; rowsIndex < this.boardSize; rowsIndex++){
            this.cells[rowsIndex] = [];
            for(let columnsIndex = 0; columnsIndex < this.boardSize; columnsIndex++){
                this.cells[rowsIndex][columnsIndex] = new Cell(rowsIndex,columnsIndex);
            }
        }
        this.setMines();
        this.setPlayer();
    }

    setMines(){
        for(let mineNumber = 0; mineNumber<this.numberOfMines;mineNumber++ ){
            //pick number between 0 to the size of the board
            let rowIndex = Math.floor(Math.random() * (this.boardSize-1)) + 0;
            let columnIndex = Math.floor(Math.random() * (this.boardSize-1)) + 0;
            this.cells[columnIndex][rowIndex].setMine();
        }
    }

    setPlayer(){
        var middle = (this.boardSize/2) -1;
        this.cells[middle][middle].setCurrent();
        this.currentX = middle;
        this.currentY = middle;
        this.saveLocation();
    }

    moveUp(): boolean {
        if(this.currentY > 0){
            this.saveLocation();
            this.currentY--;
        }else{
            return false;
        }
        return this.isValidMove();
    }

    moveDown(): boolean {
        if(this.currentY < this.boardSize-1 ){
            this.saveLocation();
            this.currentY++;
        }else{
            return false;
        }
        return this.isValidMove();
    }

    moveLeft(): boolean {
        if(this.currentX > 0){
            this.saveLocation();
            this.currentX--;
        }else{
            return false;
        }
        return this.isValidMove();
    }

    moveRight(): boolean {
        if(this.currentX < this.boardSize-1){
            this.saveLocation();
            this.currentX++;
        }else{
            return false;
        }
        return this.isValidMove();
    }

    isValidMove(): boolean {
        let isValid = true;
        if(!this.cells[this.currentY][this.currentX].isValidState()){
            isValid = false;
        }
        if(isValid){
            this.cells[this.prevLocationY][this.prevLocationX].setVisit();
            this.cells[this.currentY][this.currentX].setCurrent();
        }
        return isValid;
    }

    getCells(){
        return this.cells;
    }

    saveLocation(){
        this.prevLocationX = this.currentX;
        this.prevLocationY = this.currentY;
    }
}