const questions = [
    {
        question: "What does HTML stand for?",
        answers: [
            "Hyper Text Markup Language",
            "High Text Machine Language",
            "Hyperlink Text Management Language",
            "Home Tool Markup Language"
        ],
        correct: 0
    },

    {
        question: "Which language is used for styling web pages?",
        answers: [
            "HTML",
            "CSS",
            "JavaScript",
            "Python"
        ],
        correct: 1
    },

    {
        question: "Which language is used to make a webpage interactive?",
        answers: [
            "HTML",
            "CSS",
            "JavaScript",
            "SQL"
        ],
        correct: 2
    },

    {
        question: "Which symbol is used for an ID selector in CSS?",
        answers: [
            ".",
            "#",
            "*",
            "@"
        ],
        correct: 1
    },

    {
        question: "Which keyword declares a variable in JavaScript?",
        answers: [
            "variable",
            "let",
            "define",
            "int"
        ],
        correct: 1
    }
];

let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById("question");
const answersElement = document.getElementById("answers");
const nextButton = document.getElementById("nextBtn");
const quizElement = document.getElementById("quiz");
const resultElement = document.getElementById("result");
const scoreElement = document.getElementById("score");

function startQuiz() {
    currentQuestion = 0;
    score = 0;
    resultElement.classList.add("hide");
    quizElement.classList.remove("hide");

    showQuestion();
}

function showQuestion() {
    const question = questions[currentQuestion];

    questionElement.innerText =
        `${currentQuestion + 1}. ${question.question}`;

    answersElement.innerHTML = "";

    question.answers.forEach((answer, index) => {
        const button = document.createElement("button");

        button.innerText = answer;
        button.classList.add("answer-btn");

        button.addEventListener("click", () => {
            selectAnswer(index);
        });

        answersElement.appendChild(button);
    });

    nextButton.style.display = "none";
}

function selectAnswer(index) {
    const correctAnswer = questions[currentQuestion].correct;
    const buttons = document.querySelectorAll(".answer-btn");

    buttons.forEach(button => {
        button.disabled = true;
    });

    if (index === correctAnswer) {
        buttons[index].classList.add("correct");
        score++;
    } else {
        buttons[index].classList.add("wrong");
        buttons[correctAnswer].classList.add("correct");
    }

    nextButton.style.display = "block";
}

nextButton.addEventListener("click", () => {
    currentQuestion++;

    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
});

function showResult() {
    quizElement.classList.add("hide");
    resultElement.classList.remove("hide");

    scoreElement.innerText =
        `Your Score: ${score} / ${questions.length}`;
}

function restartQuiz() {
    startQuiz();
}

startQuiz();