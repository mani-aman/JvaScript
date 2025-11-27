// console.log("hello world!");
// console.log("Aman the developer");

// let pencilPrice = 10;
// let eraserPrice = 25;
// // console.log("the total price is : ", pencilPrice + eraserPrice );
// let output = `the total price is : ${pencilPrice + eraserPrice} Rupees`;
// console.log(output);


// // Conditional statement 
// // if-else
// console.log("before my if statement")
// let age = 13;
// if (age>=18){
// console.log("you can vote");
// console.log("you can drive")
// }
// else{
// console.log("you cannot vote");
// }
// console.log("after my if statemment");

// let firstName = "aman";
// if (firstName == "aman" ){
//     console.log(`welcome ${firstName}`);
// }


// // question 1= create a traffic light sysytem that shows what to do based on color
// let color = "red";
// if (color== "red"){
//     console.log("stop!");
// }

// if (color== "yellow"){
//     console.log("Slow down!");
// }

// if (color== "green"){
//     console.log("You can go!");
// }

// //else if
// let color = "Red";

// if(color == "Red"){
// console.log("stop");
// }

// else if(color == "yellow"){
// console.log("slow down");
// }

// else if(color == "green"){
// console.log("You can go");
// }
// else{
//     console.log("get lost");
// }



// // else if statement
// let age = 15;
// if (age>=18){
//     console.log("you can vote");
// }
// else if(age<18){
//     console.log("you cannot vote")
// }


// //else if example
// let marks = 90;
// if (marks >=90){
//     console.log("A++");
// }
// else if(marks>=80){
//     console.log("A");
// }
// else if(marks <=33){
//     console.log("F")
// }

// //else conditon

// let age = 18;
// if(age>18){
//     console.log("you can vote");
// }
// else{
//     console.log("you cannot vote");
// }


// //question create a system to calculate popcorn prices based o the size customer askrd for


// let size = 'Xl' ;
// if (size === 'Xl'){
//     console.log("price is Rs 250");
// }
// else if (size === 'l'){
//     console.log("price is Rs 200");
// }
// else if (size === 'M'){
//     console.log("price is Rs 100");
// }
// else {
//     console.log("price is Rs 50");
// }


// //LOGICAL OPERATOR

// let marks = 95;
// if(marks >= 33 && marks >=80){ //both condition is true the give the answer
//     console.log("Pass");
//     console.log('A++');
// }
// if(marks >= 33 || marks >=80){ //if only one condition is true then give the answer
//     console.log("Pass");
//     console.log('B++');
// }
// if((!marks < 33)){  //ulta krta h condition koo
//     console.log("Pass");
//     console.log('C++');
// }


// //Question- A "good string" is a string tha starts with the letterrs 'a' and has a lenght > 3. Write a program to find if a string is good or not.

// let str = "Aman";
// if ((str[0] == 'A') && (str.length > 3)){
//     console.log('Good string');
// }
// else{
//     console.log("Not a good string");
// }

// //SwITCH STATEMENT 

// let color = "yellow"
// switch(color){
//     case "red":
//         console.log("stop");
//         break;
//     case "yellow":
//         console.log("slow down");
//             break;
//     case "green":
//         console.log("Go");
//         break;
//     default:
//         console.log("broken light");    
        
//  }



// //Alert and Prompt

// let firstName = prompt("enter your first name");
// let lastName = prompt("enter your last name");
// let msg = "welcome"+ firstName+ lastName+ "!" ;
// alert(msg);

// alert("something went wrong!");

// //trim method
// let password = prompt("set your password");
// let newPass= password.trim();
// console.log(newPass); 



// let msg = "   hello   ";
// let newMsg = msg.trim();
// console.log("after trim: " , newMsg);
// newMsg = newMsg.toUpperCase();
// console.log("after upprcase : ",newMsg);


// //SLICE
// let str = "Ilovecoding";
// console.log(str.slice(5));
// console.log(str.slice(1,5));
// console.log(str.slice(-6 )); 

