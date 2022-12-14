// let hello = "Hello world from Node.js";
// console.log(hello);

// // This will go to the hello variable and return "Node.js" from the string
// let justNode = hello.slice(17);
// console.log(justNode);

// // Using a template literal to show the variable 'justNode' in the string of our console.log
// console.log(`Who let the ${justNode} out?!`)

// console.log("Hello World!");

// // *-------------------Using Require Function -----------------------*

// // importing the path module from node to use the functions. 
// const path = require("path");

// // Will return the specific file global.js rather than the entire path
// console.log(`The file name is ${path.basename(__filename)}`);

// // for loop: take a look at the global object and look at all the keys that are in the object. 
// for(let key in global){
//     console.log(key);
// }

// // Gives us the directory
// console.log(__dirname);

// //Will console the entire path 
// console.log(__filename);

// // *-------------------Handling Argument Variables with process.argv-----------------------*

// console.log(process.argv);

// // process the values of the flags 
// function grab(flag){
//     let indexAfterFlag = process.argv.indexOf(flag) +1; //Allows to show position values after the flag
//     return process.argv[indexAfterFlag];
// }

// let greeting = grab("--greeting"); 
// let user = grab("--user");

// console.log(greeting)
// console.log(user);

// *-------------------Working with Standard Output-----------------------*

// // sending strings to terminal
// process.stdout.write("Hello \n \n");

// //Creating an array of questions
// const questions = [
//     "What is your name?", 
//     "What would you rather be doing?",
//     "What is your preferred programming language?"
// ];

// //Answers to the questions will be put in this empty array
// const answers = [];

// //setting an empty array for a default arg
// function ask(i = 0){
//     process.stdout.write(`\n\n\n ${questions[i]}`);
//     process.stdout.write(`> `);
// }

// //invoke the questions
// ask();

// // Listen for data event on the object using node asynchronously This allows to save the answers.
// process.stdin.on("data", function(data){
//     answers.push(data.toString().trim()); //convert data to string then trim off white space
//     if(answers.length < questions.length){
//         ask(answers.length);
//     }else{
//         process.exit();
//     }
// });

// //will exit the questions and then display the answers along with the string below
// process.on("exit", function(){
//     process.stdout.write("\n\n\n");
//     process.stdout.write(`Go ${answers[1]} ${answers[0]}, you can finish writing ${answers[2]} later`);
// })


// *-------------------Creating Delay with setTimeout------------------*


// const waitTime = 3000;
// // Sets the time for 3 seconds 
// console.log(`Setting a ${waitTime / 1000} a second delay`);

// //When 3 seconds have passed it will show "done"
// const timerFinished = () => {
//     // line to finish after three seconds instead of continuing to increment count
//     clearInterval(interval)
//     console.log("done");
// };

// //first function called for when the timeout has elapsed, then waitTime to define how long it should take.
// setTimeout(timerFinished, waitTime);


// // *-------------------Incorporating setInterval-----------------------*

// //half a second
// const waitInterval = 500;

// // start timer at 0
// let currentTime = 0;

// // increment the time starting from 0 and show every half second with the consolelog message
// const incTime = () =>{
//     currentTime += waitInterval;
//     // setting to a percentage of loading 
//     const p = Math.floor((currentTime/waitTime) * 100);
//     process.stdout.clearLine();
//     process.stdout.cursorTo(0);
//     process.stdout.write(`waiting .... ${p}% `);
    
// }

// // creating value of interval from timerFinished function
// const interval = setInterval(incTime, waitInterval);

