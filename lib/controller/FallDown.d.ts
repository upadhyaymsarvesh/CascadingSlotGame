import { MovingObj } from "../view/MovingObj";
import { GameState } from "./../module/GameState";
import { FallingSymbol } from "./FallingSymbol";
export declare class FallDown extends FallingSymbol {
    protected getNextState(): GameState;
    protected isFinishedMoving(symbol: MovingObj): boolean;
    protected onSymbolFinishedMoving(): void;
}
