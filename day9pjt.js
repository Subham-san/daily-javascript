// random number generator form 1-6 

const mybutton = document.getElementById("mybutton");
const label = document.getElementById("label");
const min = 1;
const max = 6;
let randomNum;

mybutton.onclick = function(){
  randomNum = Math.floor(Math.random() * max) + min;
  label.textContent = randomNum;
}