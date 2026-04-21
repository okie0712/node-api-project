const express = require('express');
const app = express();
const usersRouter = require('./routes/users');
const jwt = require('jsonwebtoken');

const SECRET = 'mysecretkey';

app.use(express.json());

// Health check
app.get('/', (req, res) => {
  res.json({ status: 'API running' });
});

app.use('/users', usersRouter);

app.post('/login', (req, res) => {
  const { username, password } = req.body;

  if (username === 'admin' && password === '1234') {
    const token = jwt.sign({ username }, SECRET, { expiresIn: '1h' });
    return res.json({ success: true, token });
  }

  res.status(401).json({ success: false });
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});