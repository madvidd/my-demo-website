// routes/exam.js
const express = require('express');
const Question = require('../models/Question');  // Assuming you have a Question model
const protect = require('../middleware/auth');  // Import the protect middleware
const router = express.Router();

// Example: A protected route to get exam questions
router.get('/exam', protect, async (req, res) => {
    try {
        // Fetching all questions from the database (example)
        const questions = await Question.find();  // Adjust according to your database query
        res.json(questions);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving exam questions', error });
    }
});

module.exports = router;
