// routes/exam.js

const express = require('express');
const Question = require('../models/Question'); // The Question model
const protect = require('../middleware/auth'); // Protect route with JWT middleware
const router = express.Router();

// GET all exam questions
router.route('/').get(protect, async (req, res) => {
  try {
    const questions = await Question.find(); // Fetch questions from MongoDB
    res.json(questions); // Return questions as JSON
  } catch (error) {
    res.status(500).send('Server error');
  }
});

module.exports = router;
