import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { forAction } from '../../mossm/decorators/for-action';
import { TodoService } from '../todo-service';

export class TodoEffects {

    @forAction('addTodo')
    public addTodo(actionStream: any) {
        return actionStream.pipe(
            mergeMap((action: any) => {
                return TodoService.addTodo(action.payload).pipe(
                    map((x) => {
                        return { type: 'addTodoSuccess', payload: x };
                    }),
                    catchError((error) => of(error)),
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
                        return { type: 'getTodosSuccess', payload: x };
                    }),
                    catchError((error) => of(error)),
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
                        return { type: 'updateTodoSuccess', payload: x };
                    }),
                    catchError((error) => of(error)),
                );
            }),
        );
    }

}
