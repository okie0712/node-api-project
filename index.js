const express = require('express');
const app = express();

app.use(express.json());

// Fake database
let users = [
  { id: 1, name: 'Brandon' },
  { id: 2, name: 'User2' }
];

// Health check
app.get('/', (req, res) => {
  res.json({ status: 'API running' });
});

// Get all users
app.get('/users', (req, res) => {
  res.json(users);
});

// Get single user
app.get('/users/:id', (req, res) => {
  const user = users.find(u => u.id == req.params.id);
  if (!user) return res.status(404).json({ error: 'User not found' });
  res.json(user);
});

// Create user
app.post('/users', (req, res) => {
  const newUser = {
    id: users.length + 1,
    name: req.body.name
  };
  users.push(newUser);
  res.status(201).json(newUser);
});

// Update user
app.put('/users/:id', (req, res) => {
  const user = users.find(u => u.id == req.params.id);
  if (!user) return res.status(404).json({ error: 'User not found' });

  user.name = req.body.name;
  res.json(user);
});

// Delete user
app.delete('/users/:id', (req, res) => {
  users = users.filter(u => u.id != req.params.id);
  res.json({ message: 'User deleted' });
});

// Login route
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  if (username === 'admin' && password === '1234') {
    return res.json({ success: true, token: 'fake-jwt-token' });
  }

  res.status(401).json({ success: false });
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});