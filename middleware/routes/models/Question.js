// models/Question.js
const mongoose = require('mongoose');

// Define the schema for the exam questions
const questionSchema = new mongoose.Schema({
    questionText: { type: String, required: true },
    options: [{ type: String }],
    correctAnswer: { type: String, required: true },
    // Add more fields as per your requirement
});

// Create and export the Question model
module.exports = mongoose.model('Question', questionSchema);
