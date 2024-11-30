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

// MongoDB connection URL
const dbURI = 'mongodb://localhost/usmle-exam'; // Or your MongoDB Atlas URI

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

// Start server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
