// ===========
// QUIZ DATA 
// Later this will come from getQuestions.php
// ===========

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

// =========================
// VARIABLES
// =========================
let currentIndex = 0;
let score = 0;

document.getElementById("question");
document.getElementById("answers-container");
document.getElementById("next-btn");
document.getElementById("progress-bar");

// =========================
// LOAD QUESTION FUNCTION
// =========================
function loadQuestion() {

    const q = questions[currentIndex];

    questionEl.textContent = q.question;

    questionNumberEl.textContent = currentIndex + 1;

    answerButtons.forEach((btn, index) => {
        btn.textContent = q.answers[index];

        // Reset styles
        btn.style.backgroundColor = "";
        btn.style.color = "";

        btn.onclick = () => {
            checkAnswer(index);
        };
    });
}

// =========================
// CHECK ANSWER
// =========================
function checkAnswer(selectedIndex) {

    const correctIndex = questions[currentIndex].correct;

    if (selectedIndex === correctIndex) {
        score++;
        scoreEl.textContent = score;
    }

    answerButtons.forEach((btn, index) => {
        if (index === correctIndex) {
            btn.style.backgroundColor = "green";
            btn.style.color = "white";
        } else {
            btn.style.backgroundColor = "red";
            btn.style.color = "white";
        }
    });
}

// =========================
// NEXT QUESTION BUTTON
// =========================
nextBtn.addEventListener("click", () => {

    currentIndex++;

    if (currentIndex < questions.length) {
        loadQuestion();
    } else {
        localStorage.setItem("quizScore", score);
        window.location.href = "results.html";
    }
});

// =========================
// START QUIZ
// =========================
loadQuestion();
