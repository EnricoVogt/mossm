import { createAction } from '../../mossm/action-creator';

export const getTodosAction = createAction('getTodos');
export const getTodosSuccessAction = createAction('getTodosSuccess');
export const getTodosFailureAction = createAction('getTodosFailure');

export const addTodoAction = createAction('addTodo');
export const addTodoSuccessAction = createAction('addTodoSuccess');
export const addTodoFailureAction = createAction('addTodoFailure');

export const setFilterAction = createAction('setFilter');

export const updateTodoAction = createAction('updateTodo');
export const updateTodoSuccessAction = createAction('updateTodoSuccess');
export const updateTodoFailureAction = createAction('updateTodoFailure');