// //REPLACE
// let msg = "IloveCoding"
// console.log(msg.replace("love", "do"));
// console.log(msg.replace("o", "x"));


// //QUESTION:
// let msg = "help";
// let Newmsg = msg.trim();
// console.log(Newmsg);
// Newmsg = Newmsg.toUpperCase();
// console.log(Newmsg); 


// //ARRAY
// car = ["audi", "Bmw", "maruti", "xuv"];
// car.push("toyota");
// console.log(car);

// car.pop("xuv");
// console.log(car);

// car.unshift("xuv");
// console.log(car);

// car.shift("audi");
// console.log(car);


// // //ARRAY METHODS

// // let primary = ["red", "green", "yellow"];
// // console.log(primary.indexOf("red"));
// // console.log(primary.indexOf("yellow"));
// // console.log(primary.indexOf("blue"));


// // let primary = ["red", "green", "yellow"];
// // let secondary = ["orange", "green", "violet"];
// // console.log(primary.concat(secondary));

// let primary = ["red", "green", "yellow"];
// console.log(primary.reverse());

// //QUESTION: 
// let starts = ["january", "july", "march", "august"];
// console.log(starts.splice(0,2, "july", "june"));
// console.log(starts);


// let language = ['c','c++','html','javascript','python','java','c#','sql'];
// console.log(language.reverse());
// console.log(language.indexOf('javascript'));

// //QUESTION : Tic Toc Toe

// let game = [['X',null,'O'],[null,'X',null],['O',null,'X']];
// console.log(game);
// game[0][1] =  'O';
// console.log(game);


// //QUESTION : FOR LOOP FRINT ODD NUMBER
// for (let i=1; i<=15; i=i+2){
//     console.log(i);
// }

// let n = prompt("enter your number");
// n = parseInt(n);
// for(let i=n; i<=n*10; i=i+n){
//     console.log(i);
// }



// //GAME OF GUESS THE FAVOURATE MOVIE
// const favMovie = "3Idiots";
// let guess = prompt("enter my favourate movie");
// while ((guess != favMovie) && (guess!="quite")){
//     guess = prompt("wrong guess, please try again");
// }
// if (guess == favMovie){
//     console.log("congrats!!");
// } 
// else{
//     console.log("lost the game");
// }

// let fruits = ['apple','banana','litchi','mango','orange','naspati'];
// for(let i=0; i<=fruits.length; i++){
// console.log(i,fruits[i]);
// }


// //NESTED LOOP OF ARRAY
// let heroes = [
//     ['ironman','spiderman','thor'],
//     ['superman','wonnderman','flash']
// ]
// for(let i=0; i<heroes.length; i++){
//     console.log(i,heroes[i].length);
//     for(let j=0; j<heroes[i].length;j++){
//         console.log(`j=${j},${heroes[i][j]}`);
//     }
// }


// //FOR OF LOOP
// let fruits = ["mano",'apple', 'banana', 'orange', "litchi"];
// for(fruit of fruits){
//     console.log(fruit);
// }
// for(char of "apnacollege"){
//     console.timeLog(char);
// }


// //OBJECT LITERALS
// const student = {
//     name : "aman",
//     age : 23,
//     marks : 94.4,
//     city : "Deoria"
// };
// console.log(student);



// //QUESTION: CREATE AN OBJECT LITERALS FOR THE PROPERTIES OF THTEAD/TWITTER POST WHICH INCLUDES
// const post= {
//     username : "tripathiaman",
//     content : "this is my first post",
//     likes : 500,
//     repost : 50,
//     tags : ["@apna college","@aman"],
// };
// console.log(post);

// //ADD AND UPDATE IN LITERALS
// const student = {
//     name : "aman",
//     age : 23,
//     marks : 94.4,
//     city : "Deoria"
// };
// console.log(student); 
// student.city = "Lucknow"; //update
// console.log(student);
// student.gender = "female"; //add
// console.log(student);
// student.marks = "A"; //change
// console.log(student);


