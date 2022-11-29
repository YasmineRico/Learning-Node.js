// *-------------Exporting custom modules--------------*

// Import module
// const myModule = require("./myModule");

// console.log(myModule.anything);
// console.log(myModule.inc());


// *------import files instead of entire modlue----------*

const {inc, dec, getCount} = require("./myModule");

inc();
inc();
inc(); //the count is 3

dec();
dec(); // the count is -1 

console.log(`the count is ${getCount()}`); //the count is 1