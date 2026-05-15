const quizData = [
const questions = [
    {
        question: "According to the Bible, Moses and Aaron had a sister named what?",
        answers: [
                 "Jochebed", 
                 "Ruth", 
                 "Leah", 
                 "Miriam"
        ],
        correct: 4

    },
    {
        question: "According to the children's nursery rhyme, what type of ocean did Columbus sail in 1492?",
        answers: [
                "calm",
                "blue",
                "windy",
                "really big"

        ],
        correct: 1
    },
    {
        question: "Astronaut John Glenn served as a pilot in what branch of the military?",
        answers: [
                "Army",
                "Air Force",
                "Marines",
                "Navy"
        ],
        correct: 3
    },
    {
        question: "Backgammon is a how many player game?",
        answers: [
                "Two",
                "Three",
                "Four",
                "Six"
        ],
        correct: 1
    },
    {
        question: "Elephant tusks are made of what material?",
        answers: [
                "coral",
                "ivory",
                "bone",
                "calcium"
        ],
        correct: 2  
    },
    {
        question: "For a man and woman on a date, 'dutch treat' means what?",
        answers: [
                "the man pays",
                "the woman pays",
                "the Dutch pay",
                "each pays their own way"
        ],
        correct: 4
    },
    {
        question: "For what purpose would you use an awl?",
        answers: [
            "to shoot ducks",
            "to polish floors",
            "to make holes",
            "to weigh fruit"
        ],
        correct: 3
    },
    {
        question: "From what language does the term 'R.S.V.P.' originate?",
        answers: [
            "Russian",
            "Italian",
            "Portuguese",
            "French"
        ],
        correct: 4
    },
    {
        question: "From whom does the Lutheran Church get its name?",
        answers: [
            "Martin Luther King Jr",
            "Martin Luther",
            "Luther Vandross",
            "Lex Luthor"
        ],
        correct: 2
    },
    {
        question: "Gerry Adams is the president of what organization?",
        answers: [
            "Greenpeace",
            "NASCAR",
            "IBM 701",
            "PLO"
        ],
        correct: 3
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
