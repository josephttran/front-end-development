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

const card = document.querySelectorAll('.card');
const dayElement = card[0];
const hourElement = card[1];
const minuteElement = card[2];
const secondElement = card[3];
const dayValueElements = dayElement.querySelectorAll('.value');
const hourValueElements = hourElement.querySelectorAll('.value');
const minuteValueElements = minuteElement.querySelectorAll('.value');
const secondValueElements = secondElement.querySelectorAll('.value');

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
  const bottomCardSecond = secondElement.querySelector('.bottom');
  const bottomCardMinute = minuteElement.querySelector('.bottom');
  const bottomCardHour = hourElement.querySelector('.bottom');
  const bottomCardDay = dayElement.querySelector('.bottom');
  let isSecondAnimate = false;

  if (!isSecondAnimate) {
    bottomCardSecond.style.animation = 'flip 1s infinite';
    isSecondAnimate = true;
  }

  if (seconds == 59) {
    bottomCardMinute.style.animation = 'flip 1s';
    setTimeout(() => {
      bottomCardMinute.style.animation = 'none';
    }, 1000);
  }

  if (minutes == 59) {
    bottomCardHour.style.animation = 'flip 1s';
    setTimeout(() => {
      bottomCardHour.style.animation = 'none';
    }, 1000);
  }

  if (hours == 23) {
    bottomCardDay.style.animation = 'flip 1s';
    setTimeout(() => {
      bottomCardDay.style.animation = 'none';
    }, 1000);
  }

  secondValueElements.forEach(node => {
    node.textContent = seconds < 10 ? `0${seconds}` : seconds;
  });
  
  minuteValueElements.forEach(node => {
    node.textContent = minutes < 10 ? `0${minutes}` : minutes;
  });
  
  hourValueElements.forEach(node => {
    node.textContent = hours < 10 ? `0${hours}` : hours;
  });

  dayValueElements.forEach(node => {
    node.textContent = days < 10 ? `0${days}` : days;
  });

}

