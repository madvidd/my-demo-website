// Function to fetch questions from the backend
function fetchQuestions() {
  // Get the JWT token from localStorage (or sessionStorage, or cookies)
  const token = localStorage.getItem('jwtToken'); // or sessionStorage

  if (!token) {
    alert('Please login to access the exam.');
    return;
  }

  // Make a GET request to /api/exam with Authorization header
  fetch('/api/exam', {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`, // Send token in the Authorization header
    }
  })
  .then(response => response.json())
  .then(data => {
    const questionsList = document.getElementById('questions-list');
    questionsList.innerHTML = ''; // Clear any existing questions

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

// Add event listener to the button
document.getElementById('start-exam-btn').addEventListener('click', fetchQuestions);
