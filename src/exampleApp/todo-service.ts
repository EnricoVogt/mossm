import { of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { sampleTodos } from './resource/todos';

const fakeHttpClient = (expectedResponse: any) => {
    return of(expectedResponse).pipe(delay(1000));
};

export class TodoService {

    public static getTodos() {
        return fakeHttpClient(sampleTodos);
    }

    public static addTodo(todo: any) {
        return fakeHttpClient({
            id: 999,
            category: [],
            completed: false,
            todo,
        });
    }

    public static updateTodo(todo: any) {
        todo.completed = !todo.completed;
        return fakeHttpClient(todo);
    }

}
