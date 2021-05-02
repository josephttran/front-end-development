// July 1, 2021
const timeUntilLaunch = {
  days: 8,
  hours: 23,
  minutes: 55,
  seconds: 41
}

const launchDate = new Date()
  launchDate.setDate(launchDate.getDate() + timeUntilLaunch.days)
  launchDate.setHours(launchDate.getHours() + timeUntilLaunch.hours)
  launchDate.setMinutes(launchDate.getMinutes() + timeUntilLaunch.minutes)
  launchDate.setSeconds(launchDate.getSeconds() + timeUntilLaunch.seconds);

let countdownTimer = {
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0
}

const valueElements = document.querySelectorAll('.card .value');
const dayElement = valueElements[0];
const hourElement = valueElements[1];
const minuteElement = valueElements[2];
const secondElement = valueElements[3];

// Main
const timerInterval = setInterval(function() {
  const dateDifference = launchDate - Date.now();
  
  if (dateDifference < 0) {
    clearInterval(timerInterval);
  }

  countdownTimer = getDayHourMinuteSecond(dateDifference);
  updateView(countdownTimer);
}, 1000);

function getDayHourMinuteSecond(milliseconds) {
  const millisecondInDay =  1000 * 60 * 60 * 24;
  const millisecondInHour =  1000 * 60 * 60;
  const millisecondInMinute =  1000 * 60;
  const millisecondInSecond =  1000;
  
  const timer = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  }
  
  let temp = milliseconds;

  if (temp / millisecondInDay >= 1) {
    timer.days = Math.floor(temp / millisecondInDay);
    temp = temp - (timer.days * millisecondInDay);
  }

  if (temp / millisecondInHour >= 1) {

    timer.hours = Math.floor(temp / millisecondInHour);
    temp = temp - (timer.hours * millisecondInHour);
  }

  if (temp / millisecondInMinute >= 1) {
    timer.minutes = Math.floor(temp / millisecondInMinute);
    temp = temp - (timer.minutes * millisecondInMinute);
  }
  
  if (temp / millisecondInSecond >= 1) {
    timer.seconds = Math.floor(temp / millisecondInSecond);
    temp = temp - timer.seconds * millisecondInSecond;
  }

  return timer;
}

function updateView({ days, hours, minutes, seconds }) {
  dayElement.textContent = days < 10 ? `0${days}` : days;
  hourElement.textContent = hours < 10 ? `0${hours}` : hours;
  minuteElement.textContent = minutes < 10 ? `0${minutes}` : minutes;
  secondElement.textContent = seconds < 10 ? `0${seconds}` : seconds;
}

