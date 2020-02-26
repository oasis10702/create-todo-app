import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { getTodolist, insertTodo } from './firebase/api';

function App() {
  const [todolist, setTodolist] = useState([]);
  useEffect(() => {
    getTodolist().then(resp => {
      setTodolist(Object.values(resp));
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <ul>
          {todolist.map(t => (
            <li>{t.name}</li>
          ))}
        </ul>
        <button onClick={() => insertTodo('test')}>insert</button>
      </header>
    </div>
  );
}

export default App;
