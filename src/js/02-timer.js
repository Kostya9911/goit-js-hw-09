import flatpickr from 'flatpickr';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import 'flatpickr/dist/flatpickr.min.css';

refs = {
  days: document.querySelector('span[data-days]'),
  hours: document.querySelector('span[data-hours]'),
  minutes: document.querySelector('span[data-minutes]'),
  seconds: document.querySelector('span[data-seconds]'),
};

const startBtn = document.querySelector('button[data-start]');
const input = document.querySelector('input[type="text"]');
const startTime = new Date().getTime();

startBtn.setAttribute('disabled', 'disabled');

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0].getTime());
  },
};

const fp = flatpickr(input, options);
let chosenDate = null;

startBtn.addEventListener('click', startTimer);
input.addEventListener('change', () => {
  chosenDate = fp.selectedDates[0].getTime();
  if (chosenDate <= startTime) {
    Notify.failure('Please choose a date in the future', {
      timeout: 3000,
    });
    startBtn.setAttribute('disabled', 'disabled');
  } else startBtn.removeAttribute('disabled');
});

function startTimer() {
  let timeToEnd = chosenDate - Date.now();
  startBtn.setAttribute('disabled', 'disabled');
  timer(timeToEnd);
}

function timer(timeToEnd) {
  const intervalId = setInterval(() => {
    timeToEnd -= 1000;
    const { days, hours, minutes, seconds } = convertMs(timeToEnd);
    updateTimerFace({ days, hours, minutes, seconds });
    if (timeToEnd <= 1000) {
      Notify.success(`End of sale`);
      startBtn.removeAttribute('disabled');
    }
  }, 1000);
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = addLeadingZero(Math.floor(ms / day));
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}
function updateTimerFace({ days, hours, minutes, seconds }) {
  refs.days.textContent = `${days}`;
  refs.hours.textContent = `${hours}`;
  refs.minutes.textContent = `${minutes}`;
  refs.seconds.textContent = `${seconds}`;
}
