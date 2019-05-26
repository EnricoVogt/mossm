import { IReducerMap } from '../mossm/mossm';
import { LoadingReducer } from './reducers/loading-reducer';
import { TodoFilterReducer } from './reducers/todo-filter-reducer';
import { TodoReducer } from './reducers/todo-reducer';

export const reducers: IReducerMap = {
    todoFilter: TodoFilterReducer.reduce({ completed: null }),
    todos: TodoReducer.reduce([]),
    loading: LoadingReducer.reduce(false),
};
