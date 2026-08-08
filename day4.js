// HOW TO GET USER INPUT 

// 1. easy way = window prompt
// 2. professional way = html textbox 

// easy way = 

/*let age;
username = window.prompt("hii enter your age : ");

console.log(age);*/

// professional way = 
let name;

document.getElementById("mysubmit").onclick = function(){
    name = document.getElementById("mytext").value;
    document.getElementById("myh1").textContent = `Hello ${name}`;
}

console.log(name);