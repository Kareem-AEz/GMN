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

/*          ----------- main -----------          */
let generatedNumber = generateRandom();
let n = 0;

let eventHandler = () => {
  //keeps checking guessed number
  let guessedNumber = Number(guessedNumberInput.value);

  // ensures that the input is number but no need as the type of input is number
  if (isNaN(guessedNumber)) {
    updateMessage('please enter a number');
    message.classList.add('err');
    resetErrAnimation(message);
    return;
  }

  if (guessedNumber <= 0 || guessedNumber > 20) {
    updateMessage('please a number between 1~20');
    message.classList.add('err');
    resetErrAnimation(message);
    return;
  }

  if (Number(scoreValue.textContent) > 1) {
    if (guessedNumber === generatedNumber) {
      updateMessage('awesome you won!', '#283618');
      numDisplay.textContent = generatedNumber;
      if (Number(highScoreValue.textContent) < Number(scoreValue.textContent)) {
        highScoreValue.textContent = scoreValue.textContent;
      }
      n++;
    } else if (guessedNumber > generatedNumber) {
      updateMessage(`you're a bit high!`);
    } else if (guessedNumber < generatedNumber) {
      updateMessage(`you're a bit low!`);
    }

    if (guessedNumber !== generatedNumber) {
      message.classList.add('err');
      resetErrAnimation(message);

      scoreValue.textContent = Number(scoreValue.textContent) - 1;
    }

    if (numDisplay.textContent !== '?' && n > 1) {
      updateMessage('please hit the again button!');
      resetErrAnimation(message);
    }
  } else {
    if (n >= 1) {
      updateMessage('please hit the again button!');
      resetErrAnimation(message);
    } else {
      updateMessage('game over :(', '#780000');
      scoreValue.textContent = '0';
      console.log('go');
      n++;
    }
  }
};

checkButton.addEventListener('click', eventHandler);

againButton.addEventListener('click', () => {
  generatedNumber = generateRandom();
  numDisplay.textContent = '?';
  scoreValue.textContent = '20';
  updateMessage('start Guessing...');
  n = 0;
});

guessedNumberInput.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    eventHandler();
  }
});
