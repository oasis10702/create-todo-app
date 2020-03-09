import { database } from './config';
import { list } from 'rxfire/database';
import { map } from 'rxjs/operators';

export const todolistRef = database.ref('todolist');

export const getTodo = () =>
  list(todolistRef).pipe(
    map(changes =>
      changes.map(c => {
        return { key: c.snapshot.key, ...c.snapshot.val() };
      })
    )
  );

export const addTodo = name => {
  todolistRef.push({
    name,
    status: 0
  });
};

export const removeTodo = key => {
  todolistRef.child(key).remove();
};
