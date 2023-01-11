import { Notify } from 'notiflix/build/notiflix-notify-aio';

/**
  |============================
  | Змінні
  |============================
*/
const form = document.querySelector('form');

/**
  |============================
  | Слухачі
  |============================
*/

form.addEventListener('submit', formSubmit);

/**
  |============================
  | Функції
  |============================
*/

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

function formSubmit(evt) {
  evt.preventDefault();

  // Питання! Нижче об`єкт - elements. Як йому передаються ключі delay, step, amount, та як JS розуміє де які елементи
  // привязати до ключів. Я знаю шо так можна, але ж не зрозумілі правила.

  const {
    elements: { delay, step, amount },
  } = evt.currentTarget;

  let numDalay = Number(delay.value);
  let numStep = Number(step.value);
  let numAmount = Number(amount.value);
  let i = 0;

  const intervalId = setInterval(() => {
    i += 1;
    if (i === numAmount) {
      clearInterval(intervalId);
    }
    createPromise(i, numDalay)
      .then(({ position, delay }) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
  }, numStep);
}
