// let para1 = document.createElement("p");
// para1.innerText = 'hey i am red';
// document.querySelector('body').append(para1);
// // para1.classList.add(red);
// para1.style.color = "red";


// let h3 = document.createElement("h3");
// h3.innerText = 'I am blue h3';
// document.querySelector('body').append(h3);

// h3.style.color = "blue";


let div = document.createElement("div");
let h1 = document.createElement("h1");
let para1 = document.createElement("p");

h1.innerText = "I am in a div";
para1.innerText = "Mee too";

div.append(h1);
div.append(para1);
div.classList.add("box");

document.querySelector("body").prepend(div);