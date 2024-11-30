// script.js (Modify this to correctly fetch and display questions)
let currentQuestionIndex = 0;
let questions = [];

function loadQuestion() {
    const question = questions[currentQuestionIndex];
    document.getElementById('question-text').textContent = question.question;
    
    const optionsList = document.getElementById('options');
    optionsList.innerHTML = ''; // Clear previous options

    question.options.forEach(option => {
        const li = document.createElement('li');
        li.textContent = option;
        li.onclick = () => checkAnswer(option, question.correct);
        optionsList.appendChild(li);
    });
}

function checkAnswer(selectedOption, correctOption) {
    if (selectedOption === correctOption) {
        alert('Correct!');
    } else {
        alert('Incorrect!');
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        alert('You have completed the exam!');
    }
}

fetch('/questions')
    .then(response => response.json())
    .then(data => {
        questions = data;
        loadQuestion();  // Load the first question
    })
    .catch(err => {
        console.error('Failed to load questions:', err);
    });
