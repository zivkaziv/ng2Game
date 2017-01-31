/**
 * Created by ziv on 29/01/2017.
 */

export interface IBoard{
    initBoard();
    moveUp():boolean;
    moveDown():boolean;
    moveLeft():boolean;
    moveRight():boolean;
    isValidMove():boolean;
    getCells();
}