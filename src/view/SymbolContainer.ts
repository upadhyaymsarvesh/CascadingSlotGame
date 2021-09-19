import { Symbol } from "./Symbol";
import { TextureMap } from "./TextureMap";
import * as PIXI from "pixi.js";
import { MovingObj } from "./MovingObj";
import { Constants } from './../constants/Constant'

export enum SymbolValue {
    LION = 1,
    MONKEY = 2,
    BIRD = 3,
    BEAR = 4,
    EGG = 5,
    LEAF = 6,
    CHILLI = 7,
    DIAMOND = 8
}

export class SymbolContainer extends Symbol {
    private static textures: TextureMap = {};
    private static isTextureMap: boolean = false;
    private static baseTexturePath = 'assets/images/symbols/symbol_';

    readonly container: PIXI.Container;

    constructor(app: PIXI.Application) {
        super(app);
        this.container = new PIXI.Container();
        if (!SymbolContainer.isTextureMap) {
            SymbolContainer.initTextureMap();
        }
    }

    show(): void {

        for (let i = 0; i < Constants.TOTAL_ROWS; i++) {
            for (let j = 0; j < Constants.SYMBOLS_PER_ROW; j++) {
                let symbol = new MovingObj(SymbolContainer.getRandomTexture());
                symbol.width = Constants.SYMBOL_WIDTH;
                symbol.height = Constants.SYMBOL_HEIGHT;
                symbol.x = Constants.SYMBOL_WIDTH * j;
                symbol.y = (Constants.SYMBOL_HEIGHT * Constants.TOTAL_ROWS - Constants.SYMBOL_HEIGHT)
                    - (Constants.SYMBOL_HEIGHT * i);
                this.container.addChild(symbol);
            }
        }
        const rectMask: PIXI.Graphics = new PIXI.Graphics();
        rectMask.beginFill(0);
        rectMask.drawRect(0, 0, this.container.width * 0.75, this.container.height * 0.75);
        rectMask.endFill();
        this.container.mask = rectMask;
        this.container.x = 0;
        this.container.y = 0;
        this.container.scale.set(0.75, 0.75);
        this.app.stage.addChild(this.container);
    }

    private static initTextureMap(): void {
        Object.values(SymbolValue).filter(value => !isNaN(parseInt(value as any))).forEach(((value: any) => {
            SymbolContainer.textures[SymbolValue[value]] = PIXI.Loader.shared.resources[SymbolContainer.getTexturePath(value)].texture;
        }));
        SymbolContainer.isTextureMap = true;
    }

    static getRandomTexture(): PIXI.Texture {
        let allowedValues = Object.values(SymbolValue).filter(value => typeof value === 'number');
        let value: any = allowedValues[Math.floor(Math.random() * allowedValues.length)];
        return PIXI.Loader.shared.resources[SymbolContainer.getTexturePath(value)].texture;
    }

    private static getTexturePath(value: SymbolValue): string {
        return SymbolContainer.baseTexturePath + value + '.png';
    }
}