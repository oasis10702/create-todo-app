import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import { list } from 'rxfire/database';
import { authState } from 'rxfire/auth';
import { map } from 'rxjs/operators';

import { config } from './config';

const app = firebase.initializeApp(config);
const database = firebase.database();
const auth = firebase.auth();
const todolistRef = database.ref('todolist');

const getUid = () => auth.currentUser.uid;

export const login = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({
    prompt: 'select_account'
  });
  auth.signInWithRedirect(provider);
};

export const checkLogin = () => authState(app.auth());

export const logout = () =>
  auth
    .signOut()
    .then(() => {
      console.log('logout success!');
    })
    .catch(error => {
      console.log(error);
    });

export const getTodo = () => {
  return list(todolistRef.child(getUid())).pipe(
    map(changes =>
      changes.map(c => {
        return { key: c.snapshot.key, ...c.snapshot.val() };
      })
    )
  );
};

export const addTodo = name => {
  todolistRef.child(getUid()).push({
    name,
    isFinished: false
  });
};

export const removeTodo = key => {
  todolistRef
    .child(getUid())
    .child(key)
    .remove();
};

export const updateTodo = (key, status) => {
  todolistRef
    .child(getUid())
    .child(key)
    .update({
      isFinished: status
    });
};
