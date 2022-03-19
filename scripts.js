let minutesView = document.querySelector(".minutes");
let secondsView = document.querySelector(".seconds");
let millesimalView = document.querySelector(".millesimal");
let millesimal = 0;
let seconds = 0;
let minutes = 0;
var controler = false;

function update(){
    if(controler){

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
}else if(!controler){ 
millesimal = 0;
seconds = 0;
minutes = 0;
}    
}

function events(){
    let start = document.querySelector(".start");
    let pause = document.querySelector(".pause");
    let reset = document.querySelector(".reset");
    start.addEventListener("click", pressStart);
    pause.addEventListener("click",pressPause)
    reset.addEventListener("click", init);

   
}

function pressStart(){
    controler = true
   setInterval(update,10);
   
}

function pressPause(){
   controler = false
}

function clearView(){
    minutesView.innerHTML = "00:"
    secondsView.innerHTML = "00:"
    millesimalView.innerHTML = "00"
}



function init(){
    controler = false;
    clearView();
    events()
}

init();




