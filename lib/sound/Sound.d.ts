import { Howl } from 'howler';
export interface SoundMap {
    [key: string]: Howl;
}
export declare class Sound {
    private sounds;
    constructor();
    private static getReelStopSoundId;
    playButtonClickSound(): void;
    playRandomReelStopSound(): void;
}
