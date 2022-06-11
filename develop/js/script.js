// DOM Elements 
const start = document.getElementById("start");
const begin = document.getElementById("begin");
const timer = document.getElementById("timer");
const quiz = document.querySelector(".quiz-container");

const singleQuestion = document.getElementById("singleQuestion")
const questionsContainer = document.getElementById("questions-container");
const buttonsContainer = document.querySelector(".buttons-container");

// event listeners
const selectOne = document.getElementById("selectOne");
const selectTwo = document.getElementById("selectTwo");
const selectThree = document.getElementById("selectThree");
const selectFour = document.getElementById("selectFour");

// buttons container


const finalScore = document.getElementById("finalscore")
const checkAnswer = document.getElementById("check")


// quiz speciifc variables 
let timeClock;
let timeLeft;

// let timeLeft = 60;
let startScore = 0;
let answers = [];
let currentQuestion = 0;

questionsContainer.style.display = "none";

// the quiz !!!
let codeQuiz = [
    {
        question: "Arrays in JavaScript can be used to stored...",
        answers: [
            { text: "booleans", correct: false },
            { text: "objects", correct: false },
            { text: "strings", correct: false },
            { text: "all of the above my guy", correct: true }
        ],
    },
    {
        question: "Who wrote Eloquent JavaScript, 3rd Edition?",
        answers: [
            { text: "David Warner", correct: false },
            { text: "Joe Biden", correct: false },
            { text: "Marijn Haverbeke", correct: true },
            { text: "all of the above my guy", correct: true }
        ],
    },
    {
        question: "Mac or PC?",
        answers: [
            { text: "Mac", correct: false },
            { text: "It's subjective! Let people decide for themselves!! (Mac)", correct: true },
            { text: "Linux", correct: false },
            { text: "PC", correct: false }
        ],
    },
    {
        question: "What is 'this' used for?",
        answers: [
            { text: "A pronoun", correct: false },
            { text: "The scoping of objects", correct: true },
            { text: "variable declaration", correct: false },
            { text: "function calls", correct: false }
        ],
    },
    {
        question: "What should you do when you have a question about a particular technology or library you're working with?",
        answers: [
            { text: "Spam your dev friends inboxes with pleas for help", correct: false },
            { text: "Give up and go back to sales", correct: false },
            { text: "Read the docs", correct: true },
            { text: "Meditate and comminicate with the universe. Something will come sooner or later!", correct: false }
        ],
    },
    {
        question: "What is commonly used in Web Development for styling pages?",
        answers: [
            { text: "Express", correct: false },
            { text: "handlebars", correct: false },
            { text: "HTML", correct: false },
            { text: "CSS", correct: true }
        ],
    },

];

// page functions 

const startQuiz = () => {
    begin.style.display = "none";
    timeLeft = 60;
    startTime();
    displayQuestion();
}

const startTime = () => {
    timeClock = setInterval(function () {
        console.log(timer);
        timeLeft--;
        timer.textContent = timeLeft;
        if (timeClock < 0) {
            clearInterval(timer);
            timer.textContent = "Times up!"

            timesUp();
        }
    }, 1000);
}

const displayQuestion = () => {
    const nextQuestion = (codeQuiz) => {
        question.innerText = codeQuiz.question;
        selectOne.innerText = codeQuiz.answers[0].text;
        selectOne.setAttribute("correct-check", codeQuiz.answers[0].correct);

        selectTwo.innerText = codeQuiz.answers[1].text;
        selectTwo.setAttribute("correct-check", codeQuiz.answers[1].correct);

        selectThree.innerText = codeQuiz.answers[2].text;
        selectThree.setAttribute("correct-check", codeQuiz.answers[2].correct);

        selectFour.innerText = codeQuiz.answers[3].text;
        selectFour.setAttribute("correct-check", codeQuiz.answers[3].correct);
    };

    questionsContainer.style.display = "block";
    nextQuestion(codeQuiz[currentQuestion]);
}

const answerCheck = () => {
    const nextQuestion = (codeQuiz) => {
        question.innerText = codeQuiz.question;
        selectOne.innerText = codeQuiz.answers[0].text;
        selectOne.setAttribute("correct-check", codeQuiz.answers[0].correct);

        selectTwo.innerText = codeQuiz.answers[1].text;
        selectTwo.setAttribute("correct-check", codeQuiz.answers[1].correct);

        selectThree.innerText = codeQuiz.answers[2].text;
        selectThree.setAttribute("correct-check", codeQuiz.answers[2].correct);

        selectFour.innerText = codeQuiz.answers[3].text;
        selectFour.setAttribute("correct-check", codeQuiz.answers[3].correct);
    };

    let correct = buttonsContainer.getAttribute("correct-check");
    if (correct == "true") {
        startScore += 10;
        console.log(startScore);
    } else {
        timeLeft -= 5
        verifyContent = "BUZZ! WRONG!!!"
    }
    if (currentQuestion < codeQuiz.length - 1) {
        currentQuestion++;
        nextQuestion(codeQuiz[currentQuestion])
    } else {
        clearInterval(timeClock);
        timer.textContent = "Completed!";

        timesUp();
    }
}

// sends user message that time is up 
const timesUp = () => {
    questionsContainer.style.display = "none";
    console.log("Score: ", startScore);
}

selectOne.addEventListener("click", answerCheck);
selectTwo.addEventListener("click", answerCheck);
selectThree.addEventListener("click", answerCheck);
selectFour.addEventListener("click", answerCheck);

begin.addEventListener("click", startQuiz);