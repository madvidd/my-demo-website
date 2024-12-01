// pages/smart-exam.js
import { useState, useEffect } from 'react';
import Link from 'next/link';

// Sample questions
const questions = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    correctAnswer: "Paris",
  },
  {
    question: "What is 2 + 2?",
    options: ["3", "4", "5", "6"],
    correctAnswer: "4",
  },
  {
    question: "Who wrote 'Hamlet'?",
    options: ["Shakespeare", "Dickens", "Hemingway", "Austen"],
    correctAnswer: "Shakespeare",
  },
];

export default function SmartExam() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  // Handle answer selection
  const handleAnswer = (answer) => {
    setAnswers({
      ...answers,
      [currentQuestion]: answer,
    });

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  // Calculate the score
  const calculateScore = () => {
    let score = 0;
    questions.forEach((q, index) => {
      if (answers[index] === q.correctAnswer) {
        score++;
      }
    });
    return score;
  };

  return (
    <div>
      <header>
        <h1>Smart Exam</h1>
      </header>

      <main>
        {showResults ? (
          <div>
            <h2>Results</h2>
            <p>You scored {calculateScore()} out of {questions.length}</p>
            <Link href="/">
              <a>Back to Home</a>
            </Link>
          </div>
        ) : (
          <div>
            <h2>{questions[currentQuestion].question}</h2>
            <div>
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(option)}
                  style={{ margin: '5px' }}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
