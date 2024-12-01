// models/Question.js

const mongoose = require('mongoose');

const QuestionSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true,
  },
  options: {
    type: [String], // Array of answer options
    required: true,
  },
  correctAnswer: {
    type: String,
    required: true, // The correct answer from options
  },
});

module.exports = mongoose.model('Question', QuestionSchema);
