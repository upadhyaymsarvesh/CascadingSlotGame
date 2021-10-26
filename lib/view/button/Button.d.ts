import * as PIXI from 'pixi.js';
export declare enum ButtonState {
    NORMAL = "normal",
    HOVER = "hover",
    PRESSED = "pressed",
    DISABLED = "disabled"
}
export declare class Button {
    private static baseTexturePath;
    private static textures;
    private static isTextureMapInited;
    protected sprite: PIXI.Sprite;
    readonly container: PIXI.Container;
    private state;
    private applic;
    constructor(app: PIXI.Application);
    private static initTextureMap;
    protected static getDefaultTextureName(): string;
    private static getTexturePath;
    show(): void;
    private initHandlers;
    setState(state: ButtonState): void;
    getState(): ButtonState;
    setOnClick(func: ((e: PIXI.InteractionEvent) => void)): void;
}
