'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);

const displayMessage = message => {
  document.querySelector('.message').textContent = message;
};
const displayNumber = number => {
  document.querySelector('.number').textContent = number;
};
const changeWidth = value => {
  document.querySelector('.number').style.width = value;
};

let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    displayMessage('⛔️ No number');
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number');

    document.querySelector('body').style.backgroundColor = '#60b347';
    changeWidth('30rem');
    displayNumber(secretNumber);

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too High' : '📉 Too Low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('😭 You lost the game');
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(secretNumber);
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.guess').value = '';
  displayMessage('Start guessing...');
  displayNumber('?');
  changeWidth('15rem');
});

//////////////////////////////////////////
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct answer😃'

// document.querySelector('.number').textContent = 12;
// document.querySelector('.score').textContent = 15;

// document.querySelector('.guess').value = 33;

///////////////////////////////////////////////

// else if (guess > secretNumber){
//     if(score > 1){
//     document.querySelector('.message').textContent = '📈 Too High'
//     score--;
//     document.querySelector('.score').textContent = score;
//     } else {
//     document.querySelector('.message').textContent = '😭 You lost the game'
//         document.querySelector('.score').textContent = 0;
//     }
// } else if(guess < secretNumber) {
//     if(score > 1){
//         document.querySelector('.message').textContent = '📉 Too Low'
//         score--;
//         document.querySelector('.score').textContent = score;
//         } else {
//         document.querySelector('.message').textContent = '😭 You lost the game'
//             document.querySelector('.score').textContent = 0;
//         }
// }
