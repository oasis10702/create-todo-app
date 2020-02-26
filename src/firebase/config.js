// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
  apiKey: 'AIzaSyDivI4uAkMKXaWi-H_1V7RQR7S2yICnIfM',
  authDomain: 'create-todo-app.firebaseapp.com',
  databaseURL: 'https://create-todo-app.firebaseio.com',
  storageBucket: 'create-todo-app.appspot.com'
};

firebase.initializeApp(config);
export const database = firebase.database();
