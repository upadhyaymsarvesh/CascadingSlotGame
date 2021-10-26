import * as PIXI from 'pixi.js';
import { GameState } from './module/GameState';
import { Button } from "./view/button/Button";
import { Sound } from "./sound/Sound";
import { SymbolContainer } from './view/SymbolContainer';
export declare class App {
    readonly appli: PIXI.Application;
    private gameState;
    private spinButton;
    private symbolContainer;
    private sound;
    constructor();
    run(): void;
    private setup;
    private buildScene;
    private addSpinButton;
    private addSymbols;
    private gameLoop;
    get button(): Button | undefined;
    get symbols(): SymbolContainer | undefined;
    get sounds(): Sound;
    setGameState(state: GameState): void;
}
