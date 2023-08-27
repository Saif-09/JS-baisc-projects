// Generate a random number between 1 and 100
let random = Math.floor(Math.random() * 100 + 1);

// Select relevant DOM elements
const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');
const p = document.createElement('p');

// Keep track of previous guesses and number of guesses
let prevGuess = [];
let numGuess = 1;
let playGame = true;

// Check if the game is still ongoing
if (playGame) {
  // Attach event listener to the "Submit" button
  submit.addEventListener('click', (e) => {
    e.preventDefault();
    // Get the user's guess and validate it
    const guess = parseInt(userInput.value);
    validateGuess(guess);
  });
}

// Validate the user's guess
function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('Please Enter a Valid Number');
  } else if (guess < 1) {
    alert('Please Enter a Number more than 1');
  } else if (guess > 100) {
    alert('Please Enter a Number less than 100');
  } else {
    prevGuess.push(guess);

    // Check if the maximum number of guesses has been reached
    if (numGuess > 10) {
      displayGuess(guess);
      displayMessage(`Game Over. Random number was ${random}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

// Compare the user's guess with the random number
function checkGuess(guess) {
  if (guess == random) {
    displayMessage(`You guessed it Right`);
    endGame();
  } else if (guess < random) {
    displayMessage(`Number is too low`);
  } else if (guess > random) {
    displayMessage(`Number is too High`);
  }
}

// Display the user's guess and update remaining guesses
function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess}     `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}

// Display a message in the "lowOrHi" element
function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

// End the game and set up for a new game
function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

// Start a new game
function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', (e) => {
    // Generate a new random number and reset game variables
    random = Math.floor(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
    playGame = true;
  });
}


