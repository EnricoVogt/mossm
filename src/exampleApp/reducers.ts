import { IAction, IReducerMap } from '../mossm/mossm';

export const reducers: IReducerMap = {
    todoFilter: (state: any = { completed: null }, action: IAction) => {
        if (action.type === 'setFilter') {
            return action.payload;
        }
        return state;
    },
    todos: (state: any = [], action: IAction) => {
        if (action.type === 'addTodos') {
            return action.payload;
        }
        if (action.type === 'addTodo') {
            return [action.payload, ...state ];
        }
        if (action.type === 'updateTodo') {
            const newTodos = state.map((x: any) => {
                if (x.id === action.payload.id) {
                    return action.payload;
                }
                return x;
            });
            return newTodos;
        }
        return state;
    },
};
