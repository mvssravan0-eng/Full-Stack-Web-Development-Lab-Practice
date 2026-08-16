// Step 1: Store our data (Array of question/answer objects)
const flashcards = [
  { question: "What does HTML stand for?", answer: "HyperText Markup Language" },
  { question: "What language styles a webpage?", answer: "CSS (Cascading Style Sheets)" },
  { question: "Which HTML tag connects a JS file?", answer: "<script src='...'>" },
  { question: "What tool does JavaScript use to listen for clicks?", answer: "addEventListener()" }
];

// Track current question index & state
let currentIndex = 0;
let isShowingAnswer = false;

// Step 2: Select elements from HTML using IDs
const flashcardElement = document.getElementById("flashcard");
const cardLabel = document.getElementById("cardLabel");
const cardText = document.getElementById("cardText");
const nextBtn = document.getElementById("nextBtn");

// Step 3: Function to display current flashcard
function loadCard() {
  isShowingAnswer = false;
  cardLabel.textContent = "Question";
  cardText.textContent = flashcards[currentIndex].question;
  flashcardElement.classList.remove("revealed");
}

// Step 4: Event Listener - Flip Card on Click
flashcardElement.addEventListener("click", function () {
  if (isShowingAnswer) {
    // Flip back to Question
    cardLabel.textContent = "Question";
    cardText.textContent = flashcards[currentIndex].question;
    flashcardElement.classList.remove("revealed");
    isShowingAnswer = false;
  } else {
    // Show Answer
    cardLabel.textContent = "Answer";
    cardText.textContent = flashcards[currentIndex].answer;
    flashcardElement.classList.add("revealed");
    isShowingAnswer = true;
  }
});

// Step 5: Event Listener - Next Button Click
nextBtn.addEventListener("click", function () {
  // Move to next card index (loop back to start if at the end)
  currentIndex = (currentIndex + 1) % flashcards.length;
  loadCard();
});

// Load the first card when the page opens
loadCard();