// //OBJECT OF OBJECTs
// const classInfo = {
//     aman : { 
//         grade : "A+",
//         city : "deoria",
//     },
//     ram : {
//         grade : "B+",
//         city : "lucknow",
//     },
//     aditya : {
//         grade : "C+",
//         city : "delhi",
//     },
// };
// console.log(classInfo);
// console.log(classInfo.aman)



// //FUNCTION IN JS
// function rollDice(){
// let rand = Math.floor(Math.random()*6)+1;
// console.log(rand);
// }
// rollDice();


// //FUNCTION WITH ARGUEMENT
// function printName(name,age,gender){
//     console.log(name,age,gender);
// }
// printName('aman',21,'male');

// //RETURN KEYWORD
// function sum(a,b){
//     console.log("hello");
//     console.log("hello");
//     return a+b;
// }
// console.log(sum(1,2)); 



// //QUESTION: CREATE A FUNCTION THAT RETURNS THE SUM OF NUMBERS FROM 1 TO N

// function getSum(n){
// let sum = 0;

// for(let i=0; i<=n; i++){
//     sum = sum + i;
// }
//     return sum;
// }
// let n=10;
// console.log(getSum(n));



// //scope
// let sum = 52; //Global scope
// function calSum(a,b){
//     let sum = a+b; //Function scope
//     console.log(sum);
// }
// calSum(1,2);
// console.log(sum);


// // Block scope
// {
//     let a =33;
//     console.log(a);
// }


// //THIS KEYWORD

// const student = {
//     name : 'aman',
//     age : 21,
//     eng : 89,
//     maths: 91,
//     phy : 97,
//     getAvg(){
//         let avg =(this.eng+ this.maths+ this.phy)/3;
//     console.log(avg);
//     }
// };
// student.getAvg();

// //TRY AND CATCH
// console.log("hello");
// console.log("aman");
// //let a=4;
// try{
//     console.log(a);
// }catch(err){
//     console.log("caught an error.. a is not defined");
//     console.log(err)
// }
// console.log("hello2");
// console.log("hello2");

// //ARROW FUNCTION
// const sum = (a,b) =>{
//     console.log(a+b);
// };
// sum(2,3);



// //Set Timeout
// console.log("hello aman");
// setTimeout( ()=>{ //set time for execution
//     console.log("My coding");
// },5000);

// console.log("welco to");



// console.log("hello aman");
// function greet() {
//     console.log("Hello, Mr!");
// }
// setTimeout(greet,5000);

// console.log("how are yoou!!"); 



// //SetInterval

// let id = function greet(){
//     console.log("hello mr!!");
// }
// setInterval(id,3000);






// //QUESTION : reuturn the square using arrow functiom

// const sqrt= (n) => {
//     console.log(n*n);

// };
// sqrt(4);

// //QUESTION : write a function print "hello world" 5 times at interval if 2s each

// let id =function greet(){
//     console.log("hello world");
// }
// let intervalId = setInterval(id,2000);

// setTimeout(()=>{
//     clearInterval(intervalId);
// },10000);



// //FOR EACH METHOD
// let arr = [1,2,3,4];
// arr.forEach((el)=>{
//     console.log(el);
// });
// arr.forEach(function(el){
//     console.log(el);
// });

// //Map method
// let num= [1,2,3,4];
// let double = num.map((el)=> {
//     return el * el;
// });
// console.log(double);


// //question: check all numbers in our array are multiples of 10 or not

// let num = [10,20,23,40];
// let ans = num.every((el)=>el % 10 ==0);
// console.log(ans);



// //DEFAULT PARAMETEER
// function sum(a,b=4){
//     console.log(a+b);
// }
// sum(2);

// //SPREAD METHOD
// let arr= [1,2,3,4,5,6];
// let char = ("hello");
// let newChar =[...char];
// let newArr = [...arr];
// console.log(newArr);
// console.log(newChar);


