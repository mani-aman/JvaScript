// let btns = document.querySelectorAll("button");
// for(btn of btns){
//     // btn.onclick = sayHello;
//     btn.addEventListener("dblclick", function(){
//         console.log("you double clicked");
//     });
// }

// function sayHello(){
//     console.log("liked your post");
// }



let btn = document.querySelector("button");

btn.addEventListener("dblclick", function(){
    let h1 = document.querySelector("h1");
    let randomColor = getRandomColor();
    h1.innerText = randomColor;

    let div = document.querySelector("div");
    div.style.backgroundColor = randomColor;

    console.log("Generate a color");
});
function getRandomColor(){
    let red = Math.floor(Math.random()*255);
    let green = Math.floor(Math.random()*255);
    let blue = Math.floor(Math.random()*255);

    let color = `rgb(${red},${green},${blue})`;
    return color;
}