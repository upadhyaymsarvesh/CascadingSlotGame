import * as PIXI from 'pixi.js'
import { TextureMap } from "./../TextureMap";

export enum ButtonState {
    NORMAL = 'normal',
    HOVER = 'hover',
    PRESSED = 'pressed',
    DISABLED = 'disabled'
}

export class Button {
    private static baseTexturePath: string = 'assets/images/button/btn_spin_';
    private static textures: TextureMap = {};
    private static isTextureMapInited: boolean = false;

    protected sprite: PIXI.Sprite;
    readonly container: PIXI.Container;
    private state: ButtonState = ButtonState.NORMAL;
    private applic: PIXI.Application;

    constructor(app: PIXI.Application) {
        this.applic = app;
        this.container = new PIXI.Container();
        this.sprite = new PIXI.Sprite(PIXI.Loader.shared.resources[Button.getDefaultTextureName()].texture);
        if (!Button.isTextureMapInited) {
            Button.initTextureMap();
        }
    }

    private static initTextureMap(): void {
        Object.values(ButtonState).forEach(((value: ButtonState) => {
            Button.textures[value] = PIXI.Loader.shared.resources[Button.getTexturePath(value)].texture;
        }));
        Button.isTextureMapInited = true;
    }

    protected static getDefaultTextureName(): string {
        return Button.getTexturePath(ButtonState.NORMAL);
    }

    private static getTexturePath(state: ButtonState): string {
        return Button.baseTexturePath + state + '.png';
    }

    show(): void {
        this.container.addChild(this.sprite);
        this.container.scale.x = 0.75;
        this.container.scale.y = 0.75;
        this.container.x = (1280 - this.container.width);
        this.container.y = (720 - this.container.height) / 2;
        let style = new PIXI.TextStyle({
            fontFamily: "Comic Sans",
            fontSize: 36,
            fill: "white",
            stroke: '#974e1f',
            strokeThickness: 4
        });
        let text = new PIXI.Text("Spin", style);
        text.pivot.set(0.5, 0.5);
        text.y = this.container.height / 4;
        text.x = this.container.width / 2;
        this.container.addChild(text);
        this.initHandlers();
        this.applic.stage.addChild(this.container);
    }

    private initHandlers(): void {
        this.sprite.interactive = true;
        this.sprite.addListener('mouseover', e => {
            if (this.state !== ButtonState.HOVER && this.state !== ButtonState.DISABLED) {
                this.setState(ButtonState.HOVER);
            }
        });
        this.sprite.addListener('mousedown', e => {
            if (this.state !== ButtonState.PRESSED && this.state !== ButtonState.DISABLED) {
                this.setState(ButtonState.PRESSED);
            }
        });
        this.sprite.addListener('mouseout', e => {
            if (this.state === ButtonState.PRESSED || this.state === ButtonState.HOVER) {
                this.setState(ButtonState.NORMAL);
            }
        });
    }

    setState(state: ButtonState): void {
        this.state = state;
        this.sprite.texture = Button.textures[state];
    }

    getState(): ButtonState {
        return this.state;
    }

    setOnClick(func: ((e: PIXI.InteractionEvent) => void)): void {
        this.sprite.addListener('click', func);
    }
}