let questions = [];
fetch('/questions')
    .then(response => response.json())
    .then(data => {
        questions = data;
        loadQuestion();
        startTimer();
    });