// //DESTRUCTURING in array
// let names = ['aman','nikhil','aditya','ram','lakhan,sita'];
// let [winner, runnerup, secondRunnerup,...others] = names;
// console.log(winner); 
// console.log(runnerup);
// console.log(secondRunnerup);
// console.log(...others);

// //DESTRUCTURING in array
// const student ={
//     name : 'aman',
//     age : 21,
//     classes : 'cse',
//     username : '@aman123',
//     password : 'absna',

// };
// let { classes,username,password } = student;
// console.log(classes);
// console.log(username);
// console.log(password);


// //call stacck
// function hello(){
//     console.log("hello");
// }

// function demo(){
//     console.log("calling the functiom");
//     hello();
// }

// console.log("calling demo fnx");
// demo();
// console.log("done,bye!!")


// //CALLBACK nesting  -> callback hell
// h1 = document.querySelector("h1");

// function changeColor(color, delay, nextColorChange){
//     setTimeout(() => {
//         h1.style.color = color;
//         if(nextColorChange) nextColorChange();
//     }, delay);
// }

// changeColor("red",1000, () =>{
//     changeColor("yellow",2000, () =>{
//         changeColor("green",3000)
//     });
// });


// //PROMISES - then and catch

// function savetoDb(data){
//     return new Promise((resolve, reject)=>{
//         let internetSpeed = Math.floor(Math.random() * 10) + 1;
//         if(internetSpeed > 4){
//             resolve ("succes: data was saved");
//         }else{
//             reject("reject: weak connection");
//         }
//     });
// }

// savetoDb("aman tripathi")
//     .then(()=>{
//         console.log("promise was resolved");
//     })
//     .catch(()=>{
//         console.log("promise was rejected");
//     });



// //PROMISE channing

// function savetoDb(data){
//     return new Promise((resolve, reject)=>{
//         let internetSpeed = Math.floor(Math.random() * 10) + 1;
//         if(internetSpeed > 4){
//             resolve ("succes: data was saved");
//         }else{
//             reject("reject: weak connection");
//         }
//     });
// }

// savetoDb("aman tripathi")
//     .then(()=>{
//         console.log("data 1 saved");
//         return savetoDb("vibhu")
//     })
//     .then(()=>{
//         console.log("data2 saved");
//         return savetoDb("shikha")
//     })
//     .then(()=>{
//         console.log("data3 saved");
//     })
//     .catch(()=>{
//         console.log("promise was rejected");
//     });    


// //AWAIT KEYWORD

// h1 = document.querySelector("h1");

// function changeColor(color, delay){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             let num = Math.floor(Math.random()*5)+1;
//             if(num>3){
//                 reject("promise rejected");
//             }

//             h1.style.color = color;
//             console.log(`color changed to ${color}`);
//             resolve("color changed");
//         },delay);
//     });
// }

// async function demo(){

//     try{
//         await changeColor("red", 1000);
//     await changeColor("orange", 1000);
//     await changeColor("green", 1000);
//     await changeColor("yellow", 1000);
//     }
//     catch(err) {
//         console.log("error caught");
//         console.log(err);        
//     }

//     let n = 5;
//     console.log(n);
//     console.log(n+8)
// }
// demo();



// //API

// let url = "https://catfact.ninja/fact";

// fetch(url)
// .then((res)=>{
//     console.log(res);
//     res.json().then((data)=>{
//         console.log(data);
//     });
// })

// .catch((err)=>{
//     console.log("ERROR", err);
// });


// let btn = document.querySelector("button");
// btn.addEventListener("click", async()=>{
//     let facts = await getFacts();
//     console.log(facts);
// });


// let url = "https://catfact.ninja/fact";
// async function getFacts(){
//     try{
//         let res = await axios.get(url);
//         return res.data.fact;
//     } catch(e){
//         console.log("error", e);
//         return "No fact found";
//     }
// }
// getFacts();
