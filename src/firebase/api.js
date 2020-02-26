import { database } from './config';

const todolistRef = database.ref('todolist');

export const getTodolist = () => {
  return todolistRef.once('value').then(snapshot => {
    return snapshot.val();
  });
};

export const insertTodo = name => {
  todolistRef.push({
    name,
    status: 0
  });
};
