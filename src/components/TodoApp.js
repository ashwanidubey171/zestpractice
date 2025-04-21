import React, { useState } from 'react';

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const addTodo = () => {
    if (input.trim() !== '') {
      setTodos([...todos, input.trim()]);
      setInput('');
    }
  };

  const removeTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input
        placeholder="Enter a task"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        data-testid="todo-input"
      />
      <button onClick={addTodo} data-testid="add-button">Add</button>
      <ul data-testid="todo-list">
        {todos.map((todo, index) => (
          <li key={index}>
            {todo} <button onClick={() => removeTodo(index)} data-testid={`delete-button-${index}`}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
