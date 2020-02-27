import { database } from './config';

export const todolistRef = database.ref('todolist');

export const addTodo = name => {
  todolistRef.push({
    name,
    status: 0
  });
};
