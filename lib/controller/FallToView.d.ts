import { GameState } from "./../module/GameState";
import { FallingSymbol } from "./FallingSymbol";
import { MovingObj } from "../view/MovingObj";
export declare class FallToView extends FallingSymbol {
    protected getNextState(): GameState;
    protected isFinishedMoving(symbol: MovingObj): boolean;
    protected onSymbolFinishedMoving(symbol: MovingObj): void;
    protected init(): void;
    protected onFinished(): void;
    private getFinalY;
}
