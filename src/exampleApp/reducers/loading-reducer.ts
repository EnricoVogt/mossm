import { forAction } from '../../mossm/decorators/for-action';
import { Reducer } from '../../mossm/reducer';

export class LoadingReducer extends Reducer {
    @forAction(['getTodos', 'addTodo', 'updateTodo'])
    public loading(state: any) {
        return true;
    }

    @forAction([
        'getTodosSuccess',
        'getTodosFailure',
        'addTodoSuccess',
        'addTodoFailure',
        'updateTodoSuccess',
        'updateTodoFailure',
    ])
    public loadingFinished(state: any) {
        return false;
    }
}
