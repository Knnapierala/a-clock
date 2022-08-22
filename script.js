setInterval(setClock, 1000);

const hourHand = document.querySelector("[data-hour-hand");
const minuteHand = document.querySelector("[data-minute-hand");
const secondHand = document.querySelector("[data-second-hand");

function setClock() {
  const currentDate = new Date();
  const seconds = currentDate.getSeconds() / 60;
  const minutes = (seconds + currentDate.getMinutes()) / 60;
  const hours = (minutes + currentDate.getHours()) / 12;
  setRoration(secondHand, seconds);
  setRoration(minuteHand, minutes);
  setRoration(hourHand, hours);
}

function setRoration(element, rotationRatio) {
  element.style.setProperty("--rotation", rotationRatio * 360);
}

setClock();
