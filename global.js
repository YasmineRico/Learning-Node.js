let hello = "Hello world from Node.js";
console.log(hello);

// This will go to the hello variable and return "Node.js" from the string
let justNode = hello.slice(17);
console.log(justNode);

// Using a template literal to show the variable 'justNode' in the string of our console.log
console.log(`Who let the ${justNode} out?!`)

// console.log("Hello World!");