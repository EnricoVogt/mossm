import { from, of } from 'rxjs';
import { IAction } from './interfaces/action';
import { IEffect } from './mossm';

export class Effects {
    private effects: IEffect[] = [];

    constructor(effectClasses: any) {
        effectClasses.forEach((effectClass: any) => {
            effectClass = effectClass.prototype;
            for (const key in effectClass) {
                if (effectClass.hasOwnProperty(key) && effectClass[key].forAction) {
                    const effectFn = effectClass[key];
                    this.effects.push(effectFn);
                }
            }
        });
    }

    public get(action: IAction) {
        const effects = this.effects
            .filter((effect) => {
                return effect.forAction === action.type;
            })
            .map((effectFn) => {
                return effectFn(of(action));
            });
        return from([of(action), ...effects]);
    }
}