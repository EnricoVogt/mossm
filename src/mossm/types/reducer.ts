import { IAction } from '../interfaces/action';

export type Reducer = (state: any, action: IAction) => any;
