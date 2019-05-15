import { from, of } from 'rxjs';
import { IAction } from './interfaces/action';
import { IEffect } from './interfaces/effect';

export class Effects {
    private effects: IEffect[] = [];

    public set(effect: IEffect) {
        this.effects.push(effect);
    }

    public get(action: IAction) {
        const effects = this.effects
            .filter((effect) => effect.forAction === action.type)
            .map((x) => x.effect(of(action)));
        return from([of(action), ...effects]);
    }
}

/*
const effectsFn = {
    effect: (actionStream: any) => {
        return actionStream.pipe(
            map((action) => {
                return { type: 'xyzActionSuccess1', payload: { substate: { a: false, b: false } } };
            }),
        );
    },
    forAction: 'xyzAction',
};

const effectsFn1 = {
    effect: (actionStream: any) => {
        return actionStream.pipe(
            map((action) => {
                return { type: 'xyzActionSuccess11', payload: { substate: { a: false, b: false } } };
            }),
        );
    },
    forAction: 'xyzAction',
};

//store.effects.set(effectsFn);
//store.effects.set(effectsFn1);

*/
