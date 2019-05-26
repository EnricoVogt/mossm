import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { forAction } from '../../mossm/decorators/for-action';
import {
    addTodoFailureAction,
    addTodoSuccessAction,
    getTodosFailureAction,
    getTodosSuccessAction,
    updateTodoFailureAction,
    updateTodoSuccessAction,
} from '../actions/actions';
import { TodoService } from '../todo-service';

export class TodoEffects {

    @forAction('addTodo')
    public addTodo(actionStream: any) {
        return actionStream.pipe(
            mergeMap((action: any) => {
                return TodoService.addTodo(action.payload).pipe(
                    map((x) => {
                        return addTodoSuccessAction(x);
                    }),
                    catchError((error) => of(addTodoFailureAction(error))),
                );
            }),
        );
    }

    @forAction('getTodos')
    public addTodos(actionStream: any) {
        return actionStream.pipe(
            mergeMap((action: any) => {
                return TodoService.getTodos().pipe(
                    map((x) => {
                        return getTodosSuccessAction(x);
                    }),
                    catchError((error) => of(getTodosFailureAction(error))),
                );
            }),
        );
    }

    @forAction('updateTodo')
    public updateTodo(actionStream: any) {
        return actionStream.pipe(
            mergeMap((action: any) => {
                return TodoService.updateTodo(action.payload).pipe(
                    map((x) => {
                        return updateTodoSuccessAction(x);
                    }),
                    catchError((error) => of(updateTodoFailureAction(error))),
                );
            }),
        );
    }

}
