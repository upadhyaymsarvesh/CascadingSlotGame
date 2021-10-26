import { Symbol } from "./Symbol";
import * as PIXI from "pixi.js";
export declare enum SymbolValue {
    LION = 1,
    MONKEY = 2,
    BIRD = 3,
    BEAR = 4,
    EGG = 5,
    LEAF = 6,
    CHILLI = 7,
    DIAMOND = 8
}
export declare class SymbolContainer extends Symbol {
    private static textures;
    private static isTextureMap;
    private static baseTexturePath;
    readonly container: PIXI.Container;
    constructor(app: PIXI.Application);
    show(): void;
    private static initTextureMap;
    static getRandomTexture(): PIXI.Texture;
    private static getTexturePath;
}
