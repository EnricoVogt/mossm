
import { BehaviorSubject, Subject } from 'rxjs';
import { distinctUntilChanged, map, concatMap, mergeMap, tap } from 'rxjs/operators';
import { IAction } from './interfaces/action';
import { IReducerMap } from './interfaces/reducer-map';
import { Effects } from './mossm';

const win = window as any;
win.devTools = win.__REDUX_DEVTOOLS_EXTENSION__.connect();

export class Store {
    public effects: Effects;

    private stateSubject: BehaviorSubject<any>;
    private actions: Subject<any>;
    private reducermap: IReducerMap;

    constructor(reducermap: IReducerMap, effectClasses: any[] = []) {
        this.effects = new Effects(effectClasses);
        this.reducermap = reducermap;

        this.stateSubject = new BehaviorSubject({});
        this.actions = new Subject();

        this.actions.pipe(
            concatMap((action) => {
                return this.effects.get(action);
            }),
            mergeMap((x) => {
                return x;
            }),
        ).subscribe((action) => {
            this.reduce(action);
        });

        this.dispatch({type: 'setup store', payload: null});
    }

    public dispatch(action: IAction) {
        this.actions.next(action);
    }

    public select(selectorFn: any = (x: any) => x) {
        return this.stateSubject.asObservable().pipe(
            map(selectorFn),
            distinctUntilChanged(),
        );
    }

    private reduce(action: any) {
        const newState: any = {};
        const state = this.stateSubject.value;
        for (const prop of Object.keys(this.reducermap)) {
            newState[prop] = this.reducermap[prop](state[prop], action);
        }

        win.devTools.send(action.type, newState);
        this.stateSubject.next(newState);
    }
}
