// Function to fetch questions from the backend
function fetchQuestions() {
    // Assuming the token is available in localStorage or a similar storage mechanism
    const token = localStorage.getItem('jwtToken'); // Modify based on your token storage

    // URL for the backend route (/exam)
    fetch('/exam', {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}` // Send the JWT token in the header
        }
    })
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
