const express = require('express');
const app = express();

app.use(express.json());

// Test route
app.get('/', (req, res) => {
  res.json({ message: 'API is running' });
});

// Users route
app.get('/users', (req, res) => {
  res.json([
    { id: 1, name: 'Brandon' },
    { id: 2, name: 'User2' }
  ]);
});

// Login route (basic example)
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