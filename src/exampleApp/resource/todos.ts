import { ITodo } from '../interfaces/todo';

export const sampleTodos: ITodo[] = [
    {
        id: 1,
        category: ['webdev', 'development'],
        completed: false,
        todo: 'create a simple tool to manage your application state',
    },
    {
        id: 2,
        category: ['development'],
        completed: false,
        todo: 'create cardapp',
    },
    {
        id: 3,
        category: ['social'],
        completed: true,
        todo: 'write an email to josh',
    },
    {
        id: 4,
        category: ['home'],
        completed: false,
        todo: 'clean up your bedroom',
    },
];
