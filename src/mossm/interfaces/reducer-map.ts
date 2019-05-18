import { reduceFn } from '../types/reducer';

export interface IReducerMap {
    [key: string]: reduceFn;
}
