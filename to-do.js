// let todo = [];
// let request =prompt("Enter you request");
// while(true){
//     if(req == quite){
//         console.log("Quitting app");
//         break;
//     }

//     if (req == list){
//         console .log("------");
//         for(let i=0; i<=todo.length; i++){
//             console.log(i, todo[i]);
//         }
//         console.log("--------");
//     }else if(req=="add"){
//         let task = prompt("please enter the task if you want");
//         todo.push(task);
//         console.log("task added");
//         }else if (req == "delete"){
//             let idx = prompt("please enter the task index");
//             todo.splice(idx,1);
//         }
// }






let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click",function(){
    let item = document.createElement("li");
    item.innerText = inp.value;

    let delBtn = document.createElement("button");
    delBtn.innerText = "delete";
    delBtn.classList.add("delete");

    item.appendChild(delBtn);
    ul.appendChild(item);
    inp.value = "";
});

let delBtns = document.querySelectorAll(".delete");
for(delBtn of delBtns){
    delBtn.addEventListener("click",function(){
        let par = this.parentElement;
        console.log(par);
        parent.remove();
    });
}
