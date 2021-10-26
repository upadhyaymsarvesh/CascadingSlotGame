import { App } from '../App';
export declare abstract class GameState {
    protected app: App;
    constructor(app: App);
    abstract execute(): void;
}
