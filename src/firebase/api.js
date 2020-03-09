import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import { list } from 'rxfire/database';
import { map } from 'rxjs/operators';

import { config } from './config';

firebase.initializeApp(config);
const database = firebase.database();
const todolistRef = database.ref('todolist');

const getUid = () => firebase.auth().currentUser.uid;

export const login = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({
    prompt: 'select_account'
  });
  firebase.auth().signInWithRedirect(provider);
};

export const checkLogin = () => {
  return new Promise(resolve => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        resolve(user);
      } else {
        login();
      }
    });
  });
};

export const signOut = () =>
  firebase
    .auth()
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
    status: 0
  });
};

export const removeTodo = key => {
  todolistRef
    .child(getUid())
    .child(key)
    .remove();
};
