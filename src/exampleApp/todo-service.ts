import { of, throwError } from 'rxjs';
import { delay } from 'rxjs/operators';
import { sampleTodos } from './resource/todos';

const fakeHttpClient = (expectedResponse: any) => {
    // return throwError("Error");
    return of(expectedResponse).pipe(delay(250));
};

let id = 4;

export class TodoService {

    public static getTodos() {
        return fakeHttpClient(sampleTodos);
    }

    public static addTodo(todo: any) {
        id++;
        return fakeHttpClient({
            id,
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
