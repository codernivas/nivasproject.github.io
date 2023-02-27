import React, { useState } from 'react';

interface Todo {
  id: number;
  text: string;
  dueDate: string;
  completed: boolean;
}

const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodoText, setNewTodoText] = useState('');
  const [newTodoDueDate, setNewTodoDueDate] = useState('');

  const handleNewTodo = () => {
    const newTodo: Todo = {
      id: todos.length + 1,
      text: newTodoText,
      dueDate: newTodoDueDate,
      completed: false,
    };
    setTodos([...todos, newTodo]);
    setNewTodoText('');
    setNewTodoDueDate('');
  };

  const handleToggleTodo = (id: number) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const handleRemoveTodo = (id: number) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <label htmlFor="todo-input">Description:</label>
      <input
        id="todo-input"
        type="text"
        value={newTodoText}
        onChange={(e) => setNewTodoText(e.target.value)}
      />
      <label htmlFor="due-date-input">Due date:</label>
      <input
        id="due-date-input"
        type="date"
        value={newTodoDueDate}
        onChange={(e) => setNewTodoDueDate(e.target.value)}
      />
      <button onClick={handleNewTodo}>Add Todo</button>
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{
              textDecoration: todo.completed ? 'line-through' : 'none',
            }}
          >
            <span onClick={() => handleToggleTodo(todo.id)}>{todo.text} (Due: {todo.dueDate})</span>
            <button onClick={() => handleRemoveTodo(todo.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
