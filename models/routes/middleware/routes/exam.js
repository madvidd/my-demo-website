const express = require('express');
const Question = require('../models/Question');
const protect = require('../middleware/auth');  // Import the middleware
const router = express.Router();

// Secure the route by using 'protect' middleware
router.get('/exam', protect, async (req, res) => {
    try {
        // Assuming the question model has the logic to fetch questions based on performance
        const questions = await Question.find();  // Example: Fetching all questions
        res.json(questions);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving exam questions', error });
    }
});

module.exports = router;
