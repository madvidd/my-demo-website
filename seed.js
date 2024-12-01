require('dotenv').config(); // Load environment variables from the .env file
const mongoose = require('mongoose');

// MongoDB connection URL (from .env file)
const dbURI = process.env.MONGO_URI || 'mongodb://localhost/my-demo-website'; // Local DB fallback

// Define the question schema
const questionSchema = new mongoose.Schema({
    question: String,
    options: [String],
    correct: String
});

// Create a model for the Question schema
const Question = mongoose.model('Question', questionSchema);

const mongoose = require('mongoose');
mongoose.set('strictQuery', false); // or true depending on your preference

// Connect to MongoDB and seed questions
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('MongoDB connected for seeding...');
        seedQuestions();  // Call the seeding function
    })
    .catch((err) => {
        console.error('Failed to connect to MongoDB for seeding:', err);
    });

// Seed function to add questions
async function seedQuestions() {
    try {
        // Delete any existing questions (optional)
        await Question.deleteMany();

        // Add new sample questions
        const questions = [
            {
                question: "What is the capital of the USA?",
                options: ["Washington, D.C.", "New York", "Los Angeles", "Chicago"],
                correct: "Washington, D.C."
            },
            {
                question: "Which is the largest organ in the human body?",
                options: ["Heart", "Liver", "Skin", "Brain"],
                correct: "Skin"
            },
            {
                question: "What is the chemical symbol for water?",
                options: ["H2O", "O2", "CO2", "H2"],
                correct: "H2O"
            }
        ];

        await Question.insertMany(questions); // Insert questions into the DB
        console.log("Sample questions added to the database.");
    } catch (error) {
        console.error("Error during seeding:", error);
    } finally {
        mongoose.connection.close();  // Close the DB connection after seeding
    }
}
