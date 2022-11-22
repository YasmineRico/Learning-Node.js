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

// *-------------------Handling Argument Variables with process.argv-----------------------*

// console.log(process.argv);

//process the values of the flags 
function grab(flag){
    let indexAfterFlag = process.argv.indexOf(flag) +1; //Allows to show position values after the flag
    return process.argv[indexAfterFlag];
}

let greeting = grab("--greeting"); 
let user = grab("--user");

console.log(greeting)
console.log(user);