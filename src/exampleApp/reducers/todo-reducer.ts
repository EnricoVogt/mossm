import { forAction } from '../../mossm/decorators/for-action';
import { IAction } from '../../mossm/mossm';
import { Reducer } from '../../mossm/reducer';

export class TodoReducer extends Reducer {
    @forAction('addTodos')
    public addTodos(state: any, action: IAction) {
        console.log(state, action);
        return action.payload;
    }

    @forAction('addTodo')
    public addTodo(state: any, action: IAction) {
        return [action.payload, ...state ];
    }

    @forAction('updateTodo')
    public updateTodo(state: any, action: IAction) {
        const newTodos = state.map((x: any) => {
            if (x.id === action.payload.id) {
                return action.payload;
            }
            return x;
        });
        return newTodos;
    }
}
