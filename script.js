// console.log("heyyyy");
// window.alert("i like fried rice");

// document.getElementById("my p1").textContent="i love all the spicy dishes";
// document.getElementById("h1 ide").textContent="it is what it is";

// let username;
  
// document.getElementById("mySubmit").onclick = function(){
//     username = document.getElementById("myText").Value;
//     document.getElementById("myh1").textContent = `hello ${username}`;
// }
  
// let a =""; 
// let c =""; 
// let z =""; 

// a = Number(a);
// c = String(c);
// z = Boolean(z);

// console.log(a,typeof a );
// console.log(c ,typeof c);
// console.log(z,typeof z);

// const pi = 3.14;
// let radius;
// let circumference;


// document.getElementById("mySubmit").onclick = function(){
//     radius = document.getElementById("myText").value;
//     radius = Number(radius);
//     circumference = 2 * pi * radius;
//     document.getElementById("myh3").textContent = `${circumference} cm`;
// }
 


// let m;
// let a;
// let force;

 
// document.getElementById("mySubmit").onclick = function() {
//     m = Number(document.getElementById("mass").value);
//     a = Number(document.getElementById("acc").value);
//     force = m*a;
//     document.getElementById("myh3").textContent = `${force}`;

// const decreasebtn = document.getElementById(`decreasebtn`);
// const resetbtn = document.getElementById(`resetbtn`);
// const increasebtn = document.getElementById(`increasebtn`);
// const countlabel = document.getElementById(`countlabel`);
// let count = 0;

// decreasebtn.onclick = function(){
//     count--;
//     countlabel.textContent = count;
// }
// resetbtn.onclick = function(){
//     count = 0;
//     countlabel.textContent  = count;
// }
// increasebtn.onclick = function(){
//     count++;
//     countlabel.textContent = count;
// }



// console.log(Math.E);
//   let k = 81;
//   r=Math.sqrt(k);
//   console.log(r);

// let randomNum = Math.floor(Math.random()*9);
// console.log(randomNum);
    

// const myButton = document.getElementById(`myButton`);
// const myLabel = document.getElementById(`myLabel`);
// const max = 6;
// const min = 1;
// let randomNum;

// myButton.onclick = function(){
//     randomNum = Math.floor(Math.random() * max) + min;
//     myLabel.textContent = randomNum;
//}



// let f=3;

// if(f>=20){
//     console.log(`it is valid`);
// }
// else if(f<0){
//     console.log(`maybe it`)
// }
// else{
//     console.log(`it is not valid`);
// }



// const hitcheckbox = document.getElementById(`hitcheckbox`);
// const votebtn = document.getElementById(`votebtn`);
// const mySubmit = document.getElementById(`mySubmit`);
// const subresult = document.getElementById(`subresult`);
// const paymentresult = document.getElementById(`paymentresult`);

// mySubmit.onclick = function(){

//     if(hitcheckbox.click){
//          subresult.textContent = `you are hit!!!`;
//     }
//     else{
//         subresult.textContent = `you are not hit!!!`;
//     }
//     if(votebtn.click){
//         paymentresult.textContent = `you have voted`;
//     }
   
// }

// let age = 22;
// let answer = age>=21?`you are in depression` : `you are teenager `;
// console.log(answer);

// let isStudent = false;
// let answer = isStudent ? `your child` : `your uncle`;
// console.log(answer);

// let apple = 60;
// let jackfru = apple<=18 ? apple+10 : apple-20;
// console.log(jackfru);

// let day = 1;

// switch(day){
//     case 1:
//           console.log(`it is monday`);
//           break;
//     case 2:
//           console.log(`it is tuesday`);
//           break;
//     case 3:
//           console.log(`it is wednesday`);
//           break;
//     case 4:
//           console.log(`it is thursday`);
//           break;
// }

// let boy = 100;
// let girl;

// switch(true){
//    case boy>20:
//         girl = `b`;
//     case boy<20:
//         girl = `g`;
//     default:
//         girl = `no baby`;

// }
// console.log(girl);

// let num = "12365";
// result = num.padEnd(10,"9");
// console.log(result);

//  const email = `bhavsar@gmail.com`;
//  console.log(email.slice(4,9));
 
//  let me = `pihu`;
//  console.log(me.slice(0,3));

// let fly = `  haanji `;
// console.log(fly.trim(" ").toUpperCase());
 

// for(let i = 0; i<=20;i++){
    

//     if(i==10){
//         continue;
//     }
//     else{
//         console.log(i);
//     }
    
// }
 


// function wish(username, age){
//     console.log(`happy birthday to ${username}!!! you are ${age}`);
// }

// wish(`priya`, 19);
// wish(`sanjana`, 20);

// function isEven(number){

//     if(number % 2 === 0){
//         console.log(`even`);
//     }
//     else{
//         console.log(`odd`);
//     }
// }
// isEven(22);

// function isvalidemail(email){

//     if(email.includes(`.`)){
//         return true;
//     }
//     else{
//         return false;
//     }
// }

// console.log(isvalidemail(`hehe@emailcom`));
// let p = 100;
// function2();

// function function1(){
   
//     console.log(p);
// }

// function function2(){
     
//     console.log(p);
// }       
//  let fruits = ["lily","sunflower","rose"];
// fruits.sort();
//  for(let i in fruits){
//     console.log(`I want ${fruits[i]}`);
//  }


// const targetNumber = Math.floor(Math.random() * 100) + 1;

// // Function to play the guessing game
// function playGuessingGame() {
//     let attempts = 0;
//     let guessedNumber;

//     do {
//         // Prompt the user to guess a number
//         guessedNumber = parseInt(prompt("Guess the number between 1 and 100:"));

//         // Check if the input is a valid number
//         if (isNaN(guessedNumber) || guessedNumber < 1 || guessedNumber > 100) {
//             alert("Please enter a valid number between 1 and 100.");
//             continue;
//         }

//         // Check if the guess is correct, too high, or too low
//         if (guessedNumber === targetNumber) {
//             attempts++;
//             alert(`Congratulations! You guessed the number in ${attempts} attempts.`);
//         } else if (guessedNumber < targetNumber) {
//             attempts++;
//             alert("Too low. Try again.");
//         } else {
//             attempts++;
//             alert("Too high. Try again.");
//         }

//     } while (guessedNumber !== targetNumber);

//     // Display a message when the game is over
//     alert("Game over. Thanks for playing!");
// }

// // Start the game
// playGuessingGame();

// let me = [`you`,`them`,`they`,`he`];
// for(let i=0 ; i<me.length ; i++){
//     console.log(...me[i]);
// }
 
function sum(callback , x , y){
   result = x+y;
   callback();
}
function display(){
    console.log(result);
}
document.getElementById(h1) = result;
sum(display , 5,4)
 
 

 

