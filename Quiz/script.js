const container = document.querySelector(".container");
const questionBox = document.querySelector(".question");
const choiceBox = document.querySelector(".choices");
const nextBtn = document.querySelector(".nextBtn");
const scoreCard = document.querySelector(".scoreCard");
const alert = document.querySelector(".alert");
const startBtn = document.querySelector(".startBtn");
const timer = document.querySelector(".timer");

//make an array of objects that stores question, choices of questions and answer
const quiz = [
  {
    question: "Q. which of the following is not a CSS box model property?",
    choices: ["margine", "padding", "border-radius", "border-collapse"],
    answer: "border-collapse",
  },
  {
    question: "Q. which of the following is not a JavaScript data type?",
    choices: ["string", "boolean", "object", "float"],
    answer: "float",
  },
  {
    question: "Q. what is the purpose of the this keyword in JavaScript?",
    choices: [
      "It refers to the current function.",
      "It refers to the current object.",
      "It refers to the current value.",
      "It refers to the current string.",
    ],
    answer: "It refers to the current object.",
  },
];

//making variables
let currentQuestionIndex = 0;
let score = 0;
let quizOver = false;
let timeLeft = 25;
let timerID = null;

//arrow fuction to show question
const showQuestions = () => {
  const questionDetails = quiz[currentQuestionIndex];
  questionBox.textContent = questionDetails.question;

  choiceBox.textContent = "";
  for (let i = 0; i < questionDetails.choices.length; i++) {
    const currentChoice = questionDetails.choices[i];
    const choiceDiv = document.createElement("div");
    choiceDiv.textContent = currentChoice;
    choiceDiv.classList.add("choice");
    choiceBox.appendChild(choiceDiv);

    choiceDiv.addEventListener("click", () => {
      if (choiceDiv.classList.contains("selected")) {
        choiceDiv.classList.remove("selected");
      } else {
        choiceDiv.classList.add("selected");
      }
    });
  }
  if (currentQuestionIndex < quiz.length) {
    startTimer();
  }
};

//funtion to check ans
const checkAnswer = () => {
  const selectedChoice = document.querySelector(".choice.selected");
  if (selectedChoice.textContent === quiz[currentQuestionIndex].answer) {
    displayAlert("Correct Answer!");
    alert.style.backgroundColor = "#5d9b63";
    score++;
  } else {
    displayAlert(
      `Wrrong Answer! ${quiz[currentQuestionIndex].answer} is the correct answer`
    );
    alert.style.backgroundColor = "#f54a4a";
  }
  timeLeft = 25;
  currentQuestionIndex++;
  if (currentQuestionIndex < quiz.length) {
    showQuestions();
  } else {
    showScore();
    stopTimer();
  }
};

//function to show score
const showScore = () => {
  questionBox.textContent = "";
  choiceBox.textContent = "";
  scoreCard.textContent = `You Scored ${score} out of ${quiz.length}!`;
  nextBtn.textContent = "Play Again";
  quizOver = true;
  timer.style.display = "none";
  // const h3 = (document.createElement("h3").innerHTML =
  //   "You have completed this quiz!");
  // container.appendChild("h3");
  // displayAlert("You have completed this quiz!");
  // alert.style.backgroundColor = "#5d9b63";
};

//display alert
const displayAlert = (msg) => {
  alert.style.display = "block";
  alert.textContent = msg;
  setTimeout(() => {
    alert.style.display = "none";
  }, 3000);
};

//function to start timer
const startTimer = () => {
  clearInterval(timerID); //check if any timer
  timer.textContent = timeLeft;
  const countDown = () => {
    timeLeft--;
    timer.textContent = timeLeft;
    if (timeLeft === 0) {
      const confirmUser = confirm(
        "Timer Up!!! Do you want to play the quiz again"
      );
      if (confirmUser) {
        timeLeft = 25;
        startQuiz();
      } else {
        startBtn.style.display = "block";
        container.style.display = "none";
      }
    }
  };
  timerID = setInterval(countDown, 1000);
};

// function to stop timer
const stopTimer = () => {
  clearInterval(timerID);
};

//function to start quiz

const startQuiz = () => {
  timeLeft = 25;
  showQuestions();
  timer.style.display = "grid";
  shuffleQuetions();
};

// Funtion to shuffle question
const shuffleQuetions = () => {
  for (let i = quiz.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [quiz[i], quiz[j]] = [quiz[j], quiz[i]];
  }
};
///adding eventlinstener to start
startBtn.addEventListener("click", () => {
  startBtn.style.display = "none";
  container.style.display = "block";
  startQuiz();
});

nextBtn.addEventListener("click", () => {
  const selectedChoice = document.querySelector(".choice.selected");
  if (!selectedChoice && nextBtn.textContent === "Next") {
    displayAlert("Select your ans");
    alert.style.backgroundColor = "#5d9b63";
    return;
  }

  if (quizOver) {
    nextBtn.textContent = "Next";
    scoreCard.textContent = "";
    currentQuestionIndex = 0;
    showQuestions();
    quizOver = false;
    score = 0;
    startQuiz();
  } else {
    checkAnswer();
  }
});
