// app.js
require('dotenv').config(); // Load environment variables

const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const app = express();

// Middleware to parse JSON data
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.DB_URI || 'mongodb://localhost:27017/usmle_exam', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Failed to connect to MongoDB', err));

// Route to test if server is running
app.get('/', (req, res) => {
  res.send('USMLE Exam App is running!');
});

// Example route to get exam questions (protected by JWT)
app.get('/exam-questions', protect, (req, res) => {
  res.json({ message: 'Here are the exam questions!' });
});

// Middleware to protect routes
function protect(req, res, next) {
  const token = req.headers.authorization && req.headers.authorization.split(' ')[1];
  if (!token) {
    return res.status(401).json({ message: 'No token provided, authorization denied' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'default_jwt_secret');
    req.user = decoded.userId;
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Token is not valid' });
  }
}

// Start server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
