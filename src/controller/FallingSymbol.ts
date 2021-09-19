import {GameState} from "./../module/GameState";
import {App} from "../App";
import {SymbolContainer} from "../view/SymbolContainer";
import {MovingObj} from "../view/MovingObj";
import { Constants } from "../constants/Constant";

export abstract class FallingSymbol extends GameState {
    protected symbolContainer: PIXI.Container;
    protected isInited: boolean = false;
    protected finishedMoving: Array<Array<boolean>> = [];
    protected allowedToMove: Array<Array<boolean>> = [];
    protected allowedRows: Array<boolean> = [];

    constructor(app: App) {
        super(app);
        this.symbolContainer = (app.symbols as SymbolContainer).container;
    }

    execute(): void {
        if (!this.isInited) {
            this.init();
        }
        let allFinished = true;
        for (let i = 0; i < Constants.TOTAL_ROWS; i++) {
            if (this.allowedRows[i]) {
                for (let j = 0; j < Constants.SYMBOLS_PER_ROW; j++) {
                    if (this.allowedToMove[i][j]) {
                        if (!this.finishedMoving[i][j]) {
                            allFinished = false;
                            let ind = Constants.SYMBOLS_PER_ROW * i + j;
                            let symbol = this.symbolContainer.children[ind] as MovingObj;
                            symbol.vy += 5;
                            symbol.y += symbol.vy;
                            if (this.isFinishedMoving(symbol)) {
                                this.finishedMoving[i][j] = true;
                                symbol.vy = 0;
                                this.onSymbolFinishedMoving(symbol);
                            }
                        }
                    } else {
                        allFinished = false;
                    }
                }
            } else {
                allFinished = false;
            }
        }
        if (allFinished) {
            this.onFinished();
        }
    }

    protected init(): void {
        for (let i = 0; i < Constants.TOTAL_ROWS; i++) {
            let allowedRow: Array<boolean> = [];
            for (let j = 0; j < Constants.SYMBOLS_PER_ROW; j++) {
                allowedRow.push(false);
            }
            this.allowedToMove.push(allowedRow);
        }
        for (let i = 0; i < Constants.TOTAL_ROWS; i++) {
            let finishedRow: Array<boolean> = [];
            for (let j = 0; j < Constants.SYMBOLS_PER_ROW; j++) {
                finishedRow.push(false);
            }
            this.finishedMoving.push(finishedRow);
        }
        for (let i = 0; i < Constants.TOTAL_ROWS; i++) {
            this.allowedRows.push(false);
        }
        let currentRow = 0;
        let rowsInterval = setInterval((() => {
            this.allowedRows[currentRow] = true;
            let currentSymbol = 0;
            let rowInterval = setInterval((function (row: number) {
                // @ts-ignore
                this.allowedToMove[row][currentSymbol] = true;
                currentSymbol++;
                if (currentSymbol === Constants.SYMBOLS_PER_ROW) {
                    clearInterval(rowInterval);
                }
            }).bind(this, currentRow), 50);
            currentRow++;
            if (currentRow === Constants.TOTAL_ROWS) {
                clearInterval(rowsInterval);
            }
        }).bind(this), 100);
        this.isInited = true;
    }

    protected abstract isFinishedMoving(symbol: MovingObj): boolean;

    protected abstract getNextState(): GameState;

    protected abstract onSymbolFinishedMoving(symbol: MovingObj): void;

    protected onFinished(): void {
        this.app.setGameState(this.getNextState());
    }
}