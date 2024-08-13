import React from 'react';

const TodoItem = ({ todo, toggleComplete, deleteTodo }) => {
  return (
    <li>
      <span
        style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
        onClick={() => toggleComplete(todo.id)}
      >
        {todo.text}
      </span>
      {/* <button onClick={() => deleteTodo(todo.id)}>Delete</button> */}
      <button onClick={() => deleteTodo(todo.id)}>
  &#128465; {/* Trash can icon in Unicode */}
</button>
    </li>
  );
};

export default TodoItem;
