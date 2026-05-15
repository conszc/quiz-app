const quizData = [
    {
        question: "What does HTML stand for?",
        answers: [
            "HyperText Markup Language",
            "HighText Machine Language",
            "Hyper Transfer Markup Language",
            "Home Tool Markup Language"
        ],
        correct: 0
    },
    {
        question: "Which language is used for styling websites?",
        answers: [
            "HTML",
            "Python",
            "CSS",
            "Java"
        ],
        correct: 2
    },
    {
        question: "Which symbol is used for IDs in CSS?",
        answers: [
            ".",
            "#",
            "@",
            "$"
        ],
        correct: 1
    }
];

let currentQuestion = 0;
let score = 0;
let answered = false;

const questionEl = document.getElementById("question");
const answersContainer = document.getElementById("answers-container");
const nextBtn = document.getElementById("next-btn");
const progressBar = document.getElementById("progress-bar");

function loadQuestion() {
    answered = false;
    answersContainer.innerHTML = "";

    const currentQuiz = quizData[currentQuestion];

    questionEl.textContent = currentQuiz.question;

    currentQuiz.answers.forEach((answer, index) => {
        const button = document.createElement("button");

        button.textContent = answer;
        button.classList.add("answer-btn");

        button.addEventListener("click", () => {
            if (answered) return;

            answered = true;

            const allButtons = document.querySelectorAll(".answer-btn");

            allButtons.forEach(btn => {
                btn.disabled = true;
            });

            if (index === currentQuiz.correct) {
                button.classList.add("correct");
                score++;
            } else {
                button.classList.add("wrong");
                allButtons[currentQuiz.correct].classList.add("correct");
            }
        });

        answersContainer.appendChild(button);
    });

    const progress = ((currentQuestion + 1) / quizData.length) * 100;
    progressBar.style.width = progress + "%";
}

nextBtn.addEventListener("click", () => {
    currentQuestion++;

    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        localStorage.setItem("quizScore", score);
        window.location.href = "results.html";
    }
});

loadQuestion();
