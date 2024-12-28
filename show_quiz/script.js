let questions = [];
const synth = window.speechSynthesis;
let selectedCategory, shuffledQuestions, currentQuestionIndex, score;

document.getElementById('start-quiz').addEventListener('click', startQuiz);

fetch('questions.json')
  .then(response => response.json())
  .then(data => {
    questions = data;
  })
  .catch(error => console.error('Error loading questions:', error));

function startQuiz() {
  const category = document.getElementById('categories').value;
  selectedCategory = category;

  if (selectedCategory === "custom") {
    // Implement custom category logic here
    customQuizSetup();
  } else {
    shuffledQuestions = shuffle(questions.filter(q => q.category === selectedCategory));
    if (shuffledQuestions.length === 0) {
      alert("No questions available for this category. Please select another category.");
      return;
    }
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById("category-selection").style.display = "none";
    document.getElementById("quiz-container").style.display = "block";
    showQuestion();
  }
}

function showQuestion() {
  if (currentQuestionIndex >= shuffledQuestions.length) {
    endQuiz();
    return;
  }

  const questionObj = shuffledQuestions[currentQuestionIndex];
  document.getElementById('question').innerText = questionObj.question;
  document.getElementById('options').innerHTML = questionObj.options
    .map(option => `<li>${option}</li>`)
    .join("");

  speakText(`${questionObj.question} ${questionObj.options.join(", ")}`, listenAnswer);
}

function listenAnswer() {
  const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
  recognition.lang = "en-US";
  recognition.start();

  recognition.onresult = (event) => {
    const userAnswer = event.results[0][0].transcript.trim().toUpperCase();
    document.getElementById("recognized-text").innerText = `You said: ${userAnswer}`;
    checkAnswer(userAnswer);
  };
}

function checkAnswer(userAnswer) {
  const questionObj = shuffledQuestions[currentQuestionIndex];
  const correctAnswer = questionObj.answer;

  const answerMap = {
    "A": ["A","A.", "AE", "AA","8","e","A","A.", "AE", "AEE", "AA", "AAAA", "AAAAA","8","e","8.","E."],
    "B": ["B","B.","BE", "BB","B", "B.","BE", "BEE", "BB", "BBBB","be.","bee."],
    "C": ["C","C.","CE","CC","C", "C.","CE", "SEE", "SHEE", "CC", "SE","ee"],
    "D": ["D","D.","DE", "DD","D","D.", "DE", "DHE.", "DHEE", "DD", "DDDDD"]
  };

  const correct = answerMap[correctAnswer].includes(userAnswer);
  
  if (correct) {
    score++;
    speakText("Correct!");
  } else {
    speakText(`Wrong. The correct answer was ${correctAnswer}`);
  }
  
  currentQuestionIndex++;
  showQuestion();
}

function endQuiz() {
  const badge = score >= 4 ? "🏆 Excellent!" : score >= 3 ? "🥈 Good Job!" : "Keep Trying!";
  const message = score < 3 ? "You can improve more!" : `You scored ${score} points.`;
  
  speakText(`Quiz over. ${message}`, () => {
    document.getElementById("score").innerText = `${message} ${badge}`;
    document.getElementById("quiz-container").style.display = "none";
    document.getElementById("category-selection").style.display = "block";
  });
}

function speakText(text, callback) {
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.onend = callback;
  synth.speak(utterance);
}

function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

function customQuizSetup() {
  // Code for handling custom quiz setup
}
