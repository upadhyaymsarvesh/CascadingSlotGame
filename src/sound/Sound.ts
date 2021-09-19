import {Howl} from 'howler';
import { Constants } from './../constants/Constant'

export interface SoundMap {
    [key: string]: Howl;
}

export class Sound {
    private sounds: SoundMap = {};
    
    constructor() {
        let reelStopSoundIds: Array<string> = [];
        for (let i = 1; i <= 5; i++) {
            reelStopSoundIds.push(Sound.getReelStopSoundId(i));
        }
        for (let id of reelStopSoundIds.concat(Constants.SPIN_BUTTON_SOUND)) {
            this.sounds[id] = new Howl({
                src: id
            });
        }
    }

    private static getReelStopSoundId(num: number): string {
        return Constants.REEL_STOP_SOUND_PATH + num + '.mp3';
    }

    playButtonClickSound(): void {
        this.sounds[Constants.SPIN_BUTTON_SOUND].play();
    }

    playRandomReelStopSound(): void {
        let index: number = Math.ceil(Math.random() * 5);
        let id: string = Sound.getReelStopSoundId(index);
        this.sounds[id].play();
    }
}