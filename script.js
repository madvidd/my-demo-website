// script.js

// Function to fetch questions from the Netlify function
function fetchQuestions() {
    // URL for the Netlify function (get-questions)
    fetch('/.netlify/functions/get-questions')
        .then(response => response.json())
        .then(data => {
            // Populate the questions on the page
            const questionsList = document.getElementById('questions-list');
            questionsList.innerHTML = ''; // Clear any previous content

            data.forEach(question => {
                const li = document.createElement('li');
                li.textContent = `${question.question}`;
                questionsList.appendChild(li);
            });
        })
        .catch(error => {
            console.error('Error fetching questions:', error);
        });
}

// Call the fetchQuestions function when the page loads
document.addEventListener('DOMContentLoaded', fetchQuestions);
