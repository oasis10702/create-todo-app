import React, { useEffect, useState } from 'react';

import {
  removeTodo,
  addTodo,
  getTodo,
  checkLogin,
  signOut
} from './firebase/api';
import './App.css';

function App() {
  const [todolist, setTodolist] = useState([]);
  const [todo, setTodo] = useState('');

  useEffect(() => {
    checkLogin().then(() => {
      getTodo().subscribe(data => setTodolist(data));
    });
  }, []);

  const handleChange = e => setTodo(e.target.value);

  const handleAddTodo = () => {
    addTodo(todo);
    setTodo('');
  };

  const handleRemoveTodo = key => {
    removeTodo(key);
  };

  return (
    <div className="App">
      <header className="App-header">
        <input onChange={handleChange} value={todo} />
        <button onClick={handleAddTodo}>Add</button>
        <ul>
          {todolist.map(t => (
            <li key={t.key}>
              {t.name}
              <button onClick={() => handleRemoveTodo(t.key)}>delete</button>
            </li>
          ))}
        </ul>
        <button onClick={() => signOut()}>sign out</button>
      </header>
    </div>
  );
}

export default App;
