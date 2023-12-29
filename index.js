let homeEl = document.getElementById("score1")
let guestEl = document.getElementById("score2")
let homeScore = 0;
let guestScore = 0;

//Variables for the project

let [seconds, minutes] = [0,12];
let displayTime = document.getElementById("displayTime")
let timer = null;

// Function to run the timer for the clock
function clockTime(){
    
    if(seconds == 0){
        seconds = 60;
        minutes--;   
    }
    seconds--;
    
    let s =  seconds < 10 ? "0" + seconds: seconds;
    let m =  minutes < 10 ? "0" + minutes: minutes;
    
    displayTime.style.color = "#bfd200";
    displayTime.innerText = m + ":" + s;
    
     
}
// Starts the clock
function clockStart(){
    if(timer != null){
       clearInterval(timer);
    }
     timer = setInterval(clockTime,1000);
     
}
// stops the clock
function clockStop(){
    clearInterval(timer);
}
// Resets the clock

function clockReset(){
    clearInterval(timer);
    homeScore =0;
    homeEl.textContent = homeScore;
    guestScore = 0;
    guestEl.textContent = guestScore;
    [seconds, minutes] = [0,12];
    displayTime.textContent =  minutes + ":" + "00";
    displayTime.style.color = "#F94F6D";
    guestEl.style.color = "#F94F6D";
    homeEl.style.color = "#F94F6D";

}
// Functions to increment the score for the Home and Guest teams.
function increment1(team){
   if(team == "home"){
       homeScore +=1;
       homeEl.textContent = homeScore;
   } else if( team == "guest") {
       guestScore +=1;
       guestEl.textContent = guestScore;
   }
   colorWinner();
}

function increment2(team){
   if(team == "home"){
       homeScore +=2;
       homeEl.textContent = homeScore;
   } else if( team == "guest") {
       guestScore +=2;
       guestEl.textContent = guestScore;
   }
   colorWinner();
}

function increment3(team){
   if(team == "home"){
       homeScore +=3;
       homeEl.textContent = homeScore;
   } else if( team == "guest") {
       guestScore +=3;
       guestEl.textContent = guestScore;
   }
   colorWinner();
  
}

// Highliting the present winner

function colorWinner(){
     if(homeScore > guestScore){
         homeEl.style.color = "#70e000";
         guestEl.style.color  = "#F94F6D"
     }
    else if(guestScore > homeScore) {
         guestEl.style.color = "#70e000";
         homeEl.style.color = "#F94F6D";
    } else {
         guestEl.style.color = "#F94F6D";
         homeEl.style.color = "#F94F6D";
         
    }
}




