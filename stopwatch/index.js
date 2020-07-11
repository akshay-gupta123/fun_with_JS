const durationInput = document.querySelector('#duration');
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');
const circle = document.querySelector('circle');

const perimeter = circle.getAttribute('r') * 2 * Math.PI;
circle.setAttribute('stroke-dasharray', perimeter);

let duration;
const timer = new Timer(durationInput, startButton, pauseButton, {
  onStart(durationInput) {
    duration = durationInput;
  },
  onTick(timeremaining) {
    circle.setAttribute('stroke-dashoffset', -perimeter*(duration-timeremaining)/duration);
  },
  onComplete() {
    console.log('Timer is completed');
  }
});
