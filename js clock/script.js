const handSecond = document.querySelector(`.hand-second`);
const handMinute = document.querySelector(`.hand-minute`);
const handHour = document.querySelector(`.hand-hour`);

function setDate () {
    const now = new Date();
    const seconds = now.getSeconds();
    const secondDegree = ((seconds / 60) * 360) + 90;
handSecond.style.transform = `rotate(${secondDegree}deg)`;
console.log(seconds);

const mins = now.getMinutes();
const minsDegree = ((mins / 60)*360) + 90;
handMinute.style.transform = `rotate(${minsDegree}deg)`;
console.log(mins);

const hours = now.getHours();
const hoursDegree = ((hours / 12)*360) + 90;
handHour.style.transform = `rotate(${hoursDegree}deg)`;
console.log(hours);

}

setInterval(setDate, 1000);