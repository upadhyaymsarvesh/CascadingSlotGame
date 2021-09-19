import * as PIXI from 'pixi.js'
import {Game} from "./module/Game";
import {GameState} from './module/GameState'

export class App {
    readonly app: PIXI.Application;
    static readonly GAME_WIDTH = 1280;
    static readonly GAME_HEIGHT = 720;


    private gameState: GameState;

    constructor(){
        this.app =new PIXI.Application({
            width: App.GAME_WIDTH,
            height: App.GAME_HEIGHT
        });
        this.gameState = new Game(this);
    }
}