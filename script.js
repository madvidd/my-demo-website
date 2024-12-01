// Function to fetch questions from the backend
function fetchQuestions() {
    const token = localStorage.getItem('jwtToken'); // Get JWT token from localStorage

    if (!token) {
        alert('Please login to access the exam.');
        return;
    }

    // Display loading message
    document.getElementById('loading-message').style.display = 'block';

    // Make a GET request to /api/exam with Authorization header
    fetch('/api/exam', {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`,
        }
    })
    .then(response => response.json())
    .then(data => {
        // Hide loading message
        document.getElementById('loading-message').style.display = 'none';
        displayQuestion(data, 0);  // Display the first question
    })
    .catch(error => {
        console.error('Error fetching questions:', error);
    });
}

// Function to display a question
let currentQuestionIndex = 0;
let userAnswers = [];

function displayQuestion(questions, index) {
    const question = questions[index];
    const questionContainer = document.getElementById('question-container');
    const progress = document.getElementById('progress');
    const submitButton = document.getElementById('submit-btn');

    // Update question container
    questionContainer.innerHTML = `
        <h3>${question.question}</h3>
        <ul>
            ${question.options.map((option, i) => `
                <li><input type="radio" name="question${index}" value="${option}"> ${option}</li>
            `).join('')}
        </ul>
    `;

    // Update progress
    progress.innerText = `Question ${index + 1} of ${questions.length}`;

    // Update submit button visibility
    if (index === questions.length - 1) {
        submitButton.style.display = 'block';
    }

    // Store the question index and answers
    userAnswers[index] = null;  // Placeholder for user answer

    // Next Question Button Logic
    if (index < questions.length - 1) {
        setTimeout(() => displayQuestion(questions, index + 1), 3000);  // Auto next after 3 seconds (for demo)
    }
}

// Event listener to start the exam
document.getElementById('start-exam-btn').addEventListener('click', function() {
    document.getElementById('start-exam-btn').style.display = 'none';
    document.getElementById('exam-container').style.display = 'block';
    fetchQuestions();
});

// Handle submit
document.getElementById('submit-btn').addEventListener('click', function() {
    alert('Exam Submitted! Your answers: ' + JSON.stringify(userAnswers));
});
