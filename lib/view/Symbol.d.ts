import * as PIXI from 'pixi.js';
export interface Sym {
    show(): void;
}
export declare abstract class Symbol implements Sym {
    protected app: PIXI.Application;
    protected constructor(app: PIXI.Application);
    abstract show(): void;
}
