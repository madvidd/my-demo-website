require('dotenv').config(); // Load environment variables from .env file
const express = require('express');
const mongoose = require('mongoose');
const app = express();

// Middleware to parse JSON
app.use(express.json());

// Ensure the correct port is used (5000 or the one in .env)
const PORT = process.env.PORT || 5000;

// MongoDB URI from .env (local or cloud MongoDB)
const mongoURI = process.env.MONGO_URI || 'mongodb://localhost/my-demo-website';

// Connect to MongoDB
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('MongoDB connected...');
    })
    .catch((err) => {
        console.error('MongoDB connection error:', err);
    });

// Define a simple route to test the server
app.get('/', (req, res) => {
    res.send('Hello, world! Your server is up and running!');
});

// Example route for getting questions (you can add more API routes as needed)
app.get('/questions', async (req, res) => {
    try {
        // Assuming you have a `Question` model defined
        const questions = await Question.find();
        res.json(questions);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching questions', error: err });
    }
});

// Start the server and listen on the defined port
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
