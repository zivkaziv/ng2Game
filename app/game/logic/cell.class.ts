import {ICell} from "./interface/cell.interface";
import {CellState} from "./cellState.enum";
/**
 * Created by ziv on 29/01/2017.
 */

export class Cell implements ICell {

    constructor(public y: number, public x: number, public state: CellState = CellState.CLEAR) {
    }


    isValidState(): boolean {
        return this.state === CellState.CLEAR || this.state === CellState.CURRENT_LOCATION ;
    }

    setMine(): void {
        this.state = CellState.MINE;
    }

    setCurrent(): void {
        this.state = CellState.CURRENT_LOCATION;
    }

    setVisit(): void {
        this.state = CellState.VISITED;
    }
}