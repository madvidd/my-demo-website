let currentQuestionIndex = 0;
let timer;
let timeLeft = 600; // 10 minutes in seconds
let userAnswers = [];

const questions = [
    {
        question: "What is the primary treatment for bacterial meningitis?",
        options: ["Penicillin", "Amoxicillin", "Ciprofloxacin", "Vancomycin"],
        correct: "Vancomycin"
    },
    {
        question: "Which of the following is an anticonvulsant?",
        options: ["Ibuprofen", "Diazepam", "Hydrocodone", "Lisinopril"],
        correct: "Diazepam"
    }
    // Add more questions here
];

function startTimer() {
    timer = setInterval(function() {
        if (timeLeft > 0) {
            timeLeft--;
            document.getElementById("time-left").innerText = `Time Left: ${Math.floor(timeLeft / 60)}:${timeLeft % 60}`;
        } else {
            clearInterval(timer);
            alert("Time is up! Exam Over.");
            submitExam();
        }
    }, 1000);
}

function loadQuestion() {
    const question = questions[currentQuestionIndex];
    document.getElementById("question-text").innerText = question.question;
    const options = document.getElementById("options");
    options.innerHTML = "";
    
    question.options.forEach((option) => {
        const li = document.createElement("li");
        li.innerText = option;
        li.onclick = () => selectAnswer(option);
        options.appendChild(li);
    });
}

function selectAnswer(answer) {
    userAnswers[currentQuestionIndex] = answer;
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        alert("You have completed the exam!");
        submitExam();
    }
}

function submitExam() {
    let score = 0;
    questions.forEach((q, index) => {
        if (userAnswers[index] === q.correct) {
            score++;
        }
    });
    alert(`Your score is: ${score}/${questions.length}`);
}

window.onload = () => {
    loadQuestion();
    startTimer();
};
