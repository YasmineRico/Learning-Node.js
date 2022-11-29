// *-------------Collecting Info with Readline--------------*

//readline is a wrapper for stdin/stdout 
const readline = require("readline");

//create interface for stdin/stdout wrapper readline
const rl = readline.createInterface({
    input: process.stdin, //maps to process standard input
    output: process.stdout //maps to process standard output
});


rl.question("How do you like Node? ", (answer) => {
    console.log(`You answered: ${answer}`);
});