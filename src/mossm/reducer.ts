import { IAction } from './mossm';

export class Reducer {
    public static reduce(initalState: any) {
        const reduce = (state: any = initalState, action: IAction) => {
            const proto: any = this.prototype;
            for (const key in this.prototype) {
                if (proto.hasOwnProperty(key) && proto[key].forAction) {
                    const forAction = proto[key].forAction;
                    const forActions = Array.isArray(forAction) ? forAction : [ forAction ];
                    if (forActions.indexOf(action.type) !== -1) {
                        return proto[key](state, action);
                    }
                }
            }
            return state;
        };
        return reduce.bind(this);
    }
}
