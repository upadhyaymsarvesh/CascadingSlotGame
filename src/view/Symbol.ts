import * as PIXI from 'pixi.js';
export interface Sym {
    show(): void;
}

export abstract class Symbol implements Sym {
    protected constructor(protected app: PIXI.Application) {
    }

    abstract show(): void;
}