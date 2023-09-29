'use strict';

// Generate a random number between 1 and 20
let randomNum = Math.floor(Math.random()*20 + 1);
let score     = 20;
let highScore = 0;

// Take input from user and compare it with random number
let checkBtn  = document.querySelector('.btn.check').addEventListener('click', () => guessTheNumber())

// A display message function to print on html
function displayMessage(message){
    document.querySelector('.message').textContent = message;
}

// Compare it and provide hints to users
function guessTheNumber(){
    let guess = Number(document.querySelector('.guess').value);

    // No input
    if (!guess) {
        displayMessage('⛔ No number!');
    }
    // When guess is right
    else if (guess === randomNum) {
        displayMessage('🎉 Correct Number');
        // When users wins change the background color of screen
        document.querySelector('.number').textContent = randomNum;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        if(score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
          }
    }
    else if (guess !== randomNum){
        if (score > 1){
        displayMessage((guess > randomNum) ? '📈 Too high!' : '📉 Too low!');
        score--;
        document.querySelector('.score').textContent = score;
        }
        else {
            displayMessage('💥 You lost the game!');
            document.querySelector('.score').textContent = 0;
        }
    }

}

// reset button
const againBTN = document.querySelector('.btn.again');

//reset event handler
againBTN.addEventListener('click', () => {
  // reset score 
  score = 20;
  // reset secret number
  randomNum = Math.floor(Math.random() * 20) + 1;
  //reset message,score and number to initial values
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  //reset css values
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
})