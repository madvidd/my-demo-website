const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const app = express();
const port = process.env.PORT || 5000;

// Load environment variables from a .env file
dotenv.config();

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB connection URL (you can replace this with your MongoDB Atlas URL if using Atlas)
const dbURI = 'mongodb://localhost/my-demo-website'; // Use your database name

mongoose.connect(dbURI)
    .then(() => console.log('MongoDB connected for server...'))
    .catch((err) => console.log('Failed to connect to MongoDB:', err));

// Define your question schema
const questionSchema = new mongoose.Schema({
    question: String,
    options: [String],
    correct: String
});

// Create a model for the question schema
const Question = mongoose.model('Question', questionSchema);

// Route to get all questions
app.get('/questions', async (req, res) => {
    try {
        const questions = await Question.find();
        res.json(questions);
    } catch (err) {
        res.status(500).json({ message: 'Failed to retrieve questions', error: err });
    }
});

// Route to post a question (if needed)
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

// Start server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
