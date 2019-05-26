import { delay, map } from 'rxjs/operators';
import { forAction } from '../../mossm/decorators/for-action';

export class TodoEffects {

    @forAction('addTodo')
    public addTodo(actionStream: any) {
        return actionStream.pipe(
            map((action) => {
                return { type: 'addTodoSuccess', payload: {abc: true}};
            }),
            delay(1000),
        );
    }

}
