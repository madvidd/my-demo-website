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

// Route to get all questions
app.get('/questions', async (req, res) => {
    try {
        const questions = await Question.find();
        res.json(questions);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Route to add a question (for admin)
app.post('/questions', async (req, res) => {
    const { question, options, correct } = req.body;
    const newQuestion = new Question({ question, options, correct });
    try {
        await newQuestion.save();
        res.status(201).send(newQuestion);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
