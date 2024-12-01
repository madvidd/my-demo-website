// server.js (or app.js)

require('dotenv').config(); // Load environment variables from .env
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const examRoutes = require('./routes/exam'); // Import the exam routes
const authRoutes = require('./routes/auth'); // Import authentication routes
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(cors()); // Enable CORS for all requests
app.use(bodyParser.json()); // Parse JSON requests

// Routes
app.use('/api/exam', examRoutes); // API route for exams
app.use('/api/auth', authRoutes); // API route for authentication

// MongoDB connection
const mongoURI = process.env.MONGO_URI;
mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log('MongoDB connection error:', err));

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
