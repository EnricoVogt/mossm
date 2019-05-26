import { Store  } from '../mossm/mossm';
import { addTodoAction, getTodosAction, setFilterAction, updateTodoAction } from './actions/actions';
import { TodoEffects } from './effects/todo-effects';
import { ITodo } from './interfaces/todo';
import { reducers } from './reducers';
import { filterCompleted, filteredTodosState, loadingSelector } from './selectors';

class TodoApplication {

    private todoAppContainer: HTMLElement;
    private todoList: HTMLElement;
    private todoFilter: HTMLElement;
    private todoAddForm: HTMLElement;
    private filterRadios: HTMLInputElement[];
    private store: Store;

    constructor(selector: string) {
        this.store = new Store(reducers, [TodoEffects]);
        this.todoAppContainer = document.querySelector(selector);
        this.todoList = this.todoAppContainer.querySelector('todo-list');
        this.todoFilter = this.todoAppContainer.querySelector('todo-filter');
        this.todoAddForm = this.todoAppContainer.querySelector('todo-form');

        this.addEventListeners();

        const loadingState: HTMLElement = this.todoAppContainer.querySelector('.loading-state');
        this.store.select(loadingSelector).subscribe((x: any) => {
            loadingState.textContent = x;
            loadingState.style.color = (x) ? 'red' : 'green';
        });

        this.store.select(filteredTodosState).subscribe((x: any) => {
            this.renderList(x);
        });

        this.store.select(filterCompleted).subscribe((filter: any) => {
            let filterId = 'filter_all';
            if (filter === true) {
                filterId = 'filter_finished';
            }

            if (filter === false) {
                filterId = 'filter_unfinished';
            }

            const radio = this.filterRadios.find((x) => x.id === filterId);
            radio.setAttribute('checked', 'checked');
        });

        this.store.dispatch(getTodosAction());
    }

    private addEventListeners() {
        this.todoAddForm.querySelector('button').addEventListener('click', this.addTodoHandler.bind(this));

        this.filterRadios = Array.from(this.todoFilter.querySelectorAll('input[name=filter]'));
        this.filterRadios.forEach((radio) => {
            radio.addEventListener('change', this.filterHandler.bind(this));
        });
    }

    private renderList(todos: any) {
        while (this.todoList.firstChild) {
            this.todoList.removeChild(this.todoList.firstChild);
        }

        const todoElements = todos.map((todo: any) => {
            const todoNode = document.createElement('todo');
            const todoCheckbox = document.createElement('input');
            todoCheckbox.setAttribute('type', 'checkbox');
            todoNode.addEventListener('click', this.checkedHandler({...todo}));

            const todoText = document.createElement('p');
            todoText.textContent = todo.todo;

            if (todo.completed) {
                todoCheckbox.setAttribute('checked', todo.completed);
                todoText.style.textDecoration = 'line-through';
            }

            todoNode.appendChild(todoCheckbox);
            todoNode.appendChild(todoText);

            return todoNode;
        });

        todoElements.forEach((todoNode: HTMLElement) => {
            this.todoList.appendChild(todoNode);
        });
    }

    private addTodoHandler() {
        const inputValue = this.todoAddForm.querySelector('input').value;
        if (inputValue !== '') {
            this.todoAddForm.querySelector('input').value = '';
            this.store.dispatch(addTodoAction(inputValue));
        }
    }

    private filterHandler(event: any) {
        this.setFilter(event.target.value);
    }

    private setFilter(filter: any) {
        let completed: boolean = null;

        if (filter === 'finished') {
            completed = true;
        }

        if (filter === 'unfinished') {
            completed = false;
        }

        this.store.dispatch(setFilterAction({ completed }));
    }

    private checkedHandler(todo: ITodo) {
        return (event: any) => {
            this.store.dispatch(updateTodoAction(todo));
        };
    }
}

const todoApp = new TodoApplication('todo-app');
