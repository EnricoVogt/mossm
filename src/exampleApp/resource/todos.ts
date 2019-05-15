import { ITodo } from '../interfaces/todo';

export const sampleTodos: ITodo[] = [
    {
        id: 1,
        category: ['webdev', 'development'],
        completed: false,
        todo: 'Create a simple tool to manage your application state',
    },
    {
        id: 2,
        category: ['development'],
        completed: false,
        todo: 'Create cardapp',
    },
    {
        id: 3,
        category: ['social'],
        completed: true,
        todo: 'write a email to josh',
    },
    {
        id: 4,
        category: ['home'],
        completed: false,
        todo: 'clean up your bedroom',
    },
];
