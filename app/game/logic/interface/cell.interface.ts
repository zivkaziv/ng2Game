import {CellState} from "../cellState.enum";
/**
 * Created by ziv on 29/01/2017.
 */

export interface ICell{
    x:number;
    y:number;
    state:CellState;
    isValidState():boolean;
    setMine():void;
    setVisit():void;
    setCurrent():void;
}