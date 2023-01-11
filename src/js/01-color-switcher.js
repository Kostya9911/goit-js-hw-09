function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');

startBtn.style.fontSize = '40px';
stopBtn.style.fontSize = '40px';

stopBtn.setAttribute('disabled', 'disabled');

let timerId = null;

startBtn.addEventListener('click', () => {
  startBtn.setAttribute('disabled', 'disabled');
  stopBtn.removeAttribute('disabled');

  timerId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
});

stopBtn.addEventListener('click', () => {
  startBtn.removeAttribute('disabled');
  stopBtn.setAttribute('disabled', 'disabled');
  clearInterval(timerId);
});
