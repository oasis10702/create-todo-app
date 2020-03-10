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
      <header className="App-header">
        <input onChange={handleChange} value={todo} />
        <button onClick={handleAddTodo}>Add</button>
        <ul>
          {todolist.map(t => (
            <li key={t.key}>
              {!t.isFinished ? (
                <span onClick={() => handleUpdateTodo(t.key, true)}>
                  {t.name}
                </span>
              ) : (
                <s onClick={() => handleUpdateTodo(t.key, false)}>{t.name}</s>
              )}
              <button onClick={() => handleRemoveTodo(t.key)}>delete</button>
            </li>
          ))}
        </ul>
        <button onClick={() => logout()}>log out</button>
      </header>
    </div>
  );
}

export default App;
