import * as PIXI from 'pixi.js'
import {Game} from "./module/Game";
import {GameState} from './module/GameState'
import {ButtonState} from "./view/button/Button";
import {Button} from "./view/button/Button";
import {Sound} from "./sound/Sound";
import {Constants} from "./constants/Constant";
import { SymbolContainer } from './view/SymbolContainer';
import { FallDown } from './controller/FallDown';

export class App {
    readonly appli: PIXI.Application;
    
    private gameState: GameState;
    private spinButton: Button | undefined;
    private symbolContainer: SymbolContainer | undefined;
    private sound: Sound = new Sound();

    constructor(){
        this.appli =new PIXI.Application({
            width: 1280,
            height: 720
        });
        this.gameState = new Game(this);
    }

    run(): void {
        document.body.appendChild(this.appli.view);
        PIXI.Loader.shared.add([
            'assets/images/button/btn_spin_disabled.png',
            'assets/images/button/btn_spin_hover.png',
            'assets/images/button/btn_spin_normal.png',
            'assets/images/button/btn_spin_pressed.png',
            'assets/images/symbols/symbol_1.png',
            'assets/images/symbols/symbol_2.png',
            'assets/images/symbols/symbol_3.png',
            'assets/images/symbols/symbol_4.png',
            'assets/images/symbols/symbol_5.png',
            'assets/images/symbols/symbol_6.png',
            'assets/images/symbols/symbol_7.png',
            'assets/images/symbols/symbol_8.png'
        ]).load(this.setup.bind(this));
    }

    private setup(): void {
        this.buildScene();
        this.appli.ticker.add(delta => this.gameLoop(delta))
    }

    private buildScene(): void {
        this.addSpinButton();
        this.addSymbols();
    }

    private addSpinButton(): void {
        this.spinButton = new Button(this.appli);
        this.spinButton.show();
        this.spinButton.setOnClick(e => {
            if ((this.spinButton as Button).getState() !== ButtonState.DISABLED) {
                this.sound.playButtonClickSound();
                this.gameState = new FallDown(this);
                (this.spinButton as Button).setState(ButtonState.DISABLED);
            }
        });
    }

    private addSymbols(): void {
        this.symbolContainer = new SymbolContainer(this.appli);
        this.symbolContainer.show();
    }

    private gameLoop(delta: number): void {
        this.gameState.execute();
    }

    get button(): Button | undefined {
        return this.spinButton;
    }

    get symbols(): SymbolContainer | undefined {
        return this.symbolContainer;
    }

    get sounds(): Sound {
        return this.sound;
    }

    setGameState(state: GameState) {
        this.gameState = state;
    }
}