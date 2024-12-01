require('dotenv').config(); // Load environment variables from the .env file
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5001;

// Middleware to parse JSON and handle cross-origin requests
app.use(express.json());
app.use(cors());

// MongoDB connection (using environment variable from .env)
const dbURI = process.env.MONGO_URI || 'mongodb://localhost/my-demo-website'; // Local DB fallback

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected...'))
    .catch((err) => console.log('Failed to connect to MongoDB:', err));

// Define the question schema for your exam
const questionSchema = new mongoose.Schema({
    question: String,
    options: [String],
    correct: String
});

// Create a model for the Question schema
const Question = mongoose.model('Question', questionSchema);

// Route to get all questions from the database
app.get('/questions', async (req, res) => {
    try {
        const questions = await Question.find();
        res.json(questions);
    } catch (err) {
        res.status(500).json({ message: 'Failed to retrieve questions', error: err });
    }
});

// Route to post new questions (for admins to add questions to the database)
app.post('/questions', async (req, res) => {
    const { question, options, correct } = req.body;
    
    try {
        const newQuestion = new Question({ question, options, correct });
        await newQuestion.save();
        res.status(201).json(newQuestion);
    } catch (err) {
        res.status(500).json({ message: 'Failed to save the question', error: err });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
