// app.js
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const examRoutes = require('./routes/exam');  // Import exam routes

dotenv.config();  // Load environment variables from .env

const app = express();

// Middleware
app.use(express.json());  // To parse incoming JSON requests

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('MongoDB connected');
}).catch((err) => {
    console.error('MongoDB connection error:', err);
});

// Use the exam routes
app.use('/api', examRoutes);  // All exam routes will be prefixed with '/api'

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
