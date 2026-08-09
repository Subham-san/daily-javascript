const PI = 3.14;
let radius;
let circumference;


document.getElementById("submit1").onclick = function(){
  radius = document.getElementById("text1").value;
  radius = Number(radius);
  circumference = 2 * PI * radius;
  document.getElementById("h3i").textContent = circumference;
}