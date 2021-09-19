import {MovingObj} from "../view/MovingObj";
import {GameState} from "./../module/GameState";
import {FallToView} from "./FallToView";
import { Constants } from "../constants/Constant";
import { FallingSymbol } from "./FallingSymbol";

export class FallDown extends FallingSymbol {
    protected getNextState(): GameState {
        return new FallToView(this.app);
    }

    protected isFinishedMoving(symbol: MovingObj): boolean {
        return symbol.getGlobalPosition().y >= 720;
    }

    protected onSymbolFinishedMoving(): void {
    }
}