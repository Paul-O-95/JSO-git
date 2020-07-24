// Assignment of variables

let countDown = document.querySelector(".count_down");
//this gets the date that the counter is going to count up to
let  expiryDate = new Date("2020-08-31").getTime();

//this is a set interval which will keep calling after every 1 millisecond
let updateCounter = setInterval(() => {
  let timeNow = new Date().getTime();

  let timeToExpiryDate = expireyDate - timeNow;

  let days = Math.floor(timeToExpiryDate / (1000 * 60 * 60 * 24));
  let hours = Math.floor(
    (timeToExpiryDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  let minutes = Math.floor((timeToExpiryDate % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((timeToExpiryDate % (1000 * 60)) / 1000);
  
  //conditional to fix the time when it is not two digits
  if (hours === 0) {
    hours = 12;
  }
  if (hours > 12) {
    hours = hour - 12;
    
  }
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  //Displaying in the DOM
  countDown.innerHTML = `${hours} : ${minutes} : ${seconds} `;

  // If the count down is finished, the text will appear in the body
  if (expiryDate < 1) {
    clearInterval(updateCounter);
    countDown.innerHTML = `Boom! Time's Up!!!!(:`;
  }
}, 1000);
