import { createSelector } from '../mossm/mossm';

const todosSelector = (x: any) => {
    return x.todos;
};

const filterSelector = (x: any) => {
    return x.todoFilter;
};

export const filterCompleted = createSelector(
    (filter: any) => {
        console.log(filter, '<<<<');
        return filter.completed;
    },
    filterSelector,
);

export const filteredTodosState = createSelector(
    (todos: any, filter: any) => {
        if (filter === null) {
            return todos;
        }
        return todos.filter((todo: any) => todo.completed === filter);
    },
    todosSelector,
    filterCompleted,
);
