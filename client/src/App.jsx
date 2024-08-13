import React, { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [editingText, setEditingText] = useState('');

  const addTodo = (e) => {
    e.preventDefault();
    if (newTodo.trim()) {
      const todo = {
        id: Date.now(),
        text: newTodo,
        completed: false,
      };
      setTodos([...todos, todo]);
      setNewTodo('');
    }
  };

  const toggleTodoCompletion = (id) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const startEditing = (id, text) => {
    setEditingId(id);
    setEditingText(text);
  };

  const saveEdit = (id) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, text: editingText } : todo
      )
    );
    setEditingId(null);
    setEditingText('');
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditingText('');
  };

  const incompleteTodos = todos.filter(todo => !todo.completed);
  const completedTodos = todos.filter(todo => todo.completed);

  return (
    <div className="App">
      <h1>Todo List</h1>
      <form onSubmit={addTodo}>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add a new task..."
        />
        <button type="submit">Add Todo</button>
      </form>

      <h2>Incomplete Tasks</h2>
      <TodoList
        todos={incompleteTodos}
        toggleTodoCompletion={toggleTodoCompletion}
        deleteTodo={deleteTodo}
        startEditing={startEditing}
        saveEdit={saveEdit}
        editingId={editingId}
        editingText={editingText}
        setEditingText={setEditingText}
        cancelEdit={cancelEdit}
      />

      <h2>Completed Tasks</h2>
      <TodoList
        todos={completedTodos}
        toggleTodoCompletion={toggleTodoCompletion}
        deleteTodo={deleteTodo}
        startEditing={startEditing}
        saveEdit={saveEdit}
        editingId={editingId}
        editingText={editingText}
        setEditingText={setEditingText}
        cancelEdit={cancelEdit}
      />
    </div>
  );
}

function TodoList({
  todos,
  toggleTodoCompletion,
  deleteTodo,
  startEditing,
  saveEdit,
  editingId,
  editingText,
  setEditingText,
  cancelEdit
}) {
  return (
    <ul>
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleTodoCompletion={toggleTodoCompletion}
          deleteTodo={deleteTodo}
          startEditing={startEditing}
          saveEdit={saveEdit}
          isEditing={editingId === todo.id}
          editingText={editingText}
          setEditingText={setEditingText}
          cancelEdit={cancelEdit}
        />
      ))}
    </ul>
  );
}

function TodoItem({
  todo,
  toggleTodoCompletion,
  deleteTodo,
  startEditing,
  saveEdit,
  isEditing,
  editingText,
  setEditingText,
  cancelEdit
}) {
  return (
    <li className={todo.completed ? 'completed' : ''}>
      {isEditing ? (
        <>
          <input
            type="text"
            value={editingText}
            onChange={(e) => setEditingText(e.target.value)}
          />
          <button onClick={() => saveEdit(todo.id)}>Save</button>
          <button onClick={cancelEdit}>Cancel</button>
        </>
      ) : (
        <>
          <span onClick={() => toggleTodoCompletion(todo.id)}>
            {todo.text}
          </span>
          <button onClick={() => startEditing(todo.id, todo.text)}>Edit</button>
          <button onClick={() => deleteTodo(todo.id)}>🗑️</button>
        </>
      )}
    </li>
  );
}

export default App;

