let minutesView = document.querySelector(".minutes");
let secondsView = document.querySelector(".seconds");
let millesimalView = document.querySelector(".millesimal");
git
let millesimal = 0;
let seconds = 0;
let minutes = 0;

function update(){
    if(millesimal < 99){
        millesimal++
    }
    if(millesimal == 99) {
        millesimal = 0
        seconds++
        if(seconds < 10) {
            secondsView.innerHTML = "0"+seconds+":";   
        }
    }
    if(seconds < 59 && seconds >= 10){
        secondsView.innerHTML = seconds+":";
    }
    if(seconds == 59){
        seconds = 0;
        minutes++
        if(minutes < 10){
            minutesView.innerHTML = "0"+minutes+":"
        }
    }if(minutes < 59 && minutes >= 10){
        minutesView.innerHTML = minutes+":"
    }
    
    millesimalView.innerHTML = millesimal;
    
    

}



function events(){
    let start = document.querySelector(".start");
    let pause = document.querySelector(".pause");
    let reset = document.querySelector(".reset");
    start.addEventListener("click", pressStart);
    pause.addEventListener("click",pressPause)
    reset.addEventListener("click", init);

   
}

function pressPause(){
    clearInterval(crono)
}

function pressStart(){
    
    crono = setInterval(update, 10)
    
}

function init(){
    minutesView.innerHTML = "00:"
    secondsView.innerHTML = "00:"
    millesimalView.innerHTML = "00"
    events()
      
}




init();




