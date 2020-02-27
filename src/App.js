import React, { useEffect, useState } from 'react';

import { todolistRef, addTodo } from './firebase/api';
import './App.css';

function App() {
  const [todolist, setTodolist] = useState([]);
  const [todo, setTodo] = useState('');
  useEffect(() => {
    todolistRef.on('value', snapshot => {
      setTodolist(Object.values(snapshot.val()));
    });
  }, []);

  const handleChange = e => setTodo(e.target.value);

  const handleAddTodo = () => {
    addTodo(todo);
    setTodo('');
  };

  return (
    <div className="App">
      <header className="App-header">
        <input onChange={handleChange} value={todo} />
        <ul>
          {todolist.map(t => (
            <li>{t.name}</li>
          ))}
        </ul>
        <button onClick={handleAddTodo}>Add</button>
      </header>
    </div>
  );
}

export default App;
