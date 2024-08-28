'use strict';

/*          ----------- declaration -----------          */

// a neat way to simplify getting elements by class name
let getClass = className => {
  const element = document.querySelector(`.${className}`);

  return element
    ? element
    : (console.error(`Couldn't find class: ${className}`), null);
};

let againButton = getClass('again');
let numDisplay = getClass(`screen`);
let message = getClass('message');
let guessedNumberInput = getClass('guess');
let checkButton = getClass('check');
let scoreValue = getClass('score__value');
let highScoreValue = getClass('high-score__value');

/*          ----------- util functions -----------          */
let generateRandom = () => {
  let random = Math.trunc(Math.random() * 20) + 1;
  console.log(`aaah you got me: ${random === 20 ? random - 1 : random + 1}`);
  return random;
};

let resetErrAnimation = element => {
  element.style.animation = 'none';
  requestAnimationFrame(() => {
    element.style.animation = '';
  });
};

let updateMessage = (text, color = '#fefae0') => {
  message.textContent = text;
  message.style.color = color;
};

let shakeErr = (msg = 'no message', element = message) => {
  message.classList.add('err');
  updateMessage(msg);
  resetErrAnimation(element);
};

/*          ----------- main -----------          */
let generatedNumber = generateRandom();
let score = 20;
scoreValue.textContent = score;
let gameOver = false;

let eventHandler = () => {
  //keeps checking guessed number
  let guessedNumber = Number(guessedNumberInput.value);

  // ensures that the input is number but no need as the type of input is number although the input type is set to number
  if (isNaN(guessedNumber)) {
    shakeErr('please enter a number');
    return;
  }

  if ((guessedNumber <= 0 || guessedNumber > 20) && !gameOver) {
    shakeErr('please a number between 1~20');
    return;
  }

  if (!gameOver) {
    if (guessedNumber === generatedNumber) {
      updateMessage('awesome you won!', '#283618');
      numDisplay.textContent = generatedNumber;
      if (Number(highScoreValue.textContent) < score) {
        highScoreValue.textContent = score;
      }
      gameOver = true;
    } else if (guessedNumber !== generatedNumber) {
      guessedNumber > generatedNumber
        ? shakeErr(`you're a bit high`)
        : shakeErr(`you're a bit low!`);

      scoreValue.textContent = --score;
    } else {
      shakeErr(`please hit the again button!`);
    }
  } else {
    if (gameOver) {
      shakeErr(`please hit the again button!`);
    } else {
      updateMessage('game over :(', '#780000');
      score = 0;
      scoreValue.textContent = score;
      gameOver = true;
    }
  }
};

checkButton.addEventListener('click', eventHandler);

againButton.addEventListener('click', () => {
  generatedNumber = generateRandom();
  numDisplay.textContent = '?';
  score = 20;
  scoreValue.textContent = score;
  updateMessage('start Guessing...');
  guessedNumberInput.value = '';

  gameOver = false;
});

guessedNumberInput.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    eventHandler();
  }
});
