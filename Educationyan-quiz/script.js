const progressBar = document.querySelector(".progress-bar"),
  progressText = document.querySelector(".progress-text");
const startBtn = document.querySelector(".start");
const submitBtn = document.querySelector(".submit");
const nextBtn = document.querySelector(".next");
const numQuestions = document.getElementById("num-questions");
const category = document.getElementById("category");
const difficulty = document.getElementById("difficulty");
const timePerQuestion = document.getElementById("time");
const quiz = document.querySelector(".quiz");
const startScreen = document.querySelector(".start-screen");
const endScreen = document.querySelector(".end-screen");
const finalScore = document.querySelector(".final-score");
const totalScore = document.querySelector(".total-score");
const restartBtn = document.querySelector(".restart");
const finalSubmitBtn = document.querySelector(".final-submit");
const questionText = document.querySelector(".question");
const answerDiv = document.querySelectorAll(".answer");
const questionNumber = document.querySelector(".number");
const correctMusic = new Audio("correct-6033.mp3");
const wrongtMusic = new Audio("wrong.mp3");

const progress = (value) => {
  const persentage = (value / time) * 100;
  progressBar.style.width = `${persentage}%`;
  progressText.innerHTML = `${value}s`;
};

let question,
  time = 30,
  score = 0,
  currentQuestion,
  timer;

const startQuiz = () => {
  startScreen.classList.add("hide");
  quiz.classList.remove("hide");
  currentQuestion = 1;
  showQuestion();
  finalSubmitBtn.style.display = "block";
  //   console.log(quizQues[0].queimg);
};

startBtn.addEventListener("click", startQuiz);

const showQuestion = () => {
  // const answerWrapper = document.querySelector(".answer-wrapper");

  questionText.innerHTML = quizQues[0].queimg;

  answerDiv.forEach((ans) => {
    ans.addEventListener("click", () => {
      if (!ans.classList.contains("checked")) {
        answerDiv.forEach((ans) => {
          ans.classList.remove("selected");
        });
        ans.classList.add("selected");
        submitBtn.disabled = false;
      }
    });
  });
  //after updaring question
  time = timePerQuestion.value;
  startTimer(time);
};

const startTimer = (time) => {
  timer = setInterval(() => {
    if (time >= 0) {
      progress(time);
      time--;
      // if (time < 0) {
      //   progressText.innerHTML = "0";
      // }
    } else {
      checkAnswer();
    }
  }, 1000);
};

submitBtn.addEventListener("click", () => {
  checkAnswer();
  notSelected();
});

const checkAnswer = () => {
  clearInterval(timer);
  const selectedAnswer = document.querySelector(".answer.selected");
  const selectedAnswerText = document.querySelector(".answer.selected .text");
  if (selectedAnswer) {
    if (selectedAnswerText.innerHTML === quizQues[0].answer) {
      score++;
      selectedAnswer.classList.add("correct");
      correctMusic.play();
    } else {
      selectedAnswer.classList.add("wrong");
      wrongtMusic.play();
      const correctAnswer = document
        .querySelectorAll(".answer")
        .forEach((ans) => {
          if (
            ans.querySelector(".text").innerHTML ===
            quizQues[currentQuestion - 1].answer
          ) {
            ans.classList.add("correct");
            ans.classList.add("selected");
          }
        });
    }
    //add correct class in correct ans
  } else {
    const correctAnswer = document
      .querySelectorAll(".answer")
      .forEach((ans) => {
        if (
          ans.querySelector(".text").innerHTML ===
          quizQues[currentQuestion - 1].answer
        ) {
          ans.classList.add("correct");
          ans.classList.add("selected");
        }
      });
  }

  const answerDiv = document.querySelectorAll(".answer");
  answerDiv.forEach((ans) => {
    ans.classList.add("checked");
  });

  submitBtn.style.display = "none";
  nextBtn.style.display = "block";
};

const notSelected = () => {
  if (
    (Options = document.querySelectorAll(".answer").forEach((ans) => {
      ans.classList.contains("selected", "checked");
    }))
  ) {
    score++;
  } else {
    score = score;
  }
};

nextBtn.addEventListener("click", () => {
  nextQuestion();
  nextBtn.style.display = "none";
  submitBtn.style.display = "block";
  reset();
  // remove marked
});

const nextQuestion = () => {
  if (currentQuestion < quizQues.length) {
    currentQuestion++;
    questionNumber.innerHTML = `Question <span class = "current">${currentQuestion}</span><span class= "total">/${quizQues.length}<span>`;
    questionText.innerHTML = quizQues[currentQuestion].queimg;
  } else {
    showScore();
  }
};

const reset = () => {
  startTimer(time);
  options = document.querySelectorAll(".answer").forEach((ans) => {
    ans.classList.remove("selected", "correct", "wrong", "checked");
  });
};

const showScore = () => {
  endScreen.classList.remove("hide");
  quiz.classList.add("hide");
  finalScore.innerHTML = score;
  totalScore.innerHTML = `/${quizQues.length}`;
};

finalSubmitBtn.addEventListener("click", showScore);

restartBtn.addEventListener("click", () => {
  window.location.reload();
});
