// server.js (Add this code to handle fetching questions)
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

// Middleware
app.use(bodyParser.json());

// MongoDB Setup
mongoose.connect('mongodb://localhost/usmle-exam', { useNewUrlParser: true, useUnifiedTopology: true });

// Question Schema
const questionSchema = new mongoose.Schema({
    question: String,
    options: [String],
    correct: String
});

const Question = mongoose.model('Question', questionSchema);

// Route to get questions
app.get('/questions', async (req, res) => {
    try {
        const questions = await Question.find();
        res.json(questions);  // Send questions as JSON
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch questions' });
    }
});

// Start server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
