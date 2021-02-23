var questionNum = 1;
var timeLeft = 75;
var correctAnswer = 0;
var yourScore = 0;
var options = [];
var questionString = "";

$(document).ready(function () {
  showQuestion(questionNum);
});
setInterval(function () {
  timeLeft--;
  if (timeLeft < 1) {
    showFinalizedScore();
  } else {
    $("#timeLeft").html(timeLeft + " s");
  }
}, 1000);
$("body").delegate(".answer-option", "click", function () {
  questionNum++;
  var selectedAnswer = $(this).val();
  if (selectedAnswer == correctAnswer) {
    yourScore = yourScore + 5;
  } else {
    timeLeft = timeLeft - 5;
  }
  if (questionNum <= 5) {
    showQuestion(questionNum);
  } else {
    showFinalizedScore();
  }
});

function showFinalizedScore() {
  $("#your-score").show();
  $(".question-box").css("display", "none");
  $("#score-display").html("Your Score : " + yourScore);
}
function showQuestion(quesstionNumber) {
  var question = questions[quesstionNumber - 1];
  questionString = question.question;
  correctAnswer = question.correctAnswer;
  options = question.answers;
  $("#question").html("");
  $("#question").html(questionString);
  $("#answersSection").html("");
  var optionsHTML = ``;
  var i = 1;
  options.forEach((element) => {
    optionsHTML += `<p><input type="radio" class="answer-option" value="${i}" name="question" /> ${element}</p>`;
    i++;
  });
  $("#answersSection").html(optionsHTML);
}

var questions = [
  {
    question: "Which of the following is not a commonly used data type?",
    answers: ["Boolean", "String", "While", "Integer"],
    correctAnswer: 3,
  },

  {
    question:
      "_______ is the process of finding errors and fixing them within a program.",
    answers: ["Compiling", "Executing", "Debugging", "Scanning"],
    correctAnswer: 3,
  },

  {
    question:
      "What is the process of planning out your code without actually writing any code called?",
    answers: ["Pseudocode", "Planning", "Development", "Staging"],
    correctAnswer: 1,
  },

  {
    question:
      "Which page of the Chrome developer tools displays error messages caused by a program?",
    answers: ["Application", "Console", "Sources", "Elements"],
    correctAnswer: 2,
  },

  {
    question: "Which is a correct variable declaration in Javascript?",
    answers: [
      "var = isGold true;",
      "isGold = true;",
      "var = true;",
      "var isGold = true;",
    ],
    correctAnswer: 4,
  },
];
