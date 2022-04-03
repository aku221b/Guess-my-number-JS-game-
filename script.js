'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
document.querySelector('.again').addEventListener('click', function () {
  let newSecertNumber = Math.trunc(Math.random() * 20) + 1;
  secretNumber = newSecertNumber;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = 20;
  document.querySelector('body').style.backgroundColor = 'black';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.guess').value = '';
  score = 20;
});

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'You guessed the number!';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    highscore = Math.max(score, highscore);
    document.querySelector('.highscore').textContent = highscore;
  } else {
    if (score === 1) {
      document.querySelector('body').style.backgroundColor = '#FF0000';
      document.querySelector('.message').textContent = 'You lose!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      if (guess < secretNumber && score > 0) {
        score--;
        document.querySelector('.score').textContent = score;
        document.querySelector('.message').textContent = 'too low';
      } else if (guess > secretNumber && score > 0) {
        score--;
        document.querySelector('.score').textContent = score;
        document.querySelector('.message').textContent = 'too high';
      }
    }
  }
});
