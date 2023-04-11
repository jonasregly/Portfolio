const minutos =document.getElementsByClassName('minutos')[0]
const segundos =document.getElementsByClassName('segundos')[0]
const milisegundos =document.getElementsByClassName('milisegundos')[0]
const iniciarbtn =document.querySelector(".iniciar")
const pausarbtn =document.querySelector(".pausar")
const continuarbtn =document.querySelector(".continuar")
const resetarbtn =document.querySelector(".resetar")

let interval;

let min=0;
let seg=0;
let miliseg=0;
let isPaused=false;


iniciarbtn.addEventListener('click' , initempo);
pausarbtn.addEventListener('click', pauseTimer);
continuarbtn.addEventListener('click', continuarTime);
resetarbtn.addEventListener('click' , resetarTime);

function initempo(){


interval= setInterval(()=>{

if(!isPaused){

miliseg+=10

if(miliseg===1000){

seg++;
miliseg=0;
}

if(seg===60){

min++;
seg=0;
}

minutos.textContent =formatime(min);
segundos.textContent = formatime(seg);
milisegundos.textContent = formatMiliseconds(miliseg);
}

},10)

iniciarbtn.style.display="none";
pausarbtn.style.display="block";

}

function pauseTimer(){

isPaused=true;
pausarbtn.style.display="none"
continuarbtn.style.display="block"
}


function continuarTime(){

isPaused=false;
pausarbtn.style.display="block";
continuarbtn.style.display="none";

}


function resetarTime(){

clearInterval(interval);
min=0;
seg=0;
miliseg=0;


minutos.textContent="00"
segundos.textContent="00"
milisegundos.textContent="000"

iniciarbtn.style.display="block"
pausarbtn.style.display="none"
continuarbtn.style.display="none"

isPaused=false;

}



function formatime(time){

return time < 10 ? `0${time}` : time;


}

function formatMiliseconds(time){

return time < 100 ? `${time}`.padStart(3,"0") :time;


}