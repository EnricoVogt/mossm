import { forAction } from '../../mossm/decorators/for-action';
import { IAction } from '../../mossm/mossm';
import { Reducer } from '../../mossm/reducer';

export class TodoReducer extends Reducer {
    @forAction('getTodosSuccess')
    public addTodos(state: any, action: IAction) {
        return action.payload;
    }

    @forAction('addTodoSuccess')
    public addTodo(state: any, action: IAction) {
        return [action.payload, ...state ];
    }

    @forAction('updateTodoSuccess')
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
