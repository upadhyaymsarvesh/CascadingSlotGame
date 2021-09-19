import {GameState} from "./../module/GameState";
import {FallingSymbol} from "./FallingSymbol";
import {MovingObj} from "../view/MovingObj";
import {Game} from "./../module/Game";
import {SymbolContainer} from "../view/SymbolContainer";
import {ButtonState} from "../view/button/Button";
import {Button} from "../view/button/Button";
import * as PIXI from 'pixi.js';
import { Constants } from "../constants/Constant";

export class FallToView extends FallingSymbol {
    protected getNextState(): GameState {
        return new Game(this.app);
    }

    protected isFinishedMoving(symbol: MovingObj): boolean {
        let finalY = this.getFinalY(symbol);
        return symbol.y >= finalY;
    }

    protected onSymbolFinishedMoving(symbol: MovingObj): void {
        this.app.sounds.playRandomReelStopSound();
        symbol.y = this.getFinalY(symbol);
    }

    protected init(): void {
        for (let i = 0; i < Constants.TOTAL_ROWS; i++) {
            for (let j = 0; j < Constants.SYMBOLS_PER_ROW; j++) {
                let ind = Constants.SYMBOLS_PER_ROW * i + j;
                let symbol = this.symbolContainer.children[ind] as MovingObj;
                let globalPosition = new PIXI.Point(symbol.x, Constants.SYMBOL_HEIGHT * (-1 - i));
                let localPosition = symbol.toLocal(globalPosition, this.symbolContainer);
                symbol.y = localPosition.y;
                symbol.texture = SymbolContainer.getRandomTexture();
            }
        }
        super.init();
    }

    protected onFinished(): void {
        super.onFinished();
        (this.app.button as Button).setState(ButtonState.NORMAL);
    }

    private getFinalY(symbol: MovingObj): number {
        let ind = this.symbolContainer.children.indexOf(symbol);
        let rowInd = Math.floor(ind / Constants.SYMBOLS_PER_ROW);
        return (Constants.TOTAL_ROWS - 1 - rowInd) * Constants.SYMBOL_HEIGHT;
    }
}