import React, { useEffect, useState } from 'react';

import {
  removeTodo,
  addTodo,
  getTodo,
  updateTodo,
  checkLogin,
  logout,
  login
} from './firebase/api';
import './App.css';

function App() {
  const [todolist, setTodolist] = useState([]);
  const [todo, setTodo] = useState('');

  useEffect(() => {
    checkLogin().subscribe(user => {
      if (user) {
        console.log('login success!', user);
        getTodo().subscribe(data => setTodolist(data));
      } else {
        login();
      }
    });
  }, []);

  const handleChange = e => setTodo(e.target.value);

  const handleAddTodo = () => {
    if (todo.length === 0) {
      return;
    }
    addTodo(todo);
    setTodo('');
  };

  const handleRemoveTodo = key => {
    removeTodo(key);
  };

  const handleUpdateTodo = (key, status) => {
    updateTodo(key, status);
  };

  return (
    <div className="App">
      <h1>TODOLIST</h1>
      <div className="todolist__input">
        <input onChange={handleChange} value={todo} />
        <button onClick={handleAddTodo}>ADD</button>
      </div>
      <ul className="todolist__list">
        {todolist.length ? (
          todolist.map(t => (
            <li key={t.key}>
              {!t.isFinished ? (
                <span onClick={() => handleUpdateTodo(t.key, true)}>
                  {t.name}
                </span>
              ) : (
                <s onClick={() => handleUpdateTodo(t.key, false)}>{t.name}</s>
              )}
              <button onClick={() => handleRemoveTodo(t.key)}>DELETE</button>
            </li>
          ))
        ) : (
          <h2>Loading...</h2>
        )}
      </ul>
      <button onClick={() => logout()}>LOGOUT</button>
    </div>
  );
}

export default App;
