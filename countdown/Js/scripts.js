//count down timer
const deadline = new Date("Aug 1, 2020 17:49:59").getTime(); 

let updateTimer = setInterval(function() { 
        let now = new Date().getTime(); 
        let presentTime = deadline - now; 
        let days = Math.floor(presentTime / (1000 * 60 * 60 * 24)); 
        let hours = Math.floor((presentTime%(1000 * 60 * 60 * 24))/(1000 * 60 * 60)); 
        let minutes = Math.floor((presentTime % (1000 * 60 * 60)) / (1000 * 60)); 
        let seconds = Math.floor((presentTime % (1000 * 60)) / 1000); 
                          //conditional to fix the time when it is not two digits
                  if (hours === 0) {
                    hours = 12;
                  }
                  if (hours > 12) {
                    hours = hours - 12;
                    
                  }
                  hours = hours < 10 ? "0" + hours : hours;
                  minutes = minutes < 10 ? "0" + minutes : minutes;
                  seconds = seconds < 10 ? "0" + seconds : seconds;

                document.querySelector(".count_down").innerHTML = `${hours}h :${minutes}m :${seconds}s `; 

            if (presentTime < 0) { 
                clearInterval(updateTimer); 
                document.querySelector(".count_down").innerHTML = "EXPIRED"; 
            } 
}, 1000); 

