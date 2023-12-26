const quizData = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "Berlin", "Rome"],
        correctAnswer: "Paris"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Venus", "Mars", "Jupiter"],
        correctAnswer: "Mars"
    },
    {
        question: "What is the largest mammal in the world?",
        options: ["Elephant", "Blue whale", "Giraffe"],
        correctAnswer: "Blue whale"
    }
];

function buildQuiz() {
    const quizContainer = document.getElementById("quiz");

    quizData.forEach((questionData, index) => {
        const questionElement = document.createElement("div");
        questionElement.classList.add("question");
        questionElement.innerHTML = `<p>${index + 1}. ${questionData.question}</p>`;

        const optionsList = document.createElement("ul");
        optionsList.classList.add("options");

        questionData.options.forEach((option, optionIndex) => {
            const optionElement = document.createElement("li");
            optionElement.classList.add("option");
            optionElement.innerHTML = `<input type="radio" name="question${index}" value="${option}">${option}`;
            optionsList.appendChild(optionElement);
        });

        questionElement.appendChild(optionsList);
        quizContainer.appendChild(questionElement);
    });
}

function submitQuiz() {
    const quizContainer = document.getElementById("quiz");
    const userAnswers = [];
    const allOptions = quizContainer.querySelectorAll('input[type="radio"]:checked');

    allOptions.forEach(option => {
        userAnswers.push(option.value);
    });

    showResult(userAnswers);
}

function showResult(userAnswers) {
    const resultContainer = document.getElementById("result");
    let score = 0;

    quizData.forEach((questionData, index) => {
        if (questionData.correctAnswer === userAnswers[index]) {
            score++;
        }
    });

    resultContainer.innerHTML = `<p>Your score: ${score} out of ${quizData.length}</p>`;
}

buildQuiz();