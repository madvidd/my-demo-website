const mongoose = require('mongoose');

// MongoDB connection URL
const dbURI = 'mongodb://localhost/usmle-exam'; // Or use your cloud database URI (e.g., MongoDB Atlas)

mongoose.connect(dbURI)
    .then(() => console.log('MongoDB connected for seeding...'))
    .catch((err) => console.log('Failed to connect to MongoDB:', err));

// Define your question schema
const questionSchema = new mongoose.Schema({
    question: String,
    options: [String],
    correct: String
});

// Create a model for the question schema
const Question = mongoose.model('Question', questionSchema);

// Seed function to add some sample questions
const seedQuestions = async () => {
    try {
        // Delete existing questions (optional)
        await Question.deleteMany();

        // Insert new questions
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

        await Question.insertMany(questions);
        console.log("Sample questions added to the database.");
    } catch (error) {
        console.error("Error during seeding:", error);
    } finally {
        mongoose.connection.close();  // Close the DB connection after seeding
    }
};

// Run the seeding function
seedQuestions();
