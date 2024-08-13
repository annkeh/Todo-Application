const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

let todos = [];
app.get('/api/todos', (req, res) => {
  res.json(todos);
});

let currentId = 1;
app.post('/api/todos', (req, res) => {
  console.log(`currentId before increment: ${currentId}`);
  const todo = { id: currentId, text: req.body.text, completed: false };
  todos.push(todo);
  currentId++; 
  console.log(`currentId after increment: ${currentId}`);
  res.status(201).json(todo);
});


app.put('/api/todos/:id', (req, res) => {
  const todo = todos.find(t => t.id === parseInt(req.params.id));
  if (todo) {
    todo.completed = !todo.completed;
    res.json(todo);
  } else {
    res.status(404).json({ message: 'Todo not found' });
  }
});

app.delete('/api/todos/:id', (req, res) => {
  todos = todos.filter(t => t.id !== parseInt(req.params.id));
  res.status(204).end();
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
