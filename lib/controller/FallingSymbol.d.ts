import { GameState } from "./../module/GameState";
import { App } from "../App";
import { MovingObj } from "../view/MovingObj";
export declare abstract class FallingSymbol extends GameState {
    protected symbolContainer: PIXI.Container;
    protected isInited: boolean;
    protected finishedMoving: Array<Array<boolean>>;
    protected allowedToMove: Array<Array<boolean>>;
    protected allowedRows: Array<boolean>;
    constructor(app: App);
    execute(): void;
    protected init(): void;
    protected abstract isFinishedMoving(symbol: MovingObj): boolean;
    protected abstract getNextState(): GameState;
    protected abstract onSymbolFinishedMoving(symbol: MovingObj): void;
    protected onFinished(): void;
}